import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    date: {
      marginBottom: 5,
    },
    busol: {
      marginBottom: 5,
    },
    onButton: {
      backgroundColor: 'green',
      width: 50,
      marginLeft: 10,
      borderRadius: 5, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    offButton: {
      backgroundColor: 'rgb(101, 195, 101)',
      width: 50,
      marginLeft: 10,
      borderRadius: 5, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    label: {
      textAlign: 'center',
      marginTop: 3,
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      width: 110,
      borderColor: 'gray',
      borderWidth: 1,
      marginRight: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    labelBlock: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5,
    },
    result: {
      marginRight: 10,
      marginTop: 9,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonDel: {
      width: 100,
      backgroundColor: 'green',
      borderRadius: 5, 
      justifyContent: 'center', 
      alignItems: 'center'

    },
    labelResult: {
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 3,
      marginBottom: 8,
      fontSize: 18,
      fontWeight: 'bold',
      flexDirection: 'row',
    },
    labelRes: {
      textAlign: 'center',
      marginTop: 3,
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 50,
      marginLeft: 40,
    },
    DateList: {
      flexDirection: 'row',
      marginLeft: 5,
      marginTop: 2,
      marginBottom: 3,
      fontWeight: 'bold'
    },
    DateListDel: {
      marginLeft: 20,
    },
    DateBlock: {
      flexDirection: 'row'
    },
    GunResult: {
      marginLeft: 55,
      
    },
    GunResultText: {
      fontWeight: 'bold',
    },
    GunButton: {
      backgroundColor: 'green',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  export default styles