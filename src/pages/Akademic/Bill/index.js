import React, { useCallback, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Datemonth, Dropdown, Footer, Header2, Spinner, Title } from '../../../component';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import API from '../../../service';
import Distance from '../../../utils/distance';
import { colors } from '../../../utils/colors';
import MonthPicker from 'react-native-month-year-picker';
import { useIsFocused } from '@react-navigation/native';

  const ButtonAksi = (props) => {
    return (
          <View style={{padding : 4}} >
            <TouchableOpacity style={{backgroundColor : colors.button, height : '100%', justifyContent : 'center'}}
              onPress={() => props.navigation.navigate('DetailBill', {item : props.item})}
            >
              <Text style={{textAlign:"center", color : '#ffffff'}} >Details</Text>
            </TouchableOpacity>
          </View>
    )
  }
  const Bill =({navigation})=>{
    const [periods, setPeriods] = useState('')
    const [selectPeriod, setSelectPeriod] = useState(null)
    const [status, setStatus] = useState('')
    const [grade, setGrade] = useState('')  
    const [spp, setSpp] = useState(null)
    const tableHead = ['NO', 'Nama', 'Tanggal', 'Jumlah', 'aksi'];
    const [tableTitle, setTableTitle] = useState()
    const [tableData, setTableData] = useState()
    const [loading, setLoading] = useState(true);
    const [selectGrade, setSelectGrade] = useState('')
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const showPicker = useCallback((value) => setShow(value), []);
    const isFocused = useIsFocused()

    function convert(str) {
      let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth].join("-");
    }

    const onValueChange = useCallback(
      (event, newDate) => {
        const selectedDate = newDate || date;
  
        showPicker(false);
        setDate(selectedDate);
      },
      [date, showPicker],
    );

    useEffect(() => {
      let run = true
      if(run){
        let form = {
          status : null,
          grade : null,
          periods : null
        }
        let no = []
        let data = []
        Promise.all([API.spp(form, TOKEN), API.grades(TOKEN), API.semester(TOKEN)]).then((result) => {
          setSpp(result[0].data)
            result[0].data.map((item, index) => {
              item.periode = convert(date);
              no[index] = index + 1
              data[index] = [
                item.name,
                item.register,
                item.amount === null ? 0 :parseInt( item.amount), 
                <ButtonAksi navigation = {navigation} item ={item}  />
              ]
            })
            //  console.log(result[2].data);
            setGrade(result[1].data)
            setTableData(data)
            setTableTitle(no)
            setLoading(false)
        }).catch((e) => {
          console.log(e);
          setLoading(false)
        })
      }
      return () => {
        run = false
      }
    }, [isFocused])

    const handleFilter = () => {
      setLoading(true)
      let form = {
        status : status !== '' ? status.value : '',
        grade : selectGrade !== '' ? selectGrade.id : '',
        periods : convert(date)
      }
      let no = []
      let data = []
      API.spp(form, TOKEN).then((result) => {
        result.data.map((item, index) => {
          no[index] = index + 1
          data[index] = [
            item.name,
            item.register,
            item.amount === null ? 0 :parseInt( item.amount), 
            <ButtonAksi navigation = {navigation} item ={item}/>
          ]
        })
        setTableData(data)
        setTableTitle(no)
        console.log(data);
        setLoading(false)
      }).catch((e) => {
        console.log(e);
        setLoading(false)
      })
    }

    return(
      <View style={styles.container}>
        {!loading ? null : 
          <Spinner/>
        }
       <View style={{flex : 1}} >
          <Header2/>
          <Title
            title="SPP"
          />
          <View style={{paddingHorizontal : 20}} >
          <TouchableOpacity onPress={() => showPicker(true)} style={{backgroundColor : 'white', width : '80%', padding : 15, borderRadius : 5}}>
            <Text>{convert(date)}</Text>
          </TouchableOpacity>
          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={date}
              locale="en"
            />
          )}
            <Distance distance ={5}/>
            <Dropdown
              data={grade}
              placeholder="<--Pilih Kelompok Umur-->"
              onItemSelect ={(value) => setSelectGrade(value)}
              selectedItem={selectGrade}
            />
            <Distance distance ={5}/>
            <Dropdown
              data={[{id:1,name:'Belum Bayar', value : 'unpaid'},
                    {id:2,name:'Sudah Bayar', value : 'paid'}
                  ]}
              selectedItem ={status}
              onItemSelect ={(value) => setStatus(value) }
              placeholder="<--Pilih Status-->"
            />
            <Distance distance ={5}/>
            <Button
              title="Filter"
              onPress={handleFilter}
            />
            <Distance distance ={5}/>
            {/* <ScrollView> */}
              <View style={{height : '47%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={tableHead} flexArr={[1, 1.1, 1.5]} style={styles.head} textStyle={styles.text}/>
                </Table>

                {/*  table data */}
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.title}  heightArr={[40,40]} textStyle={styles.text}/>
                      <Rows data={tableData} flexArr={[1.1, 1.5,1,1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                  </Table>       
                </ScrollView>
              </View>
            {/* </ScrollView> */}
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
    section:{
      flexDirection:'row',  
      width:'90%',
      flex:1,
      paddingVertical:5,
      marginTop:5
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

  export default Bill