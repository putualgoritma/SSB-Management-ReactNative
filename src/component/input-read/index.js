import * as React from 'react';
import {
    TextInput,
    StyleSheet
  } from 'react-native';
const inputread =(props)=>{
    return(
      <TextInput style={styles.inputread} value={props.value} editable = {false}/>
    )
  }
const styles = StyleSheet.create({
  inputread:{
    width:'80%',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'#D6D9DB',
    borderColor:'#ffffff',
    paddingHorizontal:20,
    color:'#000000',
  },
})
  export default inputread;