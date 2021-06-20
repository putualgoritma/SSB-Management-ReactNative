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
import { Button, Footer, Header2, Search, Spinner, Title } from '../../../component';
import API from '../../../service';
import { colors } from '../../../utils/colors';
import Distance from '../../../utils/distance';
import { dateRegister } from '../../../utils/register';

const Subject =({navigation})=>{

  const TOKEN = useSelector((state) => state.TokenReducer);
  const USER = useSelector((state) => state.UserReducer);
  const [dataSchedull, setDataSchedull] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterSchedull, setFilterSchedull] = useState('')
  const tableHead = ['NO', 'Nama','Code', 'Aksi'];
  const [tableTitle, setTableTitle] = useState()
  const [tableData, setTableData] = useState()

  useEffect(() => {
    let run = true
    if(run){
     API.subject(TOKEN).then((result) => {
      let data = [];
      let no = [];
      setDataSchedull(result.data)
      // data student
      console.log(result.data);
      result.data.map((item, index) => {
        no[index] = index + 1;
        data[index]= [
          item.name,
          item.code,
          <View style={{padding : 4}} >
            <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
              onPress={() => navigation.navigate('DetailSubject', {subject : item})}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
            </TouchableOpacity>
          </View>
        ]
      })
      setTableTitle(no)
      setTableData(data)
      setDataSchedull(result.data)
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
    if(filterSchedull !== ''){
      setLoading(true)
      let data = []
      let no = []
      let seacrh = '';
      dataSchedull.map((item, index) => {
        seacrh = item.name.toLowerCase()
        if(seacrh.includes(filterSchedull.name.toLowerCase())){
          no[index] = index + 1;
          data[index]= [
            item.name,
            <View style={{padding : 4}} >
              <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
                onPress={() => navigation.navigate('DetailSubject', {subject : item})}
              >
                <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
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
              <Title title="Mata Pelajaran"/>
              <Distance distance = {5}/>
              <Search
                onChangeText = {(value) => setFilterSchedull({...filterSchedull, name : value})}
              />
              <Distance distance = {5}/>
              <Button title="Filter" onPress = {handleFilter}/>
              <Distance distance = {5}/>

              <View style={{height : '63%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={tableHead} flexArr={[1.2, 2, 2]} style={styles.head} textStyle={styles.text}/>
                </Table>

                {/*  table data */}
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.title} heightArr={[40,40]} textStyle={styles.text}/>
                      <Rows data={tableData} flexArr={[2, 2]} style={styles.row} textStyle={styles.text}/>
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
  row: {  height: 40  },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
});

export default Subject