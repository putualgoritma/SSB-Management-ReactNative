
import React from 'react'
import { StyleSheet,Text,TouchableOpacity,View,ScrollView } from 'react-native';
import {Footer,Header2,Title,Dropdown,Button,ButtonAdd} from '../../../component'
import Distance from '../../../utils/distance';
import { faAddressBook, faClock, faUserClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const ScheduleList =({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
                <Header2/>
                <Title title="Jadwal List"/>
                <Distance distance={10}/>
                <View style={{alignItems:'center'}}>
                    <View style={{width:'90%'}}>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Semester'},
                                {id:2,name:'Semester 1'},
                                {id:3,name:'Semester 2'},
                                ]}
                        placeholder="<--Pilih Semester-->"
                        />
                         <Distance distance = {5}/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Hari'},
                                {id:2,name:'Senin'},
                                {id:3,name:'Selasa'},
                                {id:4,name:'Rabu'},
                                {id:5,name:'Kamis'},
                                {id:6,name:'Jumat'},
                                {id:7,name:'Sabtu'},
                                {id:8,name:'Minggu'},
                                ]}
                        placeholder="<--Pilih Hari-->"
                        />
                        <Distance distance = {5}/>
                        <Button title="Filter"/>
                    </View>
                    <Distance distance = {8}/>
                    <View style={{flexDirection:'row',width:'90%'}}>
                        <ButtonAdd onPress={() =>navigation.navigate('AddSchedule')}/>
                    </View>
                    <Distance distance={20}/>
                    <View style={{alignItems:'center'}}>
                         {/* start section 1*/}
                        <View style={styles.boxTitle}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}}>
                                <FontAwesomeIcon icon={faClock} style={{color:'#FFFFFF'}} size={ 25 }/>
                                <Distance distanceH={5}/>
                                <Text style={styles.textDay}>Sunday</Text>
                            </View>
                        </View>
                        <View style={styles.boxHeader}>
                            <View style={styles.boxHeaderLeft}>
                                <Text style={styles.textHeader}>Mata Pelajaran</Text>
                            </View>
                            <View style={styles.boxHeaderRight}>
                                <Text style={styles.textHeader}>Pengajar</Text>
                            </View>
                        </View>
                        <View style={styles.boxData}>
                            <View style={styles.boxDataLeft}>
                                <Text>Passing Bolla</Text>
                            </View>
                            <View style={styles.boxDataRight}>
                                <Text>Mark Antonie</Text>
                                <Text>Reymond</Text>
                            </View>
                        </View>
                        <Distance distance={15}/>
                        {/* end section 1*/}
                        {/* start section 2*/}
                        <View style={styles.boxTitle}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}}>
                                <FontAwesomeIcon icon={faClock} style={{color:'#FFFFFF'}} size={ 25 }/>
                                <Distance distanceH={5}/>
                                <Text style={styles.textDay}>Sunday</Text>
                            </View>
                        </View>
                        <View style={styles.boxHeader}>
                            <View style={styles.boxHeaderLeft}>
                                <Text style={styles.textHeader}>Mata Pelajaran</Text>
                            </View>
                            <View style={styles.boxHeaderRight}>
                                <Text style={styles.textHeader}>Pengajar</Text>
                            </View>
                        </View>
                        <View style={styles.boxData}>
                            <View style={styles.boxDataLeft}>
                                <Text>Shooting</Text>
                            </View>
                            <View style={styles.boxDataRight}>
                                <Text>Bale</Text>
                                <Text>Modric</Text>
                            </View>
                        </View>
                        <Distance distance={15}/>
                        {/* end section 2*/} 
                        
                    </View>
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
    boxTitle:{
        backgroundColor:'#54B3B9', 
        width:205, 
        height:40, 
        borderTopRightRadius:20,
        borderTopLeftRadius:20
        },
    boxHeader:{
        backgroundColor:'#FFFFFF', 
        width:350, 
        height:60, 
        flexDirection:'row',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
        },
    boxHeaderLeft:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'#E5E7E9'
        },
    boxHeaderRight:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderBottomWidth:1,
        borderColor:'#E5E7E9'
        },
    boxData:{
        backgroundColor:'#FFFFFF', 
        width:350, 
        height:70, 
        flexDirection:'row',
        },
    boxDataLeft:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'#E5E7E9'
        },
    boxDataRight:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#E5E7E9'
        },
     boxData:{
        backgroundColor:'#FFFFFF', 
        width:350, 
        height:70, 
        flexDirection:'row',
        },
    boxDataLeft:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderTopWidth:1,
        borderColor:'#E5E7E9'
        },
    boxDataRight:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#E5E7E9'
        },
    boxBtn:{
        backgroundColor:'#FFFFFF', 
        width:350, 
        height:60, 
        flexDirection:'row',
        },
    boxBtnLeft:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderTopWidth:2,
        borderColor:'#E5E7E9'
        },
    boxBtnRight:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:2,
        borderColor:'#E5E7E9'
        },
    textDay:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    },
    textHeader:{
        fontSize:15,
        fontWeight:'bold',  
    },
    textBtn:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    }
})
export default ScheduleList