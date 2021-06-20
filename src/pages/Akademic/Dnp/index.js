import Config from 'react-native-config';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Button, Dropdown, Footer, Header2, Search, Spinner, Title } from '../../../component';
import API from '../../../service';
import { colors } from '../../../utils/colors';
import Distance from '../../../utils/distance';

const Dnp = ({ navigation }) => {

  const TOKEN = useSelector((state) => state.TokenReducer);
  const [students, setStudents] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [filterStudent, setFilterStudent] = useState({
    grade: {
      id: null,
      name: 'Pilih Semua'
    },
    name: ''
  })
  const [grade, setGrade] = useState(null)
  const [team, setTeam] = useState(null)

  useEffect(() => {
    let run = true
    if (run) {
      Promise.all([API.student({ grade: filterStudent.grade.id }, TOKEN), API.grades(TOKEN), API.teams(TOKEN)]).then((result) => {
        // data grade
        let dataGrade = [
          {
            id: null,
            name: 'Pilih Semua'
          }
        ]
        result[1].data.map((item, index) => {
          dataGrade[dataGrade.length] = {
            id: item.id,
            name: item.name
          }
        })
        // data team
        let dataTeam = [
          {
            id: null,
            name: 'Pilih Semua'
          }
        ]
        result[2].data.map((item, index) => {
          dataTeam[dataTeam.length] = {
            id: item.id,
            name: item.name
          }
        })

        // insert data
        setStudents(result[0].data)
        setGrade(dataGrade)
        setTeam(dataTeam)
        setLoading(false)
      }).catch((e) => {
        let mes = JSON.parse(e.request._response)
        alert(mes.message)
        setLoading(false)
      })
    }
    return () => {
      run = false;
    }
  }, [])

  const handleFilter = () => {
    setLoading(true)
    API.student({ grade: filterStudent.grade.id, team: filterStudent.team.id }, TOKEN).then((result) => {
      setStudents(result.data)
      setLoading(false)
    })
  }

  return (
    <View style={styles.container}>
      {!loading ? null :
        <Spinner />
      }
      <View style={styles.section}>
        <Header2 />
        <Title title="SISWA" />
        <ScrollView keyboardShouldPersistTaps='always'>
        <View style={{ paddingHorizontal: 20 }}>
          <Dropdown
            selectedItem={filterStudent.grade}
            onItemSelect={(value) => setFilterStudent({ ...filterStudent, grade: value })}
            data={grade}
            placeholder="<--Pilih Kelompok Umur-->"
          />
          <Distance distance={5} />
          <Dropdown
            selectedItem={filterStudent.team}
            onItemSelect={(value) => setFilterStudent({ ...filterStudent, team: value })}
            data={team}
            placeholder="<--Pilih Team-->"
          />
          <Distance distance={5} />
          <Search
            onChangeText={(value) => setFilterStudent({ ...filterStudent, name: value })}
          />
          <Distance distance={5} />
          <Button title="Filter" onPress={handleFilter} />
          <Distance distance={5} />
        </View>
        
          {students.map((student) => {
            let student_photo = student.photo;
            if(student_photo == null || student_photo ==""){
              student_photo  = 'avatar.png';
            }
            return (
              <View style={{ alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'column', backgroundColor: '#FFFFFF', width: '90%', height: 440 }}>
                  <View style={{ flex: 1.2 }}>
                    <View style={{ flexDirection: 'row', height: 300 }}>
                      <View style={{ flex: 1.2 }}>
                        <View style={{ alignItems: 'center', padding: 10 }}>
                          <Image source={{ uri: `${Config.REACT_BASE_URL}/images/${student_photo}` }} style={{ width: 169, height: 215 }} />
                        </View>
                      </View>
                      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 }}>
                        <Text style={styles.textTitle}>NISN</Text>
                        <Text style={styles.textdata}>{student.nisn}</Text>
                        <Distance distance={10} />
                        <Text style={styles.textTitle}>Nomor Punggung</Text>
                        <Text style={styles.textdata}>{student.jerseynumber}</Text>
                        <Distance distance={10} />
                        <Text style={styles.textTitle}>Posisi</Text>
                        <Text style={styles.textdata}>{student.position}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
                      <Image source={require('../../../assets/img/dnp.png')} style={{ width: 78, height: 78 }} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                      <Text style={styles.textTitle}>Nama Lengkap</Text>
                      <Text style={styles.textdata}>{student.name}</Text>
                      <Distance distance={5} />
                      <Text style={styles.textTitle}>Alamat</Text>
                      <Text style={styles.textdata}>{student.address}</Text>
                      <Distance distance={5} />
                      <Text style={styles.textTitle}>Tempat, Tanggal Lahir</Text>
                      <Text style={styles.textdata}>{student.place}, {student.date}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <Footer
        navigation={navigation}
        focus='Master'
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
  section: {
    // width:'90%',
    flex: 1,
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
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#696969',
  },
  textdata: {
    fontSize: 14,
    color: '#696969',
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 40 },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
});

export default Dnp