import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';

import { faAddressBook, faAlignJustify, faBook, faHome, faMoneyBill, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Footer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faHome} style={{color:'#163F5F'}} size={ 27 } color = {props.focus === 'Home' ? '#54B3B9' : ''} />
                    <Text style={styles.text} >Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1.2,backgroundColor:'#ffffff',height:58,}} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Akademic')}>
                    <FontAwesomeIcon icon={faBook} style={{color:'#163F5F'}} size={ 27 }  color = {props.focus === 'Akademic' ? '#54B3B9' : ''} />
                    <Text style={styles.text} >Pembelajaran</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Master')} >
                    <FontAwesomeIcon icon={faAlignJustify} style={{color:'#163F5F'}} size={ 27 } color = {props.focus === 'Master' ? '#54B3B9' : ''} />
                    <Text style={styles.text} >Master</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Profile')}>
                    <FontAwesomeIcon icon={faUser} style={{color:'#163F5F'}} size={ 27 }  color = {props.focus === 'Profile' ? '#54B3B9' : ''} />
                    <Text style={styles.text} >Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        // paddingBottom:5,
    },
    section:{
        flex:1,
        backgroundColor:'#ffffff',
        height:58,
    },
    icon:{
        alignItems:'center',
        padding:5,
    },
    text:{
        color:'#163F5F',
        fontSize:16,
        textAlign:'center'
    }
});
export default Footer