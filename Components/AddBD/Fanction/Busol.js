import styles from '../styles'

     //Бусоль
     export const handleBusol = (text, setBusol) => {
        const cleanedText = text.replace(/\./g, '');
        const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1.').slice(0, 5);
        setBusol(formattedText);
        };

    //Очистить input    
    export const clearInputBusol = (setBusol) => {
      setBusol('')
    }
    
    //Отключение кнопки изменить
    export const offEnableBusol = (setBusolEnable) => {
      setBusolEnable(false)
    }

    //Смена цвета отключенной кнопки
    export const offEnableBusolStyle = (setBusolEnableStyle) => {
      setBusolEnableStyle(styles.offButton)
    }

    //Включение кнопки
    export const onEnableBusolStyle = (setBusolEnableStyle) => {
      setBusolEnableStyle(styles.onButton)
    }

    export const onEnableBusol = (setBusolEnable, setBusolEnableStyle) => {
      setBusolEnable(true);
      onEnableBusolStyle(setBusolEnableStyle);
    }

              
    export const Busol = (busol, setBusolValue, setBusol, setBusolEnable, setBusolEnableStyle) => {
        setBusolValue(busol);
        clearInputBusol(setBusol)
        offEnableBusol(setBusolEnable)
        offEnableBusolStyle(setBusolEnableStyle)
        };
