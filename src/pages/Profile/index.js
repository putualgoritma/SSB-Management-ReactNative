import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import {Footer,Button,Header,Input,TextInput} from '../../component';
const profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <View style={styles.bgheader}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <Header/>
                            </View>
                            <View style={{flex:1.5, alignItems:'center'}}>
                                <View style={{top:15,left:80}}>
                                    <FontAwesomeIcon icon={faSignOutAlt} style={{color:'#ffffff'}}size={35}/>
                                    <Text style={styles.textLogout}>Logout</Text>
                                </View>
                                <FontAwesomeIcon icon={faUser} style={{color:'#ffffff',top:25}}size={100}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',paddingTop:38}}>
                            <View style={styles.bgname}>
                                <View style={{alignItems:'center',padding:10}}>
                                    <Text style={styles.username}>Surya Dwipayana</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> 
                <View style={{alignItems:'center',paddingVertical:20}}>  
                    <View style={{backgroundColor:'#E5E7E9',width:'90%', height:540,borderRadius:40}}>
                        <View style={styles.section}>
                            <TextInput 
                            title="Email"
                            />
                            <Input
                             placeholder="Email"
                             value="suryadwipayana@gmail.com"
                            />
                            <TextInput 
                            title="Password"
                            />
                            <Input
                             placeholder="Masukan Password"
                             value="******"
                            />
                            <TextInput 
                            title="Confirm Password"
                            />
                            <Input
                             placeholder="Confirm Password"
                             value="******"
                            />
                            <TextInput 
                            title="Alamat"
                            />
                            <Input
                             placeholder="Alamat"
                             value="Jalan Ngurah Rai"
                            />
                             <TextInput 
                            title="Handphone"
                            />
                            <Input
                             placeholder="Handphone"
                             value="0852371238"
                            />
                            <Button
                            paddingTop={30}
                            title="Update"
                            navigation={() => navigation.navigate('Profile')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer
                navigation={navigation}
                focus='Profile'
            />
        </View>
    )
  };
  const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
  },
  section:{
      alignItems:'center'
  },
  bgheader:{
    backgroundColor:'#163F5F', 
    width:'100%',
    height:250, 
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  },
  bgname:{
    backgroundColor:'#ffffff', 
    height:50, 
    width:'70%', 
    borderTopLeftRadius:50,
    borderBottomRightRadius:50, 
  },
  username:{
    fontWeight:'bold',
    fontSize:16
  },
  textLogout:{
    fontWeight:'bold',
    fontSize:16,
    color:'#ffffff'
  }
});
  export default profile;