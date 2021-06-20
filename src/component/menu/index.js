import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const menu=(props) =>{
    return(
        <TouchableOpacity style={styles.section} onPress={props.navigation}>
            <View style={{paddingHorizontal:10}}> 
                <FontAwesomeIcon icon={props.icon} style={{color:props.coloricon}}size={45}/>
            </View>
            <View style={{backgroundColor:props.bgcolor, width:'80%',height:50, borderRadius:3, paddingTop:15}} >
                <Text style={styles.text} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    section:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical:10
    },
    text:{
        color:'#ffffff',
        fontSize:16, 
        fontWeight:'bold',
        paddingLeft:20
    }
    })
export default menu
