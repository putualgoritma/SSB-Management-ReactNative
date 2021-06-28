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
const TestDate=({navigation})=>{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
        // console.log(currentDate.getHours() );
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
         
        let time = `${hours} : ${minutes}`

        console.log(time);
        
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
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#E5E7E9',
  },
})
export default TestDate