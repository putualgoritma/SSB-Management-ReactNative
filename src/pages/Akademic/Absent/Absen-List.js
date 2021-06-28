import React from 'react'
import { StyleSheet,View,ScrollView,Text,Image,TouchableOpacity} from 'react-native';
import Distance from '../../../utils/distance';
import {Footer,Header2,Title,Dropdown,Button} from '../../../component'
import { faAddressBook,faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const AbsentList=({navigation})=>{
    return(
       <View style={styles.container}>
           <ScrollView style={{flex:1}}>
               <Header2/>
                <Title title="Absent List"/>
                <Distance distance={10}/>
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'90%'}}>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Status'},
                                {id:2,name:'Alpha'},
                                {id:3,name:'Ijin'},
                                {id:4,name:'Sakit'},
                                {id:5,name:'Masuk'},
                                ]}
                        placeholder="<--Pilih Hari-->"
                        />
                        <Distance distanceH = {5}/>
                        <Button title="Filter" width="18%"/>
                    </View>
                    {/* Start Section 1 */}
                    <Distance distance={10}/>
                    <View style={{width:'90%',height:310,backgroundColor:'white'}}>
                        <View style={{flexDirection:'row',height:250}}>
                            <Distance distanceH={5}/>
                            <View style={{flexDirection:'row',flex:1,alignItems:'center',height:250}}>   
                                <Image source={require('../../../assets/img/avatar.png')} style={{ width: 169, height: 215 }} />
                            </View>
                            <Distance distanceH={10}/>
                            <View style={{flex:1,paddingTop:15}}>   
                                <Text style={styles.textTitle}>Kode :</Text>
                                <Text style={styles.textData}>01</Text>
                                <Text style={styles.textTitle}>Nama :</Text>
                                <Text style={styles.textData}>I Made Arca Sancita Prana</Text>
                                <Text style={styles.textTitle}>Kehadiran :</Text>
                                <Text style={styles.textData}>Hadir</Text>
                                <Text style={styles.textTitle}>Iuran :</Text>
                                <Text style={styles.textData}>0</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',height:40, alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{height:40,width:120,backgroundColor:'#163F5F',borderRadius:7}}onPress={()=>navigation.navigate('Absen')}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
                                    <FontAwesomeIcon icon={faAddressBook} style={{color:'#FFFFFF'}} size={ 15 }/>
                                    <Distance distanceH={3}/>
                                    <Text style={styles.textBtn}>Absen</Text>
                                </View>
                            </TouchableOpacity>
                            <Distance distanceH={5}/>
                            <TouchableOpacity style={{height:40,width:120,backgroundColor:'#1774BC',borderRadius:7}}onPress={()=>navigation.navigate('Bayar')}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
                                    <FontAwesomeIcon icon={faMoneyBillWave} style={{color:'#FFFFFF'}} size={ 15 }/>
                                    <Distance distanceH={3}/>
                                    <Text style={styles.textBtn}>Bayar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Distance distance={10}/>
                    {/* End Section 1 */}
                    {/* Start Section 2 */}
                    <View style={{width:'90%',height:310,backgroundColor:'white'}}>
                        <View style={{flexDirection:'row',height:250}}>
                            <Distance distanceH={5}/>
                            <View style={{flexDirection:'row',flex:1,alignItems:'center',height:250}}>   
                                <Image source={require('../../../assets/img/avatar.png')} style={{ width: 169, height: 215 }} />
                            </View>
                            <Distance distanceH={10}/>
                            <View style={{flex:1,paddingTop:15}}>   
                                <Text style={styles.textTitle}>Kode :</Text>
                                <Text style={styles.textData}>01</Text>
                                <Text style={styles.textTitle}>Nama :</Text>
                                <Text style={styles.textData}>I Made Arca Sancita Prana</Text>
                                <Text style={styles.textTitle}>Kehadiran :</Text>
                                <Text style={styles.textAlpha}>Alpha</Text>
                                <Text style={styles.textTitle}>Iuran :</Text>
                                <Text style={styles.textData}>0</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',height:40, alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{height:40,width:120,backgroundColor:'#163F5F',borderRadius:7}}onPress={()=>navigation.navigate('Absen')}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
                                    <FontAwesomeIcon icon={faAddressBook} style={{color:'#FFFFFF'}} size={ 15 }/>
                                    <Distance distanceH={3}/>
                                    <Text style={styles.textBtn}>Absen</Text>
                                </View>
                            </TouchableOpacity>
                            <Distance distanceH={5}/>
                            <TouchableOpacity style={{height:40,width:120,backgroundColor:'#1774BC',borderRadius:7}}onPress={()=>navigation.navigate('Bayar')}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
                                    <FontAwesomeIcon icon={faMoneyBillWave} style={{color:'#FFFFFF'}} size={ 15 }/>
                                    <Distance distanceH={3}/>
                                    <Text style={styles.textBtn}>Bayar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* End Section 2 */}
                    <Distance distance={10}/>
                </View>
           </ScrollView>
           <Footer navigation={navigation} focus="Akademic"/>
       </View> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E7E9'
        },
    textTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#696969',
        paddingVertical:5,
        },
    textData: {
        fontSize: 14,
        color: '#696969',
        },
    textAlpha: {
        fontSize: 14,
        color: '#DB3A19',
        },
    textBtn:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    }
    })
export default AbsentList