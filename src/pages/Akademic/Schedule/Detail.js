import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
  import {SubDay,Header2,Title,Footer, Spinner} from '../../../component';
import API from '../../../service';
  const Detail =({navigation, route})=>{
    const item = route.params.item
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [schedule, setSchedull] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let run = true
        if(run){
        
           console.log(item);
            API.schedulesList(item.id, TOKEN).then((result) => {
                setSchedull(result.data)
                console.log('data data ',result.data);
                setLoading(false)
            }).catch((e) => {
                console.log(e.request);
                setLoading(false)
            })
        } 
        return () => {
            run = false
        }
    }, [])

      return(
        <View style={styles.container}>
               {!loading ? null :  
            <Spinner/>
        }
            <ScrollView>
                
                <Header2/>
                <Title
                    title="Detail Jadwal"
                />
              
                {schedule &&
                 <>
                    <View style={{paddingHorizontal:20, paddingVertical:5}}>
                        <Text style={styles.text}>Periode : {schedule.periode.name}</Text>
                    </View>
                    <View style={{paddingHorizontal:20, paddingVertical:5}}>
                        <Text style={styles.text}>Semester : {schedule.semester.name}</Text>
                    </View>
                    <View style={{paddingHorizontal:20, paddingVertical:5}}>
                        <Text style={styles.text}>Kelompok Umur : {schedule.grade.name}</Text>
                    </View>
                    <View style={{paddingHorizontal:20, paddingVertical:5}}>
                        <Text style={styles.text}>Hari : {schedule.register}</Text>
                    </View>
                    <SubDay
                        bgcolor="#54B3B9"
                        titletime={ schedule.register}
                    />
                 </>
                }
            </ScrollView>
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
    text:{
        fontSize:16,
    }
})
  export default Detail