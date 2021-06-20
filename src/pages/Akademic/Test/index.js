import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Footer,Header2,Title,Tabel,Search,Button,Dropdown,Datepicker} from '../../../component';
  const Test =({navigation})=>{
    return(
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps = 'always'>
          <Header2/>
          <Title
            title="Ujian"
          />
          <View style={{alignItems:'center'}}>
              <View style={styles.section}>
                  <Datepicker/>
              </View>
          </View>
          <View style={{alignItems:'center'}}>
              <View style={styles.section}>
                  <Dropdown
                   data={[{id:1,name:'U8'},
                          {id:2,name:'U10'},
                          {id:3,name:'U12'},
                          {id:4,name:'U14'}
                        ]}
                   placeholder="<--Pilih Kelompok Umur-->"
                  />
              </View>
          </View>
          <View style={{alignItems:'center'}}>
              <View style={styles.section}>
                  <Dropdown
                   data={[{id:1,name:'Senin'},
                          {id:2,name:'Selasa'},
                          {id:3,name:'Rabu'},
                          {id:4,name:'Kamis'},
                          {id:5,name:'Jumat'},
                          {id:6,name:'Sabtu'},
                          {id:7,name:'Minggu'}
                        ]}
                   placeholder="<--Pilih Hari-->"
                  />
              </View>
          </View>
          <View style={{alignItems:'center'}}>
              <View style={styles.section}>
                  <Dropdown
                   data={[{id:1,name:'Passing'},
                          {id:2,name:'Shooting'},
                          {id:3,name:'Dribling'},
                          {id:4,name:'Strategy'},
                          {id:5,name:'Team Work'},
                          {id:6,name:'Sprint'},
                        ]}
                   placeholder="<--Pilih Mata Pelajaran-->"
                  />
              </View>
          </View>
          <View style={{alignItems:'center'}}>
            <View style={styles.section}>
                  <Button
                    title="Filter"
                  />
              </View>
          </View>                  
          <Tabel
            tbhead={['No','Tanggal', 'Siswa', 'Aksi']}
            tbdata={[
                     ['1','2021-01-04', 'Reymond Listerling', ''],
                     ['2','2021-01-05', 'Albert Einstein', ''],
                     ['3','2021-01-06', 'Orochimaru', ''],
                     ['4','2021-01-07', 'X Drake', ''],
                     ['5','2021-01-08', 'Bartolomeo Kuma', ''],
                     ['6','2021-01-09', 'Aokiji', ''],
                     ['7','2021-01-11', 'Ivankov', '']
                     ]}
            cellindex={3}
            btn={
              <TouchableOpacity onPress={() =>{(navigation.navigate('DetailTest'));}}>
              <View style={styles.btn}>
              <Text style={styles.btnText}>Detail</Text>
              </View>
            </TouchableOpacity>
            }
          />
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
    section:{
      flexDirection:'row',  
      width:'90%',
      flex:1,
      paddingVertical:5,
      marginTop:5
    },
    btn: { 
      width: 58, 
      height: 18, 
      backgroundColor: '#78B7BB',  
      borderRadius: 2 
    },
    btnText: { 
      textAlign: 'center', 
      color: '#fff' 
    }    
  });

  export default Test