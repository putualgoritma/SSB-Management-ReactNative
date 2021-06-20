import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useSelector } from 'react-redux';
import { Footer,Header2,Title,Button,InputRead,TextInput,Dropdown,Input,Datepicker, Spinner} from '../../../component';
import API from '../../../service';
import Distance from '../../../utils/distance';
const Edit = ({navigation, route})  => {
  const [date, setDate] = useState(null)
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false);
  const item = route.params.item
  const [status, setStatus] = useState('')
  const TOKEN = useSelector((state) => state.TokenReducer);
  const dateRegister = () =>  {
    let date = new Date(),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth,day].join("-");
  }
  useEffect(() => {
    let run = true
    if(run){
      console.log(route.params.item)
    }
    return () => {
      run = false;
    }
  }, [])

  const handleSpp = () => {
    if(status !== '' && amount > 0){
        let form ={
          status : status.value,
          student_id : item.id,
          periode : item.periode,
          register : dateRegister(),
          code : item.code,
          amount : amount
        }
        console.log(form);
        setLoading(true)
        API.sppProcess(form, TOKEN).then((result) => {
          console.log(result);
          setLoading(false)
          navigation.navigate('Bill')
          alert('pembayaran sukses')
        }).catch((e) => {
          console.log(e.request);
          setLoading(false)
        })
    }else{
      alert('Mohon isi jumlah pembayaran atau ubah status pembayaran')
    }
  }

    return (
    <View style={styles.container}>
       {!loading ? null : 
            <Spinner/>
        }
        <Header2/>
        <Title
          title="Tambah SPP"
        />
        <View style={{flex:1, padding:20}} >
          <TextInput
            title="Status"
          />
          <Dropdown
            data={[{id:1,name:'Belum Bayar', value : 'unpaid'},
            {id:2,name:'Sudah Bayar', value : 'paid'}
          ]}
            selectedItem ={status}
            onItemSelect ={(value) => setStatus(value) }
            placeholder="<--Pilih Status-->"
          />
          <ScrollView>
            <TextInput
              title="Periode"
            />
            <InputRead
              value={item.periode}
            />
            <TextInput
              title="Siswa"
            />
            <InputRead
              value={item.name}
            />
            <TextInput
              title="Kode"
            />
            <InputRead
              // placeholder={item.code}
              value = {item.code}
            />
            <TextInput
            title="Jumlah"
            />
            <Input
              keyboardType={'numeric'}
              changeText={(value) => setAmount(value)}
            />
            <Distance distance={5}/>
            <Button
              title="Simpan"
              paddingTop={30}
              paddingBottom={20}
              onPress = {handleSpp}
            />
          </ScrollView>
        </View>
        <Footer  navigation = {navigation} focus='Akademic'/>
    </View>
    )
  };
  
  const styles = StyleSheet.create({
    section:{
      // alignItems:'center'
      padding:20
    },
    container:{
        flex:1,
        backgroundColor:'#E5E7E9',
    },
    textareaContainer: {
        height: 120,
        borderRadius:5,
        padding: 5,
        backgroundColor: '#FFFFFF',
      },
      textarea: {
        textAlignVertical: 'top',
        height: 170,
        fontSize: 14,
        color: '#333',
      },

  });

export default Edit;