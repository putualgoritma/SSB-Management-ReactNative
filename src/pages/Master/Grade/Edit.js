import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button} from '../../../component';
import Distance from '../../../utils/distance';
const EditGrade=({navigation})=>{
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Edit Kelompok Umur"/>
            <View style={{flex:1}}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <TextInput title="Kode"/>
                        <Input placeholder="Masukan Kode" value="1"/>
                        <TextInput title="Nama"/>
                        <Input placeholder="Masukan Nama" value="U8"/>
                        <TextInput title="Usia Minimal"/>
                        <Input placeholder="Masukan Usia Minimal" value="7"/>
                        <TextInput title="Usia Maksimal"/>
                        <Input placeholder="Masukan Usia Maksimal" value="9"/>
                        <Distance distance={10}/>
                        <Button title="Simpan" onPress={()=>navigation.navigate('Grade')}/>
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
export default EditGrade