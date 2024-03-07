import styles from '../styles'
import { Alert } from 'react-native';

//Получение value с прицела
export const handlePricel = (text, setPricelValue) => {
    setPricelValue(text);
    };
//Получение value с корректировки
export const handleCorValue = (text, setValCorPricel) => {
    setValCorPricel(text)
}

//Нажатие кнопки 'ок'
export const Pricel = (
    setPricel,
    pricelValue,
    setPricelEnable,
    setPricelEnableStyle,
    setPricelEnableInput,
    setCorPricel,
    corPricel,
    ) => {
    setPricel(pricelValue);
    setPricelEnable(false);
    setPricelEnableStyle(styles.offButton);
    setPricelEnableInput(false);
    setCorPricel([...corPricel, {id: Date.now(), text: pricelValue}])
};

//Нажатие кнопки 'Изменить'
export const PricelEdit = (
    setPricelEnable,
    setPricelEnableStyle,
    setPricelEnableInput,
    ) => {
    setPricelEnable(true);
    setPricelEnableStyle(styles.onButton);
    setPricelEnableInput(true); 
}

//Прицел выше
export const PlusPricel = (
  valCorPricel, 
  setPricel,
  pricel, 
  setCorPricel,
  corPricel,
  setValCorPricel,
) => {
  // Получаем последний элемент из массива corPricel
  const lastCorPricel = corPricel.length > 0 ? corPricel[corPricel.length - 1].text : 0;
  
  // Используем последний элемент вместо Number(pricel)
  let Plus = Number(lastCorPricel) + Number(valCorPricel);
  
  // Обновляем состояния
  setPricel(Plus);
  setCorPricel([...corPricel, { id: Date.now(), text: Plus }]);
  setValCorPricel('');
};

//Прицел ниже
export const MinusPricel = (
  valCorPricel, 
  setPricel,
  pricel, 
  setCorPricel,
  corPricel,
  setValCorPricel,
) => {
  // Получаем последний элемент из массива corPricel
  const lastCorPricel = corPricel.length > 0 ? corPricel[corPricel.length - 1].text : 0;
  
  // Используем последний элемент вместо Number(pricel)
  let Minus = Number(lastCorPricel) - Number(valCorPricel);
  
  // Обновляем состояния
  setPricel(Minus);
  setCorPricel([...corPricel, { id: Date.now(), text: Minus }]);
  setValCorPricel('');
};

// Удалить результат
export const deletePricel = (id, itemName, setCorPricelValue, corPricel) => {
    Alert.alert(
      'Подтверждение удаления',
      `Вы уверены, что хотите удалить элемент "${itemName}"?`,
      [
        { text: 'Отмена', onPress: () => console.log('Отменено удаление') },
        {
          text: 'Удалить',
          onPress: () => {
            setCorPricelValue(corPricel.filter(pricels => pricels.id !== id));
            console.log('Элемент удален');
          },
        },
      ],
      { cancelable: true }
    );
  };



