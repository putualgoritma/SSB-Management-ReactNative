import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import { useSelector } from 'react-redux';
import { Footer, Header2, Title, Button, InputRead, TextInput, Dropdown, Area, Spinner } from '../../../component';
import API from '../../../service';
import Distance from '../../../utils/distance';
const Absent = ({ navigation, route }) => {
  const data = route.params;
  const TOKEN = useSelector((state) => state.TokenReducer);
  const [presence, setPresence] = useState(null)
  const [loading, setLoading] = useState(true);
  const [student_id_hidden, setStudent_id_hidden] = useState(null)
  const [register, setRegister] = useState(null)
  const [schedule_subject_id_hidden, setSchedule_subject_id_hidden] = useState(null)
  const [description, setDescription] = useState(null)
  const [absen, setAbsen] = useState(null)
  useEffect(() => {
    let run = true
    if (run) {
      //console.log('params', data.schedule_subject_id_hidden);
      let linko = data.student_id + '/' + data.tanggal + '/' + data.schedule_subject_id_hidden;
      //alert(linko)
      API.presence({
        studentId: data.student_id,
        registrasi: data.tanggal,
        schedulesSubjectId: data.schedule_subject_id_hidden
      }, TOKEN).then((result) => {
        console.log(result.data);
        setStudent_id_hidden(result.data.student_id)
        setSchedule_subject_id_hidden(result.data.schedule_subject_id)
        setPresence(result.data)
        setRegister(data.tanggal)
        setLoading(false)
      }).catch((e) => {
        // console.log(e.request);
        let mess = JSON.parse(e.request._response);
        console.log(mess);
        setLoading(false)
      })
    }
    return () => {
      run = false
    }
  }, [])


  const handlePresence = () => {
    if (schedule_subject_id_hidden !== null && student_id_hidden !== null && description !== null && absen !== null && register !== null) {
      setLoading(true)
      //let alert_var=schedule_subject_id_hidden+" - "+student_id_hidden+" - "+description+" - "+absen.name+" - "+register
      //alert(alert_var);
      API.presenceProcess({
        schedule_subject_id_hidden: schedule_subject_id_hidden,
        student_id_hidden: student_id_hidden,
        description: description,
        presence: absen.name,
        register: register
      }, TOKEN).then((result) => {
        setLoading(false)
        alert('Update Absen Sukses')
        let item = {
          schedule_subject_id:schedule_subject_id_hidden,
          grade_id:result.data.grade_id
        };
        navigation.navigate('Absensi', {item : item})
        //navigation.navigate('Absent')
        console.log(result);
      }).catch((e) => {
        setLoading(false)
        console.log(e.request);
        // let mes = JSON.parse(e.request._response)
        // alert(mes.message)
      })
    } else {
      alert('mohon isi data dengan lengkap')
    }
  }

  return (
    <View style={styles.container}>
      {!loading ? null :
        <Spinner />
      }
      <View style={{ flex: 1 }}>
        <Header2 />
        <Title
          title="Tambah Absen"
        />
        <View style={{ alignItems: 'center' }}>
          <Dropdown
            data={[
              { name: 'masuk' },
              { name: 'ijin' },
              { name: 'sakit' },
              { name: 'alpha' }
            ]}
            placeholder="<--Pilih Kehadiran-->"
            onItemSelect={(value) => setAbsen(value)}
            // onItemSelect = {(value) => {handleForm('presence', value.name)}}
            selectedItem={absen}
          />
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              title="Tanggal"
            />
            <InputRead
              value={data.tanggal}
            />
            <TextInput
              title="Mata Pelajaran"
            />
            <InputRead
              value={presence && presence.schedulesubject.subjects.name}
            />
            <TextInput
              title="Siswa"
            />
            <InputRead
              value={presence && presence.student.name} />
            <TextInput
              title="Keterangan"
            />
            <Area
              onChangeText={(value) => setDescription(value)}

            />
            <Distance distance={10} />
            <Button
              title="Simpan"
              paddingTop={30}
              paddingBottom={20}
              onPress={handlePresence}
            />
            <Distance distance={10} />
          </View>
        </ScrollView>
      </View>
      <Footer navigation={navigation} focus='Akademic' />
    </View>
  )
};

const styles = StyleSheet.create({
  section: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
  textareaContainer: {
    height: 120,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FFFFFF',
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    color: '#333',
  },

});

export default Absent;