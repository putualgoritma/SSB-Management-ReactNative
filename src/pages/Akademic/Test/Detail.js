import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  _ScrollView,
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Footer } from '../../../component';

const Detail = ({navigation}) => {
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
                    <Text style={styles.textTitle}>Hari</Text>
                    <Text style={styles.textTitle}>Tanggal</Text>
                    <Text style={styles.textTitle}>Mata Pelajaran</Text>
                    <Text style={styles.textTitle}>Ujian</Text>
                    <Text style={styles.textTitle}>Nilai</Text>
                    <Text style={styles.textTitle}>Kelompok Umur</Text>
                </View>
                <View style={{flex:2, backgroundColor:'#E5E7E9'}}>
                    <View style={{top:163}}>
                        <View style={{padding:5}}>
                            <Text style={{color:'#696969',fontSize:27,fontWeight:'bold'}}>Ujian</Text>
                        </View>
                        <Text style={styles.textTitleRight}>I Putu Surya Dwipayana</Text>
                        <Text style={styles.textTitleRight}>Senin</Text>
                        <Text style={styles.textTitleRight}>28-04-2021</Text>
                        <Text style={styles.textTitleRight}>Bahasa Indonesia</Text>
                        <Text style={styles.textTitleRight}>Harian</Text>
                        <Text style={styles.textTitleRight}>90</Text>
                        <Text style={styles.textTitleRight}>3</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <Footer  navigation = {navigation} focus='Akademic'/>
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