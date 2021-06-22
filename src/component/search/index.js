import React,{ Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const search = (props) =>{
    return(
        <TextInput style={styles.input} placeholder='Cari' onChangeText = {props.onChangeText}/>
    )
}
const styles = StyleSheet.create({
input:{
    width:'70%',
    borderWidth:1,
    backgroundColor:'#ffffff',
    borderColor:'#D6D9DB',
    paddingHorizontal:20,
    color:'#000000',
    borderRadius:3
  }
});
export default search