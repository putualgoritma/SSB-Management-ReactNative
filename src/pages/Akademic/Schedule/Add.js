import React,{useState} from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
  } from 'react-native';
import {Footer,Header2,Title,TextInput,Input,Button,Dropdown} from '../../../component';
import Distance from '../../../utils/distance';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const AddSchedule=({navigation})=>{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState();
    const [timeEnd, setTimeEnd] = useState();
    const [type, setType] =useState('start');
    const onChangeStart = (event, selectedDate) => {
     const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      
      let time = `${hours} : ${minutes}`
      setTime(time);
      console.log(time);
      setDate(currentDate);
    };

    const onChangeEnd = (event, selectedDate) => {
      const currentDate = selectedDate || date;
       setShow(Platform.OS === 'ios');
       let hours = currentDate.getHours();
       let minutes = currentDate.getMinutes();
       
       let time = `${hours} : ${minutes}`
       setTimeEnd(time);
       console.log(time);
       setDate(currentDate);
     };
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
      };
    const showTimepicker = () => {
      showMode('time');
    };
    return (
        <View style={styles.container}>
            <Header2/>
            <Title title="Tambah Jadwal"/>
            <View style={{flex:1}}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <TextInput title="Kode"/>
                        <Input placeholder="Masukan Kode"/>
                        <TextInput title="Kode"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Periode'},
                                {id:2,name:'2021-2022'},
                                {id:3,name:'2022-2023'},
                                ]}
                        placeholder="<--Pilih Periode-->"
                        />
                        <TextInput title="Semester"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Semester'},
                                {id:2,name:'Semester 1'},
                                {id:3,name:'Semester 2'},
                                ]}
                        placeholder="<--Pilih Semester-->"
                        />
                        <TextInput title="Kelompok Umur"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Kelompok Umur'},
                                {id:2,name:'U 12'},
                                {id:3,name:'U 14'},
                                {id:3,name:'U 16'},
                                ]}
                        placeholder="<--Pilih Kelompok Umur-->"
                        />
                        <TextInput title="Hari"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Hari'},
                                {id:2,name:'Senin'},
                                {id:3,name:'Selasa'},
                                {id:4,name:'Rabu'},
                                {id:5,name:'Kamis'},
                                {id:6,name:'Jumat'},
                                {id:7,name:'Sabtu'},
                                {id:8,name:'Minggu'},
                                ]}
                        placeholder="<--Pilih Hari-->"
                        />
                        <TextInput title="Pilih Mata Pelajaran"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Mata Pelajaran'},
                                {id:2,name:'Passing'},
                                {id:3,name:'Dribling'},
                                {id:4,name:'Shooting'},
                                ]}
                        placeholder="<--Pilih Mata Pelajaran-->"
                        />
                        <TextInput title="Pilih Pengajar 1"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Pengajar 1'},
                                {id:2,name:'Pak Budi'},
                                {id:3,name:'Pak Cristiano'},
                                {id:4,name:'Pak Benzema'},
                                ]}
                        placeholder="<--Pilih Mata Pengajar 1-->"
                        />
                        <TextInput title="Pilih Pengajar 2"/>
                        <Dropdown
                        data={[ {id:1,name:'Pilih Pengajar 2'},
                                {id:2,name:'Pak Mbapae'},
                                {id:3,name:'Pak Modric'},
                                {id:4,name:'Pak Ibrahimovic'},
                                ]}
                        placeholder="<--Pilih Mata Pengajar 1-->"
                        />
                        <TextInput title="Mulai Pukul"/>
                        <View style={{flexDirection:'row', width:'80%'}}>
                          <View style={{backgroundColor:'#FFFFFF', height:50, width:'40%', borderRadius:5, justifyContent:'center',alignItems:'center'}}>
                            <Text>{time}</Text>  
                          </View>
                          <Distance distanceH={5}/>
                          <TouchableOpacity style={{backgroundColor:'#1774BC',width:'55%',height:50,borderRadius:5, justifyContent:'center',alignItems:'center'}} onPress={() => {showTimepicker(); setType('start')}} title="Mulai Pukul">
                              <View style={{flexDirection:'row'}}>
                                  <FontAwesomeIcon icon={faClock} style={{color:'#FFFFFF'}} size={ 20 } />
                                  <Distance distanceH={5}/>
                                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Mulai Pukul</Text>
                              </View>
                          </TouchableOpacity>
                        </View>
                        <TextInput title="Sampai Pukul"/>

                        <View style={{flexDirection:'row', width:'80%'}}>
                          <View style={{backgroundColor:'#FFFFFF', height:50, width:'40%', borderRadius:5, justifyContent:'center',alignItems:'center'}}>
                            <Text>{timeEnd}</Text>  
                          </View>
                          <Distance distanceH={5}/>
                          <TouchableOpacity style={{backgroundColor:'#163F5F',width:'55%',height:50,borderRadius:5, justifyContent:'center',alignItems:'center'}} onPress={() => {showTimepicker(); setType('end')}} title="Sampai Pukul">
                              <View style={{flexDirection:'row'}}>
                                  <FontAwesomeIcon icon={faClock} style={{color:'#FFFFFF'}} size={ 20 } />
                                  <Distance distanceH={5}/>
                                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sampai Pukul</Text>
                              </View>
                          </TouchableOpacity>
                        </View>
                            {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={type == 'end' ? onChangeEnd : onChangeStart}
                            />
                            )}
                        <Distance distance={10}/>
                         <Button title="Simpan" onPress={()=>navigation.navigate('ScheduleList')} />
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
export default AddSchedule