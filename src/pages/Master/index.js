import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Footer,Header2,Title,Menu} from '../../component';
import { faFutbol, faUser } from '@fortawesome/free-solid-svg-icons';
const Master =({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView>
                    <Header2/>
                <View style={styles.section}>
                    <Title
                        title="Master"
                    />
                    <Menu
                        bgcolor="#54B3B9"
                        icon={faUser}
                        coloricon="#54B3B9" 
                        title="Siswa"
                        navigation={()=>navigation.navigate('Student')}
                    />
                    <Menu
                        bgcolor="#163F5F"
                        icon={faUser}
                        coloricon="#163F5F"
                        title="Guru"
                        navigation={()=>navigation.navigate('Teacher')}
                    />
                    <Menu
                        bgcolor="#1774BC"
                        icon={faFutbol}
                        coloricon="#1774BC"
                        title="Kelompok Umur"
                        navigation={()=>navigation.navigate('Grade')}
                    />
                    <Menu
                        bgcolor="#54B3B9"
                        icon={faFutbol}
                        coloricon="#54B3B9"
                        title="Semester"
                        navigation={()=>navigation.navigate('Semester')}
                    />
                    <Menu
                        bgcolor="#163F5F"
                        icon={faFutbol}
                        coloricon="#163F5F"
                        title="Periode"
                        navigation={()=>navigation.navigate('Periode')}
                    />
                    <Menu
                        bgcolor="#1774BC"
                        icon={faFutbol}
                        coloricon="#1774BC"
                        title="Tim"
                        navigation={()=>navigation.navigate('Team')}
                    />
                    <Menu
                        bgcolor="#54B3B9"
                        icon={faFutbol}
                        coloricon="#54B3B9"
                        title="Mata Pelajaran"
                        navigation={()=>navigation.navigate('Subject')}
                    />
                </View>
            </ScrollView>
            <Footer 
                navigation = {navigation}
                focus='Master'
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
export default Master;