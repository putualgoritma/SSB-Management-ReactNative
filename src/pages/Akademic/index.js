import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Footer,Header2,Title,Menu} from '../../component';
import { faAddressBook,faBookOpen,faCalendarAlt, faMoneyBillWaveAlt, faUser } from '@fortawesome/free-solid-svg-icons';
const Akademic=({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView>
                    <Header2/>
                <View style={styles.section}>
                    <Title
                        title="Pelajaran"
                    />
                    <Menu
                        bgcolor="red"
                        icon={faAddressBook}
                        coloricon="red"
                        title="New Absen"
                        navigation={()=>navigation.navigate('AbsentGrade')}
                    />
                     <Menu
                        bgcolor="blue"
                        coloricon="blue"
                        icon={faCalendarAlt}
                        title="New Jadwal"
                        navigation={()=>navigation.navigate('ScheduleGrade')}
                    />
                    <Menu
                        bgcolor="#1774BC"
                        icon={faAddressBook}
                        coloricon="#1774BC"
                        title="Absen"
                        navigation={()=>navigation.navigate('Absent')}
                    />
                    <Menu
                        bgcolor="#54B3B9"
                        icon={faMoneyBillWaveAlt}
                        coloricon="#54B3B9"
                        title="SPP"
                        navigation={()=>navigation.navigate('Bill')}
                    />
                    <Menu
                        bgcolor="#163F5F"
                        icon={faBookOpen}
                        coloricon="#163F5F"
                        title="Ujian"
                        navigation={()=>navigation.navigate('Test')}
                    />
                    <Menu
                        bgcolor="#1774BC"
                        icon={faCalendarAlt}
                        coloricon="#1774BC" 
                        title="Jadwal"
                        navigation={()=>navigation.navigate('Schedule')}
                    />
                    <Menu
                        bgcolor="#54B3B9"
                        icon={faUser}
                        coloricon="#54B3B9" 
                        title="DNP"
                        navigation={()=>navigation.navigate('Dnp')}
                    />
               
                </View>
            </ScrollView>
            <Footer 
                navigation = {navigation}
                focus='Akademic'
            />
        </View>     
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E5E7E9',
    alignItems:'center'
  },
  section:{
      alignItems:'center'
  }
});
export default Akademic;