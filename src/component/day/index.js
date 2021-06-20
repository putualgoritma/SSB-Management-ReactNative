import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const day =(props) =>{
    return(
            <View style={styles.section}>
                <View style={{backgroundColor:props.bgcolor, width:'90%', height:60 }}>
                    <Text style={styles.text} onPress={() => props.navigation.navigate('SubSchedule')}>{props.day}</Text>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    section:{
        flexDirection:'column', 
        alignItems:'center', 
        height:80, 
        justifyContent:'space-around'
    },
    text:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        padding:15,
        fontWeight:'bold',
        },
    })
export default day
