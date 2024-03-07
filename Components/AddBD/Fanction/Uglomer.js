import styles from '../styles'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Получение данных из input

export const handleUglomer = (text, setUglomerValue) => {
    const cleanedText = text.replace(/[^\d.]/g, '');
    const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1.').slice(0, 5);
    setUglomerValue(formattedText);
    // console.log(typeof formattedText);
  };

//Угломер правее
// export const UglomerPlus = (
//   uglomerValue, 
//   setArrCorUglomer,
//   arrCorUglomer,
//   setUglomerValue,
//   uglomer,
//   setUglomer
// ) => {
//   let Plus = Number(uglomer) + Number(uglomerValue);
  
//   if (Plus > 59.99) {
//       const addition = (Plus - 60.00).toFixed(2);
//       setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
//       setUglomerValue('');
//       setUglomer(addition)
//       console.log(uglomer);
//   }
//   if (Plus <= 59.99 ) {
//     const addition = Plus.toFixed(2);
//     setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
//     setUglomerValue('');
//     setUglomerValue('');
//     setUglomer(addition)
//     console.log(uglomer)
//   }
// };

export const UglomerPlus = (
  uglomerValue, 
  setArrCorUglomer,
  arrCorUglomer,
  setUglomerValue,
  uglomer,
  setUglomer,
  orientir
) => {
  let Plus;
  // Если массив arrCorUglomer пуст, используем uglomer
  if (arrCorUglomer.length === 0) {
      Plus = Number(orientir) + Number(uglomerValue);
  } else {
      // Иначе используем последний элемент в массиве arrCorUglomer
      const lastCorUglomer = arrCorUglomer[arrCorUglomer.length - 1].text;
      Plus = Number(lastCorUglomer) + Number(uglomerValue);
  }

  if (Plus > 59.99) {
      const addition = (Plus - 60.00).toFixed(2);
      setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
      setUglomerValue('');
      setUglomer(addition);
      console.log(uglomer);
  }
  if (Plus <= 59.99) {
      const addition = Plus.toFixed(2);
      setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
      setUglomerValue('');
      setUglomer(addition);
      console.log(uglomer);
  }
};


//Угломер Левее
// export const UglomerMinus = (
//   uglomerValue, 
//   setArrCorUglomer,
//   arrCorUglomer,
//   setUglomerValue,
//   uglomer,
//   setUglomer
// ) => {
//   let Minus = Number(uglomer) - Number(uglomerValue);
  
//   if (Minus < 0.00) {
//       const addition = (Minus + 60.00).toFixed(2);
//       setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
//       setUglomerValue('');
//       setUglomer(addition)
//       console.log(uglomer);
//   }
//   if (Minus > 0.00 ) {
//     const addition = Minus.toFixed(2);
//     setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
//     setUglomerValue('');
//     setUglomerValue('');
//     setUglomer(addition)
//     console.log(uglomer)
//   }
// };

export const UglomerMinus = (
  uglomerValue, 
  setArrCorUglomer,
  arrCorUglomer,
  setUglomerValue,
  uglomer,
  setUglomer,
  orientir
) => {
  let Minus;
  // Если массив arrCorUglomer пуст, используем uglomer
  if (arrCorUglomer.length === 0) {
      Minus = Number(orientir) - Number(uglomerValue);
  } else {
      // Иначе используем последний элемент в массиве arrCorUglomer
      const lastCorUglomer = arrCorUglomer[arrCorUglomer.length - 1].text;
      Minus = Number(lastCorUglomer) - Number(uglomerValue);
  }

  if (Minus < 0.00) {
      const addition = (Minus + 60.00).toFixed(2);
      setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
      setUglomerValue('');
      setUglomer(addition);
      console.log(uglomer);
  }
  if (Minus > 0.00) {
      const addition = Minus.toFixed(2);
      setArrCorUglomer([...arrCorUglomer, { id: Date.now(), text: addition }]);
      setUglomerValue('');
      setUglomer(addition);
      console.log(uglomer);
  }
};

//Удаление элемента
export const deleteUglomer = (id, itemName, setArrCorUglomerValue, arrCorUglomer) => {
  Alert.alert(
    'Подтверждение удаления',
    `Вы уверены, что хотите удалить элемент "${itemName}"?`,
    [
      { text: 'Отмена', onPress: () => console.log('Отменено удаление') },
      {
        text: 'Удалить',
        onPress: () => {
          setArrCorUglomerValue(arrCorUglomer.filter(pricels => pricels.id !== id));
          console.log('Элемент удален');
        },
      },
    ],
    { cancelable: true }
  );
};