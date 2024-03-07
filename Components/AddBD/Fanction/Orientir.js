import styles from '../styles'

    //Ориентир
    //Редактирование данных в input
    export const handleOrientir = (text, setOrientirValue, orientirValue) => {
        const cleanedText = text.replace(/\./g, '');
        const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1.').slice(0, 5);
        setOrientirValue(formattedText);
        // console.log(orientirValue)
        };
    // Очистка input
      export const clearInputOrientir = (setOrientirValue) => {
          setOrientirValue('');
        };
    // Отключение кнопки 'ок'
    export const offEnableOrientir = (setOrientirEnable) => {
        setOrientirEnable(false)
    };
    //Смена цвета кнопки на выключенное
    export const offEnableOrientirStyle = (setOrientirEnableStyle) => {
        setOrientirEnableStyle(styles.offButton)
    }
    //Смена цвета кнопки на включённое
    export const onEnableOrientirStyle = (setOrientirEnableStyle) => {
        setOrientirEnableStyle(styles.onButton)
    }

    //Функции кнопки 'ок'          
      export const Orientir = (
            orientirValue, 
            setOrientir, 
            setOrientirValue,
            setOrientirEnable,
            setOrientirEnableStyle,
            setUglomer,
            uglomer,
            ) => {
        setOrientir(orientirValue);
        setUglomer(orientirValue);        
        clearInputOrientir(setOrientirValue);
        offEnableOrientir(setOrientirEnable);
        offEnableOrientirStyle(setOrientirEnableStyle)
        // console.log(uglomer)
        }; 

    //Функция кнопки 'Изменить'
    export const onEnableOrientir = (
        setOrientirEnable,
        setOrientirEnableStyle,
        ) => {
        setOrientirEnable(true);
        onEnableOrientirStyle(setOrientirEnableStyle);    
    }    