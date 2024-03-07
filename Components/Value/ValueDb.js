import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import styles from '../AddBD/styles';
import { useNavigation } from '@react-navigation/native';

const db = SQLite.openDatabase('artilery_gun.db');

const DateValueList = ({ onPressDate, refreshList }) => {
  const [dateValues, setDateValues] = useState([]);
  const navigation = useNavigation();

  // Функция для обновления списка дат
  const updateDateValues = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT DISTINCT dateValue FROM artilery_table',
        [],
        (_, { rows: { _array } }) => {
          setDateValues(_array.map(item => item.dateValue));
        },
        (_, error) => {
          console.error('Ошибка при получении данных из базы данных:', error);
        }
      );
    });
  };

  useEffect(() => {
    // Вызываем функцию обновления при монтировании компонента
    updateDateValues();
  }, [refreshList]); // Используем refreshList как зависимость

  const handleDeleteDateValue = (dateValue) => {
    Alert.alert(
      'Удалить элемент',
      `Вы уверены, что хотите удалить элемент с датой: ${dateValue}?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => deleteDateValue(dateValue),
          style: 'destructive',
        },
      ]
    );
  };

  const deleteDateValue = (dateValue) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM artilery_table WHERE dateValue = ?',
        [dateValue],
        () => {
          console.log(`Элемент с датой ${dateValue} успешно удален`);
          // После удаления элемента, обновляем список дат
          updateDateValues();
        },
        (_, error) => {
          console.error('Ошибка при удалении данных из базы данных:', error);
        }
      );
    });
  };

  return (
    <View>
      <Text>Даты стрельбы:</Text>
      <FlatList
        style={styles.DateList}
        data={dateValues}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.DateList}
            onPress={() => onPressDate(item)}>
            <Text style={styles.GunResultText}>{item}</Text>
            <TouchableOpacity
              style={styles.DateListDel}
              onPress={() => handleDeleteDateValue(item)}>
              <Text style={{ color: 'red' }}>Удалить</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DateValueList;