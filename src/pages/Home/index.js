import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Footer,Header2,Title} from '../../component';
import IconKehadiran from '../../assets/icon/IconKehadiran.svg';
import IconSPP from '../../assets/icon/IconSPP.svg'
import IconUjian from '../../assets/icon/IconUjian.svg'
import IconJadwal from'../../assets/icon/IconJadwal.svg'
import IconDNP from '../../assets/icon/IconDNP.svg'
import IconTahun from '../../assets/icon/IconTahun.svg'
import IconRaport from '../../assets/icon/IconRaport.svg'
import IconMaster from '../../assets/icon/IconMaster.svg'
const Home = ({navigation}) => {
    return (
    <View style={styles.container}> 
        <ScrollView>
          <Header2/>      
          <View style={styles.section}>
             <Image source={require('../../assets/img/Control.png')} style={{width:160, height:192}} />
              <Title
                  title="Dashboard"
                />
                <View style={{alignItems:'center',paddingTop:35}}>
                  <View style={{flexDirection:'row', height:70}}>
                      <TouchableOpacity style={styles.icon} onPress={() =>navigation.navigate('AbsentGrade')}>
                          <IconKehadiran width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon} onPress={() =>navigation.navigate('Bill')} >
                          <IconSPP width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon} onPress={() =>navigation.navigate('Test')}>
                          <IconUjian width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon} onPress={() =>navigation.navigate('Schedule')}>
                          <IconJadwal width={55} height={70}/>
                      </TouchableOpacity>
                  </View>
                </View>
                <View style={{alignItems:'center',paddingTop:25}}>
                  <View style={{flexDirection:'row', height:70}}>
                      <TouchableOpacity style={styles.icon}onPress={() =>navigation.navigate('Dnp')}>
                          <IconDNP width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}onPress={() =>navigation.navigate('Periode')}>
                          <IconTahun width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}onPress={() =>navigation.navigate('Home')}>
                          <IconRaport width={55} height={70}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}onPress={() =>navigation.navigate('Master')}>
                          <IconMaster width={55} height={70}/>
                      </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.text}>SSB Putra Debes App</Text>
                <View style={{alignItems:'center',paddingBottom:25}}></View>
          </View>
        </ScrollView> 
        <Footer
        navigation = {navigation}
        focus = 'Home'
        />
    </View>
    )
};
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#E5E7E9'
    },
    section:{
      flex:1,
      alignItems:'center'
    },
    text:{
      paddingTop:30,
      paddingHorizontal:30, 
      fontSize:16, 
      color:'#696969',
      textAlign:'center',
      fontWeight: "bold"
    },
    icon:{
      flex:1,
      alignItems:'center'
    }
});
export default Home;