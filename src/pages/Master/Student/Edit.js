import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button,Datepicker,Dropdown} from '../../../component';
import Distance from '../../../utils/distance';
const EditStudent=({navigation})=>{
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Edit Siswa"/>
            <View style={{flex:1}}>
                <ScrollView keyboardShouldPersistTaps = 'always' >
                    <View style={{alignItems:'center'}}>
                        <TextInput title="No Induk"/>
                        <Input placeholder="Masukan No Induk" value="PD.VII.2020.049"/>
                        <TextInput title="Nama Lengkap"/>
                        <Input placeholder="Masukan Nama Lengkap" value ="I KADEK  ADITYA DARMA LAKSANA"/>
                        <TextInput title="Nama Panggilan"/>
                        <Input placeholder="Masukan Nama Panggilan" value="ADIT"/>
                        <TextInput title="Tempat Lahir"/>
                        <Input placeholder="Masukan Tempat Lahir" value="BR. CENGOLO"/>
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
                        <Input placeholder="Masukan Sekolah" value ="SMP NEGERI 5 TABANAN"/>
                        <TextInput title="Kelas"/>
                        <Input placeholder="Masukan Kelas" value="IX"/>
                        <TextInput title="NISN"/>
                        <Input placeholder="Masukan NISN" value="61393566"/>
                        <TextInput title="Agama"/>
                        <Input placeholder="Masukan Agama" value="HINDU"/>
                        <TextInput title="Alamat"/>
                        <Input placeholder="Masukan Alamat" value="BR. CENGOLO, SUDIMARA"/>
                        <TextInput title="Desa"/>
                        <Input placeholder="Masukan Desa" value="SUDIMARA"/>
                        <TextInput title="Kecamatan"/>
                        <Input placeholder="Masukan Kecamatan" value="TABANAN"/>
                        <TextInput title="Kabupaten"/>
                        <Input placeholder="Masukan Kabupaten" value="TABANAN"/>
                        <TextInput title="Email"/>
                        <Input placeholder="Masukan Email" value=""/>
                        <TextInput title="Telepon"/>
                        <Input placeholder="Masukan Telepon" value="83117286267"/>
                        <TextInput title="Nomor Baju"/>
                        <Input placeholder="Masukan Nomor Baju" value="8"/>
                        <TextInput title="Ukuran Baju"/>
                        <Input placeholder="Masukan Ukuran Baju" value="M"/>
                        <TextInput title="Posisi"/>
                        <Input placeholder="Masukan Posisi" value=""/>
                        <TextInput title="Nama Ayah"/>
                        <Input placeholder="Masukan Nama Ayah"  value="I WAYAN SETIAWAN"/>
                        <TextInput title="Pekerjan Ayah"/>
                        <Input placeholder="Masukan Pekerjaan Ayah"  value="KARYAWAN SWASTA"/>
                        <TextInput title="Telepon Ayah"/>
                        <Input placeholder="Masukan Telepon Ayah"  value=""/>
                        <TextInput title="Nama Ayah"/>
                        <Input placeholder="Masukan Nama Ibu"  value="NI WAYAN MURIANI"/>
                        <TextInput title="Pekerjan Ibu"/>
                        <Input placeholder="Masukan Pekerjaan Ibu"  value="KARYAWAN SWASTA"/>
                        <TextInput title="Telepon Ibu"/>
                        <Input placeholder="Masukan Telepon Ibu"  value=""/>
                        <TextInput title="Foto"/>
                        <Input placeholder="Masukan Foto"  value=""/>
                        <TextInput title="Kartu Keluarga"/>
                        <Input placeholder="Masukan Kartu Keluarga"  value=""/>
                        <TextInput title="Ijazah"/>
                        <Input placeholder="Masukan Ijazah"  value=""/>
                        <TextInput title="Akta Kelahiran"/>
                        <Input placeholder="Masukan Akta Kelahiran"/>
                        <TextInput title="Catatan"/>
                        <Input placeholder="Masukan Catatan" value=""/>
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
export default EditStudent