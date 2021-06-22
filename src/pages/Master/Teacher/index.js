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
import { Button, Dropdown, Footer, Header2, Search, Spinner, Title,ButtonAdd} from '../../../component';
import API from '../../../service';
import { colors } from '../../../utils/colors';
import Distance from '../../../utils/distance';

const Teacher =({navigation})=>{

  const TOKEN = useSelector((state) => state.TokenReducer);
  const [dataTeacher, setDataTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterTeacher, setFilterTeacher] = useState('')
  const tableHead = ['NO', 'Nama', 'Code', 'Aksi'];
  const [tableTitle, setTableTitle] = useState()
  const [tableData, setTableData] = useState()
  const [grade, setGrade] = useState(null)
  const [selectGrade, setSelectGrade] = useState({})

  useEffect(() => {
    let run = true
    if(run){
     API.teacher(TOKEN).then((result) => {
      let data = [];
      let no = [];
      // setStudent(result[0].data)
      // data student
      console.log(result.data);
      result.data.map((item, index) => {
        no[index] = index + 1;
        data[index]= [
          item.name,
          item.code,
          <View style={{padding : 4}} >
            <TouchableOpacity style={{backgroundColor : colors.button, height : 30, justifyContent : 'center'}}
              onPress={() => navigation.navigate('DetailTeacher', {teacher : item})}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
            </TouchableOpacity>
            <Distance distance={3}/>
            <TouchableOpacity style={{backgroundColor :  '#163f5f', height : 30, justifyContent : 'center'}}
              onPress={() => navigation.navigate('EditTeacher')}
                >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Edit</Text>
              </TouchableOpacity>
              <Distance distance={3}/>
              <TouchableOpacity style={{backgroundColor :  '#C53618', height : 30, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Teacher')}
                >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Delete</Text>
              </TouchableOpacity>
          </View>
        ]
      })
      setTableTitle(no)
      setTableData(data)
      setDataTeacher(result.data)
       setLoading(false)
     }).catch((e) => {
       console.log(e.request);
       setLoading(false)
     })
    }
    return () => {
      run =false;
    }
  }, [])

  const handleFilter = () => {
    if(filterTeacher !== ''){
      setLoading(true)
      let data = []
      let no = []
      let seacrh = '';
      dataTeacher.map((item, index) => {
        seacrh = item.name.toLowerCase()
        if(seacrh.includes(filterTeacher.name.toLowerCase())){
          no[index] = index + 1;
          data[index]= [
            item.name,
            item.code,
            <View style={{padding : 4}} >
              <TouchableOpacity style={{backgroundColor : colors.button, height : 30, justifyContent : 'center'}}
                onPress={() => navigation.navigate('DetailTeacher', {teacher : item})}
              >
                <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
              </TouchableOpacity>
              <Distance distance={3}/>
            <TouchableOpacity style={{backgroundColor :  '#163f5f', height : 30, justifyContent : 'center'}}
              onPress={() => navigation.navigate('EditTeacher')}
                >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Edit</Text>
              </TouchableOpacity>
              <Distance distance={3}/>
              <TouchableOpacity style={{backgroundColor :  '#C53618', height : 30, justifyContent : 'center'}}
              onPress={() => navigation.navigate('Teacher')}
                >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Delete</Text>
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



  return(
    <View style={styles.container}>
       {!loading ? null : 
            <Spinner/>
        }
        <View style={styles.section}>
          <Header2/>
          <View style={{paddingHorizontal : 20}}>
              {/* <Text style={styles.titlePage} >Guru</Text> */}
              <Title title="Guru"/>
              <Distance distance = {5}/>
              <View style={{flexDirection:'row'}}>
                <Search
                  onChangeText = {(value) => setFilterTeacher({...filterTeacher, name : value})}
                />
                <Distance distanceH = {5}/>
                <Button title="Filter" onPress = {handleFilter} width="27%"/>
              </View>
              <Distance distance = {8}/>
              <ButtonAdd onPress={() =>navigation.navigate('AddTeacher')}/>
              <Distance distance ={8}/>
              <View style={{height : '63%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                </Table>

                {/*  table data */}
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.title} heightArr={[120,120]} textStyle={styles.text}/>
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
  titlePage : {
    textAlign:'center',
    fontWeight : 'bold',
    fontSize : 30
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
  row: {  height: 120  },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
});

export default Teacher