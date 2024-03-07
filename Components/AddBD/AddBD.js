import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  BackHandler,
 } from 'react-native';
import styles from './styles'


 import {
  handleDate,
  Dates,
  onEnableDate,
 } from './Fanction/Date';

 import {
  handleBusol,
  Busol,
  onEnableBusol
 } from './Fanction/Busol';

 import {
  handleOrientir,
  Orientir,
  onEnableOrientir,
 } from './Fanction/Orientir';

 import {
  Uroven,
  handleUroven,
  onEnableUroven,
 } from './Fanction/Uroven';

 import {
   handleCorValue,
  handlePricel,
  Pricel,
  PricelEdit,
  PlusPricel,
  MinusPricel,
  deletePricel,
 } from './Fanction/Pricel';

 import {
  handleUglomer,
  UglomerPlus,
  UglomerMinus,
  deleteUglomer,
 } from './Fanction/Uglomer';

 import {
  save
 } from './Fanction/Save'



export default function AddBd({navigation}) {


  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Подтверждение',
        'Вы уверены, что хотите покинуть эту страницу? Не сохранённые данные будут утеряны',
        [
          {
            text: 'Отмена',
            onPress: () => console.log('Отменено'),
            style: 'cancel',
          },
          {
            text: 'Покинуть',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );
      
      // Возвращаем true, чтобы предотвратить стандартное действие
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      // Добавляем эффект для обновления состояния при возврате на страницу Main
      return () => {
        navigation.navigate('Main'); // Переходим на страницу Main при возвращении
      };
    }, [navigation])
  );



  // State
  // Вывод даты
  const [date, setDate] = useState('')
  const [dateValue, setDateValue] = useState('дд.мм.гг');
  //Активное не активное состояние кнопки
  const [DateEnable, setDateEnable] = useState(true)
  const [dateEnableStyle, setDateEnableStyle] = useState(styles.onButton)

  //На бусоль
  const [busol, setBusol] = useState('')
  const [busolValue, setBusolValue] = useState('00.00')
  //Активное не активное состояние кнопки
  const [busolEnable, setBusolEnable] = useState(true)
  const [busolEnableStyle, setBusolEnableStyle] = useState(styles.onButton)

  //Ориентир
  const [orientirValue, setOrientirValue] = useState('')
  const [orientir, setOrientir] = useState('00.00')
  //Активное не активное состояние кнопки
  const [orientirEnable, setOrientirEnable] = useState(true)
  const [orientirEnableStyle, setOrientirEnableStyle] = useState(styles.onButton)

  //Уровень
  const [urovenValue, setUrovenValue] = useState('')
  const [uroven, setUroven] = useState('00.00')
  //Активное не активное состояние кнопки
  const [urovenEnable, setUrovenEnable] = useState(true)
  const [urovenEnableStyle, setUrovenEnableStyle] = useState(styles.onButton)

  //Прицел
const [pricelValue, setPricelValue] = useState('')
const [pricel, setPricel] = useState('')
//Активное не активное состояние кнопки
const [pricelEnable, setPricelEnable] = useState(true)
const [pricelEnableStyle, setPricelEnableStyle] = useState(styles.onButton)
//состояние input
const [pricelEnableInput, setPricelEnableInput] = useState(true)
//Корректировка выше ниже
const [valCorPricel, setValCorPricel] = useState('')
const [corPricel, setCorPricel] = useState([])

//Угломер
//Получение данных из input
const [uglomerValue, setUglomerValue] = useState('')
const [uglomer, setUglomer] = useState('')
//Корректировка
const [corUglomer, setCorUglomer] = useState('')
const [arrCorUglomer, setArrCorUglomer] = useState([])


  return (
    <ScrollView>
        
    <View>

      {/* дата */}
      <View style={styles.date}>
        <Text style={styles.label}>Дата</Text>
        <View style={styles.labelBlock}>
          <Text style={styles.result}>{dateValue}</Text>
          <TextInput
              style={styles.input}
              placeholder="Введите дату"
              keyboardType="numeric"
              onChangeText={(text) => handleDate(text, setDate)}
              value={date}
            />
            <TouchableOpacity
              style={dateEnableStyle} 
              disabled={!DateEnable}
              onPress={() => {
                 Dates(date, setDateValue, setDate, setDateEnable, setDateEnableStyle)
              }}
            >
              <Text>Ok</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.onButton}
              onPress={() => onEnableDate(setDateEnable, setDateEnableStyle)}
            >
              <Text>Изм.</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* На бусоль */}
      <View style={styles.date}>
        <Text style={styles.label}>На бусоль</Text>
        <View style={styles.labelBlock}>
        <Text style={styles.result}>{busolValue}</Text>
          <TextInput
              style={styles.input}
              placeholder="На бусоль"
              keyboardType="numeric"
              onChangeText={(text) => handleBusol(text, setBusol)}
              value={busol}
            />
            <TouchableOpacity
              style={busolEnableStyle}
              disabled={!busolEnable}
              onPress={() => Busol(busol, setBusolValue, setBusol, setBusolEnable, setBusolEnableStyle)}
            >
              <Text>Ok</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.onButton}
            onPress={() => onEnableBusol(setBusolEnable, setBusolEnableStyle)}
            >
            <Text>Изм.</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* Ориентир */}
      <View>
        <View>
          <Text style={styles.label}>Укажите Ориентир</Text>
        </View>
        <View style={styles.labelBlock}>
        <Text style={styles.result}>{orientir}</Text>
          <TextInput 
            style={styles.input}
            placeholder='Ориентир'
            keyboardType='numeric'
            onChangeText={(text) => handleOrientir(text, setOrientirValue)}
            value={orientirValue}  
          />
          <TouchableOpacity
            style={orientirEnableStyle}
            disabled={!orientirEnable}  
            onPress={() => Orientir(
              orientirValue, 
              setOrientir, 
              setOrientirValue,
              setOrientirEnable,
              setOrientirEnableStyle,
              setUglomer,
              )}
          >
              <Text>Ok</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.onButton}
              onPress={() => onEnableOrientir(
                setOrientirEnable,
                setOrientirEnableStyle,
              )}
          >
            <Text>Изм.</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Уровень */}
      <View>
        <View>
        <Text style={styles.label}>Уровень</Text>
        </View>
        <View style={styles.labelBlock}>
        <Text style={styles.result}>{uroven}</Text>
        <TextInput 
            style={styles.input}
            placeholder='Уровень'
            keyboardType='numeric'
            onChangeText={(text) => handleUroven(text, setUrovenValue)}
            value={urovenValue} 
          />
          <TouchableOpacity
            style={urovenEnableStyle}
            disabled={!urovenEnable}
            onPress={() => Uroven(
              urovenValue, 
              setUroven, 
              setUrovenValue,
              setUrovenEnable,
              setUrovenEnableStyle,
              )}
          >
              <Text>Ок</Text>
           </TouchableOpacity> 

           <TouchableOpacity
            style={styles.onButton}
            onPress={() => onEnableUroven(
              setUrovenEnable,
              setUrovenEnableStyle,
              )}
           >
            <Text>Изм.</Text>
           </TouchableOpacity>
        </View>
      </View>
      {/* Прицел */}
      <View>
        <View>
          <Text style={styles.label}>Прицел</Text>
        </View>

        <View style={styles.labelBlock}>
          <Text style={styles.result}></Text>
        <TextInput 
            style={styles.input}
            placeholder='Прицел'
            keyboardType='numeric'
            editable={pricelEnableInput}
            onChangeText={(text) => handlePricel(text, setPricelValue)}
            value={pricelValue} 
          />
          <TouchableOpacity
            style={pricelEnableStyle}
            disabled={!pricelEnable}
            onPress={() => Pricel(
              setPricel,
              pricelValue,
              setPricelEnable,
              setPricelEnableStyle,
              setPricelEnableInput,
              setCorPricel,
              corPricel,
              pricel,
              )}  
          >
              <Text>Ок</Text>
           </TouchableOpacity> 
           <TouchableOpacity
            style={styles.onButton}
            onPress={() => PricelEdit(
              setPricelEnable,
              setPricelEnableStyle,
              setPricelEnableInput,
            )}  
          >
              <Text>Изм.</Text>
           </TouchableOpacity> 

        </View>
        
        <View style={styles.labelBlock}>
        <Text style={styles.result}></Text>
        <TextInput 
            style={styles.input}
            placeholder='Кор-ка'
            keyboardType='numeric'
            onChangeText={(text) => handleCorValue(text, setValCorPricel)}
            value={valCorPricel}
          />
          <TouchableOpacity
            style={styles.onButton}
            onPress={() => PlusPricel(
              valCorPricel, 
              setPricel, 
              pricel, 
              setCorPricel,
              corPricel,
              setValCorPricel,
              )}  
          >
              <Text>+</Text>
           </TouchableOpacity> 
           <TouchableOpacity
            style={styles.onButton}
            onPress={() => MinusPricel(
              valCorPricel, 
              setPricel,
              pricel, 
              setCorPricel,
              corPricel,
              setValCorPricel,
            )}  
          >
              <Text>-</Text>
           </TouchableOpacity> 

        </View>
        <View>
          
          <Text style={styles.label}>Результаты</Text>
          <ScrollView>
            {corPricel.map(item => (
            <View key={item.id} style={styles.labelResult}>
             <Text style={styles.labelRes}>{item.text}</Text>
          <TouchableOpacity
            style={styles.buttonDel} 
            onPress={() => deletePricel(item.id, item.text, setCorPricel, corPricel)}>
            <Text>Удалить</Text> 
          </TouchableOpacity> 
        </View>
      ))}
    </ScrollView>

        </View>
        
      </View>
      {/* Угломер */}
      <View>
        <View>
          <Text style={styles.label}>Угломер от основного ориентира</Text>
        </View>
        <View style={styles.labelBlock}>
        <TextInput 
            style={styles.input}
            placeholder='Угломер'
            keyboardType='numeric'
            onChangeText={(text) => handleUglomer(text, setUglomerValue)}
            value={uglomerValue}
          />
          <TouchableOpacity
            style={styles.onButton}
            onPress={() => UglomerPlus(
              uglomerValue, 
              setArrCorUglomer,
              arrCorUglomer,
              setUglomerValue,
              uglomer,
              setUglomer,
              orientir,
          )}  
          >
              <Text>+</Text>
           </TouchableOpacity> 
           <TouchableOpacity
            style={styles.onButton}
            onPress={() => UglomerMinus (
              uglomerValue, 
              setArrCorUglomer,
              arrCorUglomer,
              setUglomerValue,
              uglomer,
              setUglomer,
              orientir
            )}  
          >
              <Text>-</Text>
           </TouchableOpacity>   
        </View>
        <View>
          <Text style={styles.label}>Результаты</Text>
        </View>
        <ScrollView>
        {arrCorUglomer.map(item => (
          <View key={item.id} style={styles.labelResult}>
            <Text style={styles.labelRes}>{item.text}</Text>
            <TouchableOpacity
              style={styles.buttonDel} 
              onPress={() => deleteUglomer(item.id, item.text, setArrCorUglomer, arrCorUglomer)}>
              <Text>Удалить</Text> 
            </TouchableOpacity>  
          </View>
         ))}
        </ScrollView>
      </View>
      {/* Сохранить результаты */}
      <View style={{justifyContent: 'center', flexDirection: 'row', paddingBottom: 9}}>
      <TouchableOpacity 
      style={{
        backgroundColor: 'green',
        height: 40,
        width: 210, 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 10,
      }}
      onPress={() => {
        // Поместите вызов функции сохранения внутрь колбэка onPress
        save(
          dateValue, 
          busolValue, 
          orientir, 
          uroven, 
          corPricel, 
          arrCorUglomer,
          navigation // Передаем навигационный объект
        );
      }}
    >
      <Text>Сохранить результат работы</Text>
    </TouchableOpacity>
      </View>

    </View>
    
    </ScrollView>
  );
}

