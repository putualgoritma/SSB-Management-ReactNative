import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
// import DatePicker from 'react-native-datepicker';
// import Animated from 'react-native-reanimated';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Footer,Header2,Title,Tabel,Button,Dropdown, Spinner} from '../../../component';
import Distance from '../../../utils/distance';
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import API from '../../../service';
import { useSelector } from 'react-redux';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { colors } from '../../../utils/colors';
import { useIsFocused } from '@react-navigation/native';

const Absensi = ({navigation,route}) => {
  const [date, setDate] = useState(null)
  const TOKEN = useSelector((state) => state.TokenReducer);
  const [dataSubject, setDataSubject] = useState(null)
  const subject = route.params.item
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null)
  const tableHead = ['NO', 'Siswa', 'Kehadiran', 'Jumlah Iuran', 'Aksi'];
  const [tableTitle, setTableTitle] = useState()
  const [tableData, setTableData] = useState()
  const isFocused = useIsFocused()
  const dataStatus = [{name : 'Pilih Semua'},{name : 'alpha'},{name : 'ijin'},{name : 'sakit'},{name : 'masuk'}]
  const windowWidth = Dimensions.get('window').width;
  function convert(str) {
    let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  

  useEffect(() => {
    let run = true
    if(run){
      console.log(subject);
      let dataList = {
        subject : subject.schedule_subject_id,
        grade : subject.grade_id,
        form : {
          register : date === null ? convert(new Date) : convert(date),
          presence : status
        }
      }

      console.log(dataList);
      // console.log(subject); 
      API.absenlist(dataList, TOKEN).then((result) => {
        var data = []
        var no =[]
        result.data.map((item, index) => {
          no[index] = index + 1;
          data[index]= [
            item.name,
            item.presence,
            item.amount === null? 0 :parseInt(item.amount),
            <View style={{padding : 4}} >
              <TouchableOpacity style={{backgroundColor : colors.button, height : 40, justifyContent : 'center'}}
                onPress={() => navigation.navigate('Absen', {student_id : item.id, student : item, tanggal : date === null ? convert(new Date()) : convert(date), schedule_subject_id_hidden : subject.schedule_subject_id })}
              >
                <Text style={{textAlign:"center", color : '#ffffff'}} >Absen</Text>
              </TouchableOpacity>
              <Distance distance={5}/>
              <TouchableOpacity style={{backgroundColor :  '#163f5f', height : 40, justifyContent : 'center'}}
                onPress={() => navigation.navigate('Bayar', {student_id : item.id, student : item, tanggal : date === null ? convert(new Date()) : convert(date), schedule_subject_id_hidden : subject.schedule_subject_id })}
              >
                <Text style={{textAlign:"center", color : '#ffffff'}} >Bayar</Text>
              </TouchableOpacity>
            </View>
          ]
        })
        console.log('dara',result.data);
        setDataSubject(result.data)
        setTableTitle(no)
        setTableData(data)
        setLoading(false)

      }).catch((e) => {
        let mes = JSON.parse(e.request._response)
        setLoading(false)
        console.log(e.request);
        // console.log(mes);
      })
    }
    return () => {
      run = false
    }
  }, [isFocused])


  const handelFilter = () => {
    let data =[]
    let no = []
    let dateNew = date ===null ? convert(new Date) : convert(date)
    // alert(dateNew)
    let cek = false
    if(status!== null && status.name !== 'Pilih Semua'){
      setLoading(true)
      dataSubject.map((item,index) => {
        if(status.name == item.presence && item.register == dateNew){
          no[index] = index + 1;
          data[index]= [
            item.name,
            item.presence,
            item.amount === null? 0 :parseInt(item.amount),
            <View style={{padding : 4}} >
            <TouchableOpacity style={{backgroundColor : colors.button, height : 40, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Absen', {student_id : item.id, student : item, tanggal : date === null ? convert(new Date()) : convert(date), schedule_subject_id_hidden : subject.schedule_subject_id })}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Absen</Text>
            </TouchableOpacity>
            <Distance distance={5}/>
            <TouchableOpacity style={{backgroundColor :  '#163f5f', height : 40, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Bayar', {student_id : item.id, student : item, tanggal : date === null ? convert(new Date()) : convert(date), schedule_subject_id_hidden : subject.schedule_subject_id })}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Bayar</Text>
            </TouchableOpacity>
          </View>
          ]
        }
      })
      setTableTitle(no)
      setTableData(data)
      setLoading(false)
    }else{
      setLoading(true)
      dataSubject.map((item,index) => {
        if(item.register == dateNew){
          no[index] = index + 1;
          data[index]= [
            item.name,
            item.presence,
            item.amount === null? 0 :parseInt(item.amount),
            <View style={{padding : 4}} >
            <TouchableOpacity style={{backgroundColor : colors.button, height : 40, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Absen', {student_id : item.id, student : item, tanggal : dateNew, schedule_subject_id_hidden : subject.schedule_subject_id })}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Absen</Text>
            </TouchableOpacity>
            <Distance distance={5}/>
            <TouchableOpacity style={{backgroundColor :  '#163f5f', height : 40, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Bayar', {student_id : item.id, student : item, tanggal : dateNew, schedule_subject_id_hidden : subject.schedule_subject_id })}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Bayar</Text>
            </TouchableOpacity>
          </View>
          ]
        }
      })
      setTableTitle(no)
      setTableData(data)
      setLoading(false)
    }
  }

  return (
    <View style={styles.container} >
       {!loading ? null : 
            <Spinner/>
        }
      <View style={styles.section} >
      <Header2/>
      <Title
        title="Absen List"
      />
        <View style={{padding : 20}}>
          <DatePicker
            date={date === null ? new Date() : date}
            mode = 'date'
            fadeToColor ='white'
            onDateChange={(value) => setDate(value)}
            style={{height : 40, backgroundColor : 'white', width : (windowWidth / 100 * 72)}}
          />
          <Distance distance ={5}/>
          <Dropdown
              selectedItem ={status}
              onItemSelect ={(value) => setStatus(value)}
              data={dataStatus}
              placeholder="<--Status-->"
            />
            <Distance distance = {5}/>
            <Button title="Filter" onPress={handelFilter} />
            <Distance distance = {5}/>
            <View style={{height : '58%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={tableHead} flexArr={[0.5,1,1,1,1 ]} style={styles.head} textStyle={styles.text}/>
                </Table>

                {/*  table data */}
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.title}  heightArr={[100]} textStyle={styles.text}/>
                      <Rows data={tableData} flexArr={[1, 1,1,1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                  </Table>       
                </ScrollView>
              </View>
        </View>
      </View>
      <Footer
          navigation = {navigation}
          focus = 'Akademic'
      />
    </View>
  )
}

export default Absensi

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E5E7E9',
  },
  section:{
    flex:1,
  },
  btn: { 
    width: 58, 
    height: 25, 
    backgroundColor: '#78B7BB',  
    borderRadius: 2,
    borderWidth:1,
    borderColor:'#ffffff' 
  },
  btn1: { 
      width: 58, 
      height: 25, 
      backgroundColor: '#163F5F',  
      borderRadius: 2,
      borderWidth:1,
      borderColor:'#ffffff' 
    },
  btnText: { 
    textAlign: 'center', 
    color: '#fff'
  },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.5, backgroundColor: '#f6f8fa' },
  row: {  height: 100  },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
})
