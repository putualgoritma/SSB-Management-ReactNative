import React, { useEffect, useState } from 'react'
import { StyleSheet,Text,TouchableOpacity,View,ScrollView } from 'react-native';
import {Footer,Header2,Title,Spinner} from '../../../component'
import IconGrade from '../../../assets/icon/IconGrade'
import API from '../../../service';
import { useSelector } from 'react-redux';

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


const AbsentGrade =({navigation})=>{
    const [gradeperiode, setGradeperiode] = useState([{}]);
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [loading, setLoading] = useState(true);
    const color = [
        "#A12424", 
        "#37A8C1", 
        "#9CBE5D",
        "#1CA68D",
        "#3789C1",
    ];

    useEffect(() => {
        let run = true
        let dataApi = {}
        if(run){
            API.absentGrades(TOKEN).then((result) => {
            console.log(result);
            let data = []
            // data gradeperiode
            result.data.map((item, index) => {
              data[index] = {
                id : item.id,
                name : item.grade.name
              }
            })
    
            // insert data
            console.log(data);
            setGradeperiode(data)   
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

    return(
        <View style={styles.container}>
            {!loading ? null : 
            <Spinner/>
        }
            <ScrollView style={{flex:1}}>
                <Header2/>
                <Title  title="Absent Kelas"/>
                <View style={{alignItems:'center'}}>
                    <View style={styles.wrappingBox}>
                      {gradeperiode.map((item, index) => {
                        let index_multi = Math.floor(index/5);
                        let index_color = index - (index_multi * 5);
                        return (
                              <ButtonMenu key={index} warna = {color[index_color]} label={item.name} navigation={()=>navigation.navigate('AbsentSchedule', {grade_periode_id : item.id })}/>
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
export default AbsentGrade