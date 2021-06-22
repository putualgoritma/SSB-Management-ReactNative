import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const buttonAdd =(props)=>{
    return(
        <TouchableOpacity style={{width:"60%", height:55,backgroundColor:'#1774BC', padding : 15, borderRadius : 5}} onPress={props.onPress}>
            <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={faPlusSquare} style={{color:'#FFFFFF'}} size={ 28 }/>
                <Text style={{color:'#FFFFFF',padding:3,fontSize:15}}>Tambah</Text>
            </View>
        </TouchableOpacity>
    )
}
export default buttonAdd;