import styles from '../styles'

      //Уровень
      export const handleUroven = (text, setUrovenValue) => {
        const cleanedText = text.replace(/\./g, '');
        const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1.').slice(0, 5);
        setUrovenValue(formattedText);
        };

      //Функции кнопки 'ок'        
      export const Uroven = (
          urovenValue, 
          setUroven, 
          setUrovenValue,
          setUrovenEnable,
          setUrovenEnableStyle,
          ) => {
        setUroven(urovenValue);
        setUrovenValue('');
        setUrovenEnable(false)
        setUrovenEnableStyle(styles.offButton)
        }; 

      //Функции кнопки 'Изменить'
    export const onEnableUroven = (setUrovenEnable, setUrovenEnableStyle) => {
      setUrovenEnable(true)
      setUrovenEnableStyle(styles.onButton)
    }    