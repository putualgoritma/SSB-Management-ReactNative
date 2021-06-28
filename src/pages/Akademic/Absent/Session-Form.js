import React from 'react'
import { StyleSheet,View,ScrollView} from 'react-native';
import Distance from '../../../utils/distance';
import {Footer,Header2,Title,TextInput,Area,Button,Dropdown,Datepicker} from '../../../component'

const SessionForm =({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}} keyboardShouldPersistTaps = 'always'>
                <Header2/>
                <Title title="Session Form"/>
                <View style={{alignItems:'center'}}>
                    <TextInput title="Register"/>
                    <Datepicker/>
                    <TextInput title="Pengajar 1"/>
                    <Dropdown
                        data={[ {id:1,name:'Pilih Pengajar'},
                                {id:2,name:'Griezman'},
                                {id:3,name:'Ronaldo'},
                                {id:4,name:'Muller'},
                                {id:5,name:'Benzema'},
                                {id:6,name:'Bale'},
                                {id:7,name:'Ibrahimovic'},
                                {id:8,name:'Ozil'},
                                ]}
                        placeholder="<--Pilih Pengajar-->"
                        />
                    <TextInput title="Pengajar 2"/>
                    <Dropdown
                        data={[ {id:1,name:'Pilih Pengajar'},
                                {id:2,name:'Griezman'},
                                {id:3,name:'Ronaldo'},
                                {id:4,name:'Muller'},
                                {id:5,name:'Benzema'},
                                {id:6,name:'Bale'},
                                {id:7,name:'Ibrahimovic'},
                                {id:8,name:'Ozil'},
                                ]}
                        placeholder="<--Pilih Pengajar-->"
                        />
                    <TextInput title="Keterangan"/>
                    <Area/>
                    <Distance distance={10}/>
                    <Button title="Buka Sesi" onPress={()=>navigation.navigate('AbsentSchedule')}/>
                    <Distance distance={10}/>
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Akademic" />
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#E5E7E9'
    },
})
export default SessionForm