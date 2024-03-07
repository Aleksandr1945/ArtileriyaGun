import styles from '../styles'
      //Вывод даты
    export const handleDate = (text, setDate) => {
        const cleanedText = text.replace(/\./g, '');
        const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1.').slice(0, 8);
        setDate(formattedText);
      };

    export const clearInputDate = (setDate) => {
      setDate('')
    };
    
    export const dateOffColorButton = (setDateEnableStyle) => {
      setDateEnableStyle(styles.offButton);
    };
    export const dateOnColorButton = (setDateEnableStyle) => {
      setDateEnableStyle(styles.onButton);
    };

      
    export const Dates = (date, setDateValue, setDate, setDateEnable, setDateEnableStyle) => {
        setDateValue(date);
        clearInputDate(setDate);
        offEnableDate(setDateEnable);
        dateOffColorButton(setDateEnableStyle);
      };

      //Состояние кнопки Дата
      export const offEnableDate = (setDateEnable) => {
        setDateEnable(false)
      };

      export const onEnableDate = (setDateEnable, setDateEnableStyle) => {
        setDateEnable(true);
        dateOnColorButton(setDateEnableStyle)
      };