import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  _ScrollView,
} from 'react-native';
import { Footer} from '../../../component';

const Detail = ({navigation,route}) => {
    const student = route.params.student

    // useEffect(() => {
    //     console.log(student);
    // }, [])

    return(
    <View style={styles.container}>
        <ScrollView>        
            <View style={{flexDirection:'row',}}>
                <View style={{flex:1.5, backgroundColor:'#1774BC',height:700}}>                       
                    <Image source={require('../../../assets/img/Circle.png')} style={{width:161, height:162}} />
                    <View style={{flexDirection:'row',justifyContent:'flex-end', padding:5}}>
                        <Text style={{color:'#ffffff',fontSize:27,fontWeight:'bold',}}>Detail </Text>
                    </View>
                    <Text style={styles.textTitle}>Nama</Text>
                    <Text style={styles.textTitle}>Tempat,Tanggal Lahir</Text>
                    <Text style={styles.textTitle}>Alamat</Text>
                    <Text style={styles.textTitle}>Jenis Kelamin</Text>
                    <Text style={styles.textTitle}>Email</Text>
                    <Text style={styles.textTitle}>Handphone</Text>
                    <Text style={styles.textTitle}>Kelas</Text>
                    <Text style={styles.textTitle}>Asal Sekolah</Text>  
                </View>
                <View style={{flex:2, backgroundColor:'#E5E7E9'}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-end', paddingRight:20}}>
                        <Image source={require('../../../assets/img/logo.png')} style={{width:111, height:123}} />
                    </View>
                    <View style={{top:40}}>
                        <View style={{padding:5}}>
                            <Text style={{color:'#696969',fontSize:27,fontWeight:'bold'}}>Siswa</Text>
                        </View>
                        <Text style={styles.textTitleRight}>{student.name}</Text>
                        <Text style={styles.textTitleRight}>{`${student.place} ,  ${student.date}`}</Text>
                        <Text style={styles.textTitleRight}>{student.address}</Text>
                        <Text style={styles.textTitleRight}>{student.gender}</Text>
                        <Text style={styles.textTitleRight}>{student.email}</Text>
                        <Text style={styles.textTitleRight}>{student.phone}</Text>
                        <Text style={styles.textTitleRight}>{student.grade.name}</Text>
                        <Text style={styles.textTitleRight}>{student.school}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <Footer  navigation = {navigation} focus='Master'/>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E7E9',
        height:'100%'
    },
    text:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        padding:15,
        fontWeight:'bold',
    },
    underlineTitle:{
        backgroundColor:'#62EAF2',
        width:50,
        height:4,
    },
    textTitle:{
        color:'#ffffff',
        fontSize:16,
        padding:10,
    },
    textTitleRight:{
        color:'#000000',
        fontSize:16,
        padding:10,
    }
})

export default Detail;