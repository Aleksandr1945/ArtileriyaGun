import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import styles from '../AddBD/styles';

const db = SQLite.openDatabase('artilery_gun.db');

const DataByDateValue = ({ selectedDate }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Выбираем данные из таблицы по выбранной дате
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM artilery_table WHERE dateValue = ?',
        [selectedDate],
        (_, { rows: { _array } }) => {
          setData(_array);
        },
        (_, error) => {
          console.error('Ошибка при получении данных из базы данных:', error);
        }
      );
    });
  }, [selectedDate]);

  return (
    <View style={styles.GunResult}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.GunResultText}>
            <Text>Дата: {item.dateValue}</Text>
            <Text>На бусоль: {item.busolValue}</Text>
            <Text>Ориентир: {item.orientir}</Text>
            <Text>Уровень: {item.uroven}</Text>
            <View>
                <Text>Прицел:</Text>
                <FlatList
                data={JSON.parse(item.corPricel)}
                keyExtractor={(corItem, index) => index.toString()}
                renderItem={({ item: corItem }) => (
                    <View style={{ marginLeft: 20 }}>
                    <Text>{corItem.text}</Text>
                    </View>
                )}
                />
            </View>
            <View>
                <Text>Угломер:</Text>
                <FlatList
                data={JSON.parse(item.arrCorUglomer)}
                keyExtractor={(corItem, index) => index.toString()}
                renderItem={({ item: corItem }) => (
                    <View style={{ marginLeft: 20 }}>
                    <Text>{corItem.text}</Text>
                    </View>
                )}
                />
            </View>     
            {/* Добавьте здесь остальные поля данных */}
          </View>
        )}
      />
    </View>
  );
};

export default DataByDateValue;