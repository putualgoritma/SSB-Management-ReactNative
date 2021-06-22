import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button,Datepicker,Dropdown} from '../../../component';
import Distance from '../../../utils/distance';
const AddStudent=({navigation})=>{
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Tambah Siswa"/>
            <View style={{flex:1}}>
                <ScrollView keyboardShouldPersistTaps = 'always' >
                    <View style={{alignItems:'center'}}>
                        <TextInput title="No Induk"/>
                        <Input placeholder="Masukan No Induk"/>
                        <TextInput title="Nama Lengkap"/>
                        <Input placeholder="Masukan Nama Lengkap"/>
                        <TextInput title="Nama Panggilan"/>
                        <Input placeholder="Masukan Nama Panggilan"/>
                        <TextInput title="Tempat Lahir"/>
                        <Input placeholder="Masukan Tempat Lahir"/>
                        <TextInput title="Tanggal Lahir"/>
                        <Datepicker/>
                        <TextInput title="Kelompok Umur"/>
                        <Dropdown
                        data={[{id:1,name:'U8'},
                                {id:2,name:'U12'},
                                ]}
                        placeholder="<--Pilih Kelompok Umur-->"
                        />
                        <TextInput title="TIM"/>
                        <Dropdown
                        data={[{id:1,name:'SSB 1'},
                                {id:2,name:'SSB 2'},
                                ]}
                        placeholder="<--Pilih TIM-->"
                        />
                        <TextInput title="Jenis Kelamin"/>
                        <Dropdown
                        data={[{id:1,name:'Laki Laki'},
                                {id:2,name:'Perempuan'},
                                ]}
                        placeholder="<--Pilih Jenis Kelamin-->"
                        />
                        <TextInput title="Sekolah"/>
                        <Input placeholder="Masukan Sekolah"/>
                        <TextInput title="Kelas"/>
                        <Input placeholder="Masukan Kelas"/>
                        <TextInput title="NISN"/>
                        <Input placeholder="Masukan NISN"/>
                        <TextInput title="Agama"/>
                        <Input placeholder="Masukan Agama"/>
                        <TextInput title="Alamat"/>
                        <Input placeholder="Masukan Alamat"/>
                        <TextInput title="Desa"/>
                        <Input placeholder="Masukan Desa"/>
                        <TextInput title="Kecamatan"/>
                        <Input placeholder="Masukan Kecamatan"/>
                        <TextInput title="Kabupaten"/>
                        <Input placeholder="Masukan Kabupaten"/>
                        <TextInput title="Email"/>
                        <Input placeholder="Masukan Email"/>
                        <TextInput title="Telepon"/>
                        <Input placeholder="Masukan Telepon"/>
                        <TextInput title="Nomor Baju"/>
                        <Input placeholder="Masukan Nomor Baju"/>
                        <TextInput title="Ukuran Baju"/>
                        <Input placeholder="Masukan Ukuran Baju"/>
                        <TextInput title="Posisi"/>
                        <Input placeholder="Masukan Posisi"/>
                        <TextInput title="Nama Ayah"/>
                        <Input placeholder="Masukan Nama Ayah"/>
                        <TextInput title="Pekerjan Ayah"/>
                        <Input placeholder="Masukan Pekerjaan Ayah"/>
                        <TextInput title="Telepon Ayah"/>
                        <Input placeholder="Masukan Telepon Ayah"/>
                        <TextInput title="Nama Ayah"/>
                        <Input placeholder="Masukan Nama Ibu"/>
                        <TextInput title="Pekerjan Ibu"/>
                        <Input placeholder="Masukan Pekerjaan Ibu"/>
                        <TextInput title="Telepon Ibu"/>
                        <Input placeholder="Masukan Telepon Ibu"/>
                        <TextInput title="Foto"/>
                        <Input placeholder="Masukan Foto"/>
                        <TextInput title="Kartu Keluarga"/>
                        <Input placeholder="Masukan Kartu Keluarga"/>
                        <TextInput title="Ijazah"/>
                        <Input placeholder="Masukan Ijazah"/>
                        <TextInput title="Akta Kelahiran"/>
                        <Input placeholder="Akta Kelahiran"/>
                        <TextInput title="Catatan"/>
                        <Input placeholder="Masukan Catatan"/>
                        <TextInput title="Tanggal Daftart"/>
                        <Datepicker/>
                        <Distance distance={10}/>
                        <Button title="Simpan" onPress={()=>navigation.navigate('Student')}/>
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
export default AddStudent