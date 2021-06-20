import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button,Header,Input,TextInput,Link,Title} from '../../component';
const Register = ({navigation}) => {
  return (
      <ScrollView style={styles.container}>
        <Header/>
        <View style={styles.section}>
            <Title
              title="Register"
            />
            <TextInput 
              title="Nama"
            />
            <Input 
              placeholder="Masukan Nama"
            />
            <TextInput 
              title="Email"
            />
            <Input 
              placeholder="Masukan Email"
            />
            <TextInput 
              title="Password"
            />
            <Input 
              placeholder="Masukan Password"
            />
            <TextInput 
              title="Re-Password"
            />
            <Input 
              placeholder="Ulangi Masukan Password"
            />
            <Button
              paddingTop={30}
              title="Register"
              navigation={() => navigation.navigate('Login')}
            />
        </View>
        </ScrollView>
    )
  };
  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#E5E7E9'
    },
    section:{
      alignItems:'center'
    }
  });
  export default Register;