
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Button, Dropdrown, Footer, Header2, Spinner, Title } from '../../../component';
import API from '../../../service';
import { colors } from '../../../utils/colors';
import Distance from '../../../utils/distance';
import { dateRegister } from '../../../utils/register';
import DropDownPicker from 'react-native-dropdown-picker';


const ButtonAksi = (props) => {
  return (
        <View style={{padding : 4}} >
          <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
            onPress={() => props.navigation.navigate('DetailSchedule', {item : props.item})}
          >
            <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
          </TouchableOpacity>
        </View>
  )
}


const Schedull =({navigation})=>{
  const TOKEN = useSelector((state) => state.TokenReducer);
  const [dataSchedull, setDataSchedull] = useState(null);
  const [periods, setPeriods] = useState([{label :'Pilih semua', value : null}]);
  const [semester, setSemester] = useState([{label :'Pilih semua', value : null}]);
  const [grades, setGrades] = useState([{label :'Pilih semua', value : null}]);
  const [loading, setLoading] = useState(true);
  const tableHead = ['NO', 'Jadwal', 'Kelompok', 'Periode', 'Aksi'];
  const [tableTitle, setTableTitle] = useState()
  const [tableData, setTableData] = useState()
  const [openPeriod, setOpenPeriods]= useState(false)
  const [openSemester, setOpenSemester]= useState(false)
  const [openRegister, setOpenRegister]= useState(false)
  const [openGrade, setOpenGrades]= useState(false)
  const [test, setTest] = useState(null)
  const [valuePeriods, setValuePeriods] = useState(null)
  const [valueGrade, setValueGrade] = useState(null)
  const [valueSemester, setValueSemester] = useState(null)
  const [valueRegister, setValueRegister] = useState(null)
  const filterSchedull ={
    periode : '',
    semester:'',
    grade : '',
    register : ''
  }
  const [register, setRegister] = useState([
    {label : 'Pilih Semua', value : null},
    {label : 'Minggu', value : 'sunday'},
    {label : 'Senin', value : 'monday'},
    {label : 'Selasa', value : 'tuesday'},
    {label : 'Rabu', value : 'wednesday'},
    {label : 'Kamis', value : 'thursday'},
    {label : 'Jumat', value : 'friday'},
    {label : 'Sabtu', value : 'saturday'},
  ])


  useEffect(() => {
    let run = true
    if(run){
      Promise.all([API.schedules(filterSchedull, TOKEN), API.periods(TOKEN), API.semester(TOKEN), API.grades(TOKEN)]).then((result) => {
       let no = []
       let data = []
        console.log('data', result[0].data);
      //  schedull
        result[0].data.map((item, index) => {
          no[index] = index + 1;
          data[index]= [
            item.schedule_register,
            item.grade_name,
            // item.schedule_register,
            item.periode_name,
            <ButtonAksi navigation={navigation} item = {item} />
          ]
         })
      
      // periods
         let dataPeriods = [{label :'Pilih semua', value : null}  ]
         result[1].data.map((item, index) => {
            dataPeriods[dataPeriods.length] = {
              label :item.name,
              value : item.id
            }
         })

          
      // semester
      let dataSemester =  [{label :'Pilih semua', value : null}  ]
      result[2].data.map((item, index) => {
         dataSemester[index + 1] = {
           label :item.name,
           value : item.id
         }
      })


      // // grades
      let dataGrades =  [{label :'Pilih semua', value : null}  ]
      result[3].data.map((item, index) => {
         dataGrades[index + 1] = {
           label :item.name,
           value : item.id
         }
      })
      console.log(result[0].data);
      setTableTitle(no)
      setTableData(data)
      setDataSchedull(result[0].data)
      setPeriods(dataPeriods)
      setSemester(dataSemester)
      setGrades(dataGrades)
      setLoading(false)
      // console.log(data);
     }).catch((e) => {
       console.log(e);
       setLoading(false)
     })
      // console.log(TOKEN);
    }
    return () => {
      run =false;
    }
  }, [])


  const handleFilter = () => {
    setLoading(true)
   API.schedules(
    { 
      periode : valuePeriods,
      semester:valueSemester,
      grade : valueGrade,
      register : valueRegister
    }, TOKEN
   ).then((result) => {
      let no = []
      let data = []
      result.data.map((item, index) => {
        no[index] = index + 1;
        data[index]= [
          item.schedule_register,
          item.grade_name,
          // item.schedule_register,
          item.periode_name,
          <ButtonAksi navigation={navigation} item = {item} />
        ]
      })
      setTableTitle(no)
      setTableData(data)
      setLoading(false)
   }).catch((e) => {
      console.log(e);
   })
  }


  return(
    <View style={styles.container}>
       {!loading ? null : 
            <Spinner/>
        }
        <View style={styles.section} >
          <Header2/>
          {/* <Text style={styles.titlePage} >Schedull</Text> */}
          <Title title="Jadwal"/>
          <Distance distance = {5}/>
          {/* item */}
          <View style={{paddingHorizontal : 20}} >
            <DropDownPicker
              style={{zIndex:0}}
              items= {periods}
              setItems={setPeriods}
              open={openPeriod}
              setOpen ={setOpenPeriods}
              value ={valuePeriods}
              setValue={setValuePeriods}
              placeholder = 'Pilih Periode'
            />
            <Distance distance = {5}/>
            <DropDownPicker
              style={{zIndex:0}}
              items= {semester}
              setItems={setSemester}
              open={openSemester}
              setOpen ={setOpenSemester}
              value ={valueSemester}
              setValue={setValueSemester}
              placeholder = 'Select Semester'
            />
            <Distance distance = {5}/>
            <DropDownPicker
              style={{zIndex:0}}
              items= {grades}
              setItems={setGrades}
              open={openGrade}
              setOpen ={setOpenGrades}
              value ={valueGrade}
              setValue={setValueGrade}
              placeholder = 'Pilih Kelas'
            />
            <Distance distance = {5}/>
            <DropDownPicker
              style={{zIndex:0}}
              items= {register}
              setItems={setRegister}
              open={openRegister}
              setOpen ={setOpenRegister}
              value ={valueRegister}
              setValue={setValueRegister}
              placeholder = 'Pilih Hari'
            />
            <Distance distance = {5}/>
            <Button title="Filter" onPress = {handleFilter}/>
            <Distance distance = {5}/>
            <View style={{height : '63%'}}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={tableHead} flexArr={[1, 1.1, 1, 1.5]} style={styles.head} textStyle={styles.text}/>
              </Table>

              {/*  table data */}
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1}}>
                  <TableWrapper style={styles.wrapper}>
                    <Col data={tableTitle} style={styles.title}  heightArr={[40,40]} textStyle={styles.text}/>
                    <Rows data={tableData} flexArr={[1.1, 1,1.5,1]} style={styles.row} textStyle={styles.text}/>
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

export default Schedull