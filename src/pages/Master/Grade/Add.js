import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button} from '../../../component';
import Distance from '../../../utils/distance';
const AddGrade=({navigation})=>{
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Tambah Kelompok Umur"/>
            <View style={{flex:1}}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <TextInput title="Kode"/>
                        <Input placeholder="Masukan Kode"/>
                        <TextInput title="Nama"/>
                        <Input placeholder="Masukan Nama"/>
                        <TextInput title="Usia Minimal"/>
                        <Input placeholder="Masukan Usia Minimal"/>
                        <TextInput title="Usia Maksimal"/>
                        <Input placeholder="Masukan Usia Maksimal"/>
                        <Distance distance={10}/>
                        <Button title="Simpan" onPress={()=>navigation.navigate('Semester')}/>
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
export default AddGrade