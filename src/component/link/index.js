import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
const link =(props)=>{
    return(
        <TouchableOpacity style={{paddingVertical:10}}>
            <Text style={styles.title} onPress={props.navigation} >{props.title}</Text>
            <View style={{backgroundColor:'#ffffff', height: 4}}></View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        color:'#54B3B9',
        paddingBottom:5, 
        fontSize:16
    },
    underline:{
        backgroundColor:'#ffffff',
        height:4
    }
});
export default link;