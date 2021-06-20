import * as React from 'react';
import {
    TextInput,
    StyleSheet
  } from 'react-native';
const input =(props)=>{
    return(
        <TextInput style={styles.input} placeholder={props.placeholder} placeholderTextColor='#696969' value={props.value} keyboardType = {props.keyboardType} onChangeText={props.changeText}  />
    )
}
const styles = StyleSheet.create({
    input:{
      width:'80%',
      borderRadius:20,
      backgroundColor:'#ffffff',
      paddingHorizontal:20
    },
});
export default input;