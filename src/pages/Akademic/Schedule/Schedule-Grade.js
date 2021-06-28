import React, { useState } from 'react';
import { StyleSheet,Text,TouchableOpacity,View,ScrollView } from 'react-native';
import {Footer,Header2,Title} from '../../../component'
import IconGrade from '../../../assets/icon/IconGrade'

const ButtonMenu = (props) => {
    return (
        <TouchableOpacity style={styles.box(props.warna)}>
            <View style={styles.wrappingIconText}>
                <IconGrade width={90} height={55} onPress={props.navigation}/>
                <Text style={styles.text}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ScheduleGrade =({navigation})=>{
    const data = [
        'U8',
        'U10',
        'U12',
        'U14',
        'U16',
    ];
    const color = [
        "#A12424", 
        "#37A8C1", 
        "#9CBE5D",
        "#1CA68D",
        "#3789C1",
    ];
    return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
                <Header2/>
                <Title  title="Jadwal Kelas"/>
                <View style={{alignItems:'center'}}>
                    <View style={styles.wrappingBox}>
                      {data.map((item, index) => {
                        let index_multi = Math.floor(index/5);
                        let index_color = index - (index_multi * 5);
                        return (
                              <ButtonMenu warna = {color[index_color]} label={data[index]} navigation={()=>navigation.navigate('ScheduleList')}/>
                          )
                      })}
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Akademic"/>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E7E9'
    },
    wrappingBox:{
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'flex-start',
        paddingVertical:15,
        paddingHorizontal:15
    },
    wrappingIconText:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100
    },
    box: (color) => (
        {
            width:100,
            height:100,
            borderRadius:10,
            backgroundColor:color,
            marginHorizontal:'2.8%',
            marginVertical:'3%'
        }
    ) ,
    text:{
        color:'#FFFFFF',
        fontSize:18, 
        fontWeight:'bold'
    }
  });
export default ScheduleGrade