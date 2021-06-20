import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
    View,
    StyleSheet
} from 'react-native';
class datepicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2021-05-07"}
  }
 
  render(){
    return (
        <DatePicker
            style={{width:'80%'}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2021-05-07"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateInput: {
                backgroundColor:'#FFFFFF',
                borderColor:'#ccc',
                height:50,
                borderRadius:5,
                borderWidth:1
            }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
    )
  }
}
export default datepicker