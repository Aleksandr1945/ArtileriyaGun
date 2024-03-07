import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateValueList from './Value/ValueDb';
import DataByDateValue from './Value/DateByDateValue';
import styles from './AddBD/styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Main() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [refreshList, setRefreshList] = useState(false); // State для обновления списка
  const navigation = useNavigation();

  const handlePressDate = (date) => {
    setSelectedDate(date);
  };

  const loadDb = () => {
    navigation.navigate('AddBd');
  };

  useFocusEffect(
    React.useCallback(() => {
      // Обновление состояния при каждом фокусировании на экране Main
      setSelectedDate(null);
      // Обновляем состояние для обновления списка элементов
      setRefreshList(prevState => !prevState);
    }, [])
  );

  return (
    <View>
      <View style={styles.DateBlock}>
        {/* Передаем refreshList в DateValueList */}
        <DateValueList onPressDate={handlePressDate} refreshList={refreshList} />
        {selectedDate && <DataByDateValue selectedDate={selectedDate} />}
      </View>

      <TouchableOpacity style={styles.GunButton} onPress={loadDb}>
        <Text style={styles.buttonText}>Начать стрельбу</Text>
      </TouchableOpacity>
    </View>
  );
}