import React, { useDebugValue, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Footer, Header2, Title, Button, InputRead, TextInput, Dropdown, Input, Spinner } from '../../../component';
import Distance from '../../../utils/distance';
import API from '../../../service';
import { useSelector } from 'react-redux';
const Bayar = ({ navigation, route }) => {
  const data = route.params;
  const TOKEN = useSelector((state) => state.TokenReducer);
  const [loading, setLoading] = useState(true);
  const [student_id_hidden, setStudent_id_hidden] = useState(null)
  const [register, setRegister] = useState(null)
  const [schedule_subject_id_hidden, setSchedule_subject_id_hidden] = useState(null)
  const [bill, setBill] = useState({ name: 'Belum Bayar', value: 'unpaid' })
  const [amount, setAmount] = useState(null)
  const [student, setStudent] = useState(null)
  useEffect(() => {
    let run = true
    if (run) {
      //let linko = data.student_id + '/' + data.tanggal + '/' + data.schedule_subject_id_hidden;
      API.bill({
        studentId: data.student_id,
        registrasi: data.tanggal,
        schedulesSubjectId: data.schedule_subject_id_hidden
      }, TOKEN).then((result) => {
        console.log('data', result.data);
        setStudent(result.data)
        setStudent_id_hidden(result.data.student_id)
        setSchedule_subject_id_hidden(result.data.schedule_subject_id)
        // setPresence(result.data)
        setRegister(data.tanggal)
        setLoading(false)
      }).catch((e) => {
        console.log(e.request);
        setLoading(false)
      })
    }
    return () => {
      run = false
    }
  }, [])

  const handleBayar = () => {
    let form = {
      student_id_hidden: student_id_hidden,
      register: register,
      schedule_subject_id_hidden: schedule_subject_id_hidden,
      bill: bill.value,
      amount: amount
    }
    console.log(form);
    if (form.schedule_subject_id_hidden !== null && form.register !== null && form.student_id_hidden !== null && form.bill !== null && form.amount !== null) {
      if (amount > 0 && bill.value !== 'unpaid') {
        setLoading(true)
        API.billProcess(form, TOKEN).then((result) => {
          alert('Sukses Pembayaran')
          let item = {
            schedule_subject_id: schedule_subject_id_hidden,
            grade_id: result.data.grade_id
          };
          navigation.navigate('Absensi', { item: item })
          //navigation.navigate('Absent')
          setLoading(false)
        }).catch((e) => {
          console.log('sukses', result);
          console.log(e.request);
        })
      } else {
        alert('Mohon ubah status pembayaran')
      }
    } else {
      let alert_test = " " + form.schedule_subject_id_hidden + "-" + form.register + "-" + form.student_id_hidden + "-" + form.bill + "-" + form.amount;
      alert('Mohon lengkapi data anda' + alert_test)
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
          title="Tambah Iuran"
        />
        <View style={{ alignItems: 'center' }}>
          <Dropdown
            data={[
              { name: 'Sudah Bayar', value: 'paid' },
              { name: 'Belum Bayar', value: 'unpaid' },
            ]}
            placeholder={student && (student.bill === 'unpaid' ? 'Belum Bayar' : 'Sudah Bayar')}
            onItemSelect={(value) => setBill(value)}
            selectedItem={bill}
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
              value="Passing"
            />
            <TextInput
              title="Siswa"
            />
            <InputRead
              value="ALOYSIUS PATRICK OGUR"
            />
            {/* <TextInput
                title="Iuran"
              /> */}
            <TextInput
              title="Jumlah Iuran"
            />
            <Input
              keyboardType={'numeric'}
              changeText={(value) => setAmount(value)}
            />
            <Distance distance={5} />
            <Button
              title="Simpan"
              paddingTop={30}
              paddingBottom={20}
              onPress={handleBayar}
            />
            <Distance distance={5} />
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

export default Bayar;