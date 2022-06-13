import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import Distance from '../../../utils/distance';
import { Footer, Header2, Title, TextInput, Area, Button, Dropdown, Datepicker } from '../../../component'
import API from '../../../service';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const SessionForm = ({ navigation, route }) => {
    const route_params = route.params
    const [teachers, setTeachers] = useState([{}]);
    const [selectTeachers, setSelectTeachers] = useState('')
    const [selectTeachers2, setSelectTeachers2] = useState('')
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [loading, setLoading] = useState(true);
    const isFocused = useIsFocused()

    useEffect(() => {
        let run = true
        let dataApi = {
            //grade_periode_id: grade_periode_id,
        }
        // let datajson = JSON.stringify(dataApi)
        // alert(datajson)
        if (run) {
            API.teacher(TOKEN).then((result) => {
                //console.log(result);
                let data = []
                result.data.map((item, index) => {
                    data[index] = {
                        id: item.id,
                        name: item.name
                    }
                })

                // insert data
                console.log(data);
                setTeachers(data)
                setLoading(false)
            }).catch((e) => {
                // let mes = JSON.parse(e.request._response)
                // alert(mes.message )
                console.log('error api : ', e);
                setLoading(false)
            })
        }
        return () => {
            run = false;
        }
    }, [isFocused])

    const handleSubmit = () => {
        setLoading(true)
        let form = {
            status: status !== '' ? status.value : '',
            grade: selectGrade !== '' ? selectGrade.id : '',
            periods: convert(date)
        }
        API.spp(form, TOKEN).then((result) => {
            setLoading(false)
        }).catch((e) => {
            console.log(e);
            setLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='always'>
                <Header2 />
                <Title title="Session Form" />
                <View style={{ alignItems: 'center' }}>
                    <TextInput title="Register" />
                    <Datepicker />
                    <TextInput title="Pengajar 1" />
                    <Dropdown
                        data={teachers}
                        placeholder="<--Pilih Pelatih-->"
                        onItemSelect={(value) => setSelectTeachers(value)}
                        selectedItem={selectTeachers}
                    />
                    <TextInput title="Pengajar 2" />
                    <Dropdown
                        data={teachers}
                        placeholder="<--Pilih Pelatih-->"
                        onItemSelect={(value) => setSelectTeachers2(value)}
                        selectedItem={selectTeachers2}
                    />
                    <TextInput title="Keterangan" />
                    <Area
                        onChangeText={(value) => setSelectDescription(value)}
                    />
                    <Distance distance={10} />
                    <Button title="Buka Sesi" onPress={handleSubmit} />
                    <Distance distance={10} />
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Akademic" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7E9'
    },
})
export default SessionForm