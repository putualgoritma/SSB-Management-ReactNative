import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
const title =(props)=>{
    return(
        <View style={{paddingVertical:10, alignItems:'center'}}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.underline}></View>
        </View>   
    )
}
const styles = StyleSheet.create({
    title:{
        color:'#696969', 
        fontSize:27, 
        fontWeight:'bold',
        paddingBottom:5
    },
    underline:{
        backgroundColor:'#62EAF2', 
        height:4,
        width:40
    }
});
export default title;