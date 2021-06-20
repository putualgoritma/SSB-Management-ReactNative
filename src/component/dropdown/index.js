import React,{useState } from 'react';
import {
  View,
} from 'react-native';
import SearchableDropDown from 'react-native-searchable-dropdown';
const Dropdown=(props)=>{
const [selectedItem, setSelectedItem] =useState({})
var data = props.data
return (
    <View style={{width:'80%'}}>
        <SearchableDropDown
        selectedItems = {props.selectedItem}
        onItemSelect={props.onItemSelect}
        itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 5,
        }}
        itemTextStyle={{ color: '#222' }}
        itemsContainerStyle={{ maxHeight: 140 }}
        defaultIndex={0}
        items={data}
        textInputProps={
            {
            placeholder: props.placeholder,
            underlineColorAndroid: "transparent",
            style: {
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                backgroundColor:'#ffffff',
                width:'100%'
            },
            }
        }
        listProps={
            {
            nestedScrollEnabled: true,
            }
        }
        />
    </View>
)
}   
export default Dropdown