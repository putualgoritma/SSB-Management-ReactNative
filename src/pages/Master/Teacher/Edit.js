import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button,Datepicker,Dropdown} from '../../../component';
import Distance from '../../../utils/distance';
const EditTeacher=({navigation})=>{
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Edit Guru"/>
            <View style={{flex:1}}>
                <ScrollView keyboardShouldPersistTaps = 'always'>
                    <View style={{alignItems:'center'}}>
                        <TextInput title="Kode"/>
                        <Input placeholder="Masukan Kode"/>
                        <TextInput title="Nama"/>
                        <Input placeholder="Masukan Nama"/>
                        <TextInput title="Tempat Lahir"/>
                        <Input placeholder="Masukan Tempat Lahir"/>
                        <TextInput title="Tanggal Lahir"/>
                        <Datepicker/>
                        <TextInput title="Alamat"/>
                        <Input placeholder="Masukan Alamat"/>
                        <TextInput title="Nama"/>
                        <Input placeholder="Masukan Nama"/>
                        <TextInput title="Jenis Kelamin"/>
                        <Dropdown
                        data={[{id:1,name:'Laki Laki'},
                                {id:2,name:'Perempuan'},
                                ]}
                        placeholder="<--Pilih Jenis Kelamin-->"
                        />
                        <TextInput title="Emaik"/>
                        <Input placeholder="Masukan Email"/>
                        <TextInput title="No Hp"/>
                        <Input placeholder="Masukan No Hp"/>
                        <Distance distance={10}/>
                        <Button title="Simpan" onPress={()=>navigation.navigate('Teacher')}/>
                        <Distance distance={10}/>
                    </View>
                </ScrollView>
            </View>
            <Footer navigation = {navigation} focus = 'Master'/>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#E5E7E9',
  },
})
export default EditTeacher