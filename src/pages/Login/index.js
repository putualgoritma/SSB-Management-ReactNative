import React, { useEffect, useState } from 'react';
import {Image, ScrollView, StyleSheet,Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Header2, Input, Link, Spinner, TextInput, Title } from '../../component';
import API from '../../service';
import Distance from '../../utils/distance';
import { SET_DATA_TOKEN, SET_DATA_USER } from '../../redux/action'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    email : null,
    password : null
  })
  useEffect(() => {
        let run = true
       if(run){
              Promise.all([getDataUser(), getDataToken()])
              .then(response => {
                    if(response[0] !== null && response !== response[1]){
                          dispatch(SET_DATA_USER(response[0]))
                          dispatch(SET_DATA_TOKEN(response[1]))
                          setTimeout(() => {
                              setLoading(false)
                                navigation.replace('Home')
                          }, 1000);
                    }else{
                          setTimeout(() => {
                                // navigation.replace('Login')
                                setLoading(false)
                          }, 1000);
                    }
              }).catch((e) => {
                    // setTimeout(() => {
                    //       navigation.replace('Login')
                    // }, 2000);
                    console.log('data local tidak dibaca');
                    setLoading(false)
              })
       }
        return () => {
              run= false
        }
  }, [])
  
  // handel form 
  const handleForm = (key, value) => {
    setForm ({
      ...form,
      [key] :value
    })
  }

  // handle login
  const handleLogin = () => {
    if(form.email !== null && form.password !== null){
      setLoading(true)
      API.login(form).then((result) => {
        dispatch(SET_DATA_USER(result.user))
        storeDataUser(result.user)
        dispatch(SET_DATA_TOKEN(result.token.token))
        storeDataToken(result.token.token)
        setLoading(false)
        alert('api sucesse');
        navigation.replace('Home')
      }).catch((e) => {
        // console.log(e.request._response);
        let mes = JSON.parse(e.request._response)
        alert(mes.message)
        setLoading(false)
      })
    }else{
      alert('mohon lengkapi data')
    }
    // dispatch(SET_DATA_USER('FAJAR ASASASAS'))
  }
  // store data user

const storeDataUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@LocalUser', jsonValue)
  } catch (e) {
    console.log('no save')
  }
}


// store data token
const storeDataToken = async (value) => {
    try {
      await AsyncStorage.setItem('@LocalToken', value)
    } catch (e) {
      console.log('TOken not Save ')
    }
}

const getDataUser = async () => {
  try {
  const jsonValue = await AsyncStorage.getItem('@LocalUser')
  return jsonValue != null ? JSON.parse(jsonValue) : null;
  // console.log('local user',jsonValue);
  } catch(e) {
  // error reading value
  }
}

const getDataToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@LocalToken')
    if(value !== null) {
        return value
    }
  } catch(e) {
    // error reading value
  }
}


  return (
      <View style={styles.container} >
        {!loading ? null : 
            <Spinner/>
        }
         <ScrollView>
          <Header2/>
          <View style={styles.section}>
            <Image source={require('../../assets/img/Salto.png')} style={{width:164, height:233}} />
            <Text style={{color:'#696969', fontSize:20}}>Selamat Datang di App</Text>
              <Title
                title="SSB"
              />
              <TextInput 
                title="Email"
              />
              <Input 
                placeholder="Masukan Email"
                changeText = {(value) => handleForm('email', value)}
              />
              <TextInput 
                title="Password"
              />
              <Input 
                placeholder="Masukan Password"
                changeText = {(value) => handleForm('password', value)}
              />
              <Distance distance = {8}  />
              <Button
                paddingTop={30}
                title="Login"
                onPress = {() => {handleLogin()}}
              />
              <Link
                title="Register"
                navigation={()=> navigation.navigate('Register')}
              />
          </View>
         </ScrollView>
      </View>
    )
  };

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#E5E7E9',
      flex : 1
    },
    section:{
      alignItems:'center'
    }
  });

  export default Login;