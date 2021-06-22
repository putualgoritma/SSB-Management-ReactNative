import * as React from 'react';
import {
    View,
    Button,
    TouchableOpacity,
    Text,
  } from 'react-native';
const button =(props)=>{
    return(
        <TouchableOpacity style={{width: (props.width ? props.width : '30%'),alignItems : 'center', backgroundColor:'#54B3B9', padding : 15, borderRadius : 5}}
            onPress={props.onPress}
        >
           {/* <Button title={props.title} color="#54B3B9" onPress={props.login}></Button> */}
           <Text style={{color : '#ffffff'}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default button;