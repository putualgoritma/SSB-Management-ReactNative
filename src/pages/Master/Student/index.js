import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Button, Dropdown, Footer, Header2, Search, Spinner, Title } from '../../../component';
import API from '../../../service';
import { colors } from '../../../utils/colors';
import Distance from '../../../utils/distance';

const Student =({navigation})=>{

  const TOKEN = useSelector((state) => state.TokenReducer);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterStudent, setFilterStudent] = useState({
    grade :  {
      id : null,
      name : 'Pilih Semua'
    },
    name : ''
  })
  const tableHead = ['NO', 'Nama', 'Kelas', 'Aksi'];
  const [tableTitle, setTableTitle] = useState()
  const [tableData, setTableData] = useState()
  const [grade, setGrade] = useState(null)
  const [selectGrade, setSelectGrade] = useState({})

  useEffect(() => {
    let run = true
    if(run){
      Promise.all([ API.student({grade : filterStudent.grade.id}, TOKEN), API.grades( TOKEN)]).then((result) => {
        console.log(result);
        let data = [];
        let no = [];
        // setStudent(result[0].data)
        // data student
        result[0].data.map((item, index) => {
          no[index] = index + 1;
          data[index]= [
            item.name,
            item.grade.name,
            <View style={{padding : 4}} >
              <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
                onPress={() => navigation.navigate('DetailStudent', {student : item})}
              >
                <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
              </TouchableOpacity>
            </View>
          ]
        })

        // data grade
        let dataGrade = [
          {
            id : null,
            name : 'Pilih Semua'
          }
        ]
        result[1].data.map((item, index) => {
            dataGrade[dataGrade.length] = {
              id : item.id,
              name : item.name
            }
        })

        // insert data
        setTableData(data)
        setTableTitle(no)
        setGrade(dataGrade)
        setLoading(false)
      }).catch((e) => {
        let mes = JSON.parse(e.request._response)
        alert(mes.message )
        setLoading(false)
      })
    }
    return () => {
      run =false;
    }
  }, [])

  const handleFilter = () => {
    if(filterStudent.grade.id !== null && (filterStudent.name !== null || filterStudent.name !== '')){
      setLoading(true)
      API.student({grade : filterStudent.grade.id}, TOKEN).then((result) => {
        let data = [];
        let no = [];
        let seacrh = '';
        result.data.map((item, index) => {
          seacrh = item.name.toLowerCase()
          if(seacrh.includes(filterStudent.name.toLowerCase())){
            no[index] = index + 1;
            data[index]= [
              item.name,
              item.grade.name,
              <View style={{padding : 4}} >
                <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
                  onPress={() => navigation.navigate('DetailStudent', {student : item})}
                >
                  <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
                </TouchableOpacity>
              </View>
            ]
          }
        })
        setTableData(data)
        setTableTitle(no)
        setLoading(false)
      })
    }else if(filterStudent.grade.id !== null){
      setLoading(true)
        API.student({grade : filterStudent.grade.id}, TOKEN).then((result) => {
          let data = [];
          let no = [];
          result.data.map((item, index) => {
            no[index] = index + 1;
            data[index]= [
              item.name,
              item.grade.name,
              <View style={{padding : 4}} >
                <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
                  onPress={() => navigation.navigate('DetailStudent', {student : item})}
                >
                  <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
                </TouchableOpacity>
              </View>
            ]
          })
          setTableData(data)
          setTableTitle(no)
          setLoading(false)
        })
    }else if((filterStudent.name !== null || filterStudent.name !== '') && (filterStudent.grade.id === null)){
      setLoading(true)
      API.student({grade : filterStudent.grade.id}, TOKEN).then((result) => {
        let data = [];
        let no = [];
        let seacrh = '';
        result.data.map((item, index) => {
          seacrh = item.name.toLowerCase()
          if(seacrh.includes(filterStudent.name.toLowerCase())){
            no[index] = index + 1;
            data[index]= [
              item.name,
              item.grade.name,
              <View style={{padding : 4}} >
                <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
                  onPress={() => navigation.navigate('DetailStudent', {student : item})}
                >
                  <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
                </TouchableOpacity>
              </View>
            ]
          }
        })
        setTableData(data)
        setTableTitle(no)
        setLoading(false)
      })
    }
  }



  return(
    <View style={styles.container}>
       {!loading ? null : 
            <Spinner/>
        }
        <View style={styles.section}>
          <Header2/>
          <Title title="SISWA"/>
          <View style={{paddingHorizontal : 20}}>
            <Dropdown
              selectedItem ={filterStudent.grade}
              onItemSelect ={(value) => setFilterStudent({...filterStudent, grade : value})}
              data={grade}
              placeholder="<--Pilih Kelompok Umur-->"
              />
              <Distance distance = {5}/>
              <Search
                onChangeText = {(value) => setFilterStudent({...filterStudent, name : value})}
              />
              <Distance distance = {5}/>
              <Button title="Filter" onPress = {handleFilter}/>
              <Distance distance = {5}/>

              <View style={{height : '63%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                </Table>

                {/*  table data */}
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.title} heightArr={[40,40]} textStyle={styles.text}/>
                      <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                  </Table>       
                </ScrollView>
              </View>
          </View>
        </View>
      <Footer
          navigation = {navigation}
          focus = 'Master'
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E5E7E9',
  },
  section:{ 
    // width:'90%',
    flex:1,
  },
  btn: { 
    width: 58, 
    height: 18, 
    backgroundColor: '#78B7BB',  
    borderRadius: 2 
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff' 
  }, 
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 40  },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
});

export default Student