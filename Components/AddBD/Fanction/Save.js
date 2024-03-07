import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// Определяем функцию сохранения данных в базу данных SQLite
export const save = async (dateValue, busolValue, orientir, uroven, corPricel, arrCorUglomer, navigation) => {
  try {
    // Всплывающее окно для подтверждения сохранения данных
    Alert.alert(
      'Подтвердите сохранение',
      'Вы уверены, что хотите сохранить данные?',
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Отмена сохранения данных'),
          style: 'cancel',
        },
        {
          text: 'Сохранить',
          onPress: () => {
            // Открываем или создаем базу данных
            const db = SQLite.openDatabase('artilery_gun.db');

            // Выполняем SQL-запрос для создания таблицы, если ее нет
            db.transaction(tx => {
              tx.executeSql(
                'CREATE TABLE IF NOT EXISTS artilery_table (id INTEGER PRIMARY KEY AUTOINCREMENT, dateValue TEXT, busolValue TEXT, orientir TEXT, uroven TEXT, corPricel TEXT, arrCorUglomer TEXT)',
                [],
                // Успешно создали таблицу
                () => {
                  // Выполняем SQL-запрос для вставки данных
                  tx.executeSql(
                    'INSERT INTO artilery_table (dateValue, busolValue, orientir, uroven, corPricel, arrCorUglomer) VALUES (?, ?, ?, ?, ?, ?)',
                    [dateValue, busolValue, orientir, uroven, JSON.stringify(corPricel), JSON.stringify(arrCorUglomer)],
                    // Успешно вставили данные
                    () => {
                      console.log('Данные успешно сохранены в базу данных');

                      // Выполняем SQL-запрос для выборки всех данных из таблицы
                      tx.executeSql(
                        'SELECT * FROM artilery_table',
                        [],
                        // Успешно получили данные
                        (_, { rows: { _array } }) => {
                          console.log('Сохранённые данные:', _array);
                          // Переход на страницу Main после успешного сохранения данных
                          navigation.navigate('Main');
                        },
                        // Ошибка при получении данных
                        (_, error) => {
                          console.error('Ошибка при получении данных из базы данных:', error);
                        }
                      );
                    },
                    // Ошибка при вставке данных
                    (_, error) => {
                      console.error('Ошибка при вставке данных в базу данных:', error);
                    }
                  );
                },
                // Ошибка при создании таблицы
                (_, error) => {
                  console.error('Ошибка при создании таблицы в базе данных:', error);
                }
              );
            });
          },
        },
      ],
      { cancelable: false }
    );
  } catch (error) {
    console.error('Ошибка при сохранении данных в базу данных:', error);
  }
};