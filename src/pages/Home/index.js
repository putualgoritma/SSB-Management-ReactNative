import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Footer,Header2,Title} from '../../component';
const Home = ({navigation}) => {
    return (
    <View style={styles.container}> 
        <ScrollView>
          <Header2/>      
          <View style={styles.section}>
             <Image source={require('../../assets/img/Jagling.png')} style={{width:132, height:303}} />
              <Title
                  title="SSB"
                />
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit ipsum, tristique ut enim non, mollis consequat ex. Quisque et eros at dolor laoreet facilisis ac eget ipsum. 
              </Text>
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
      paddingHorizontal:30, 
      fontSize:16, 
      color:'#696969',
      textAlign:'justify'
    }
});
export default Home;