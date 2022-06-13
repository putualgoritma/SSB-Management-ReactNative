import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Footer, Header2, Title, Dropdown, Button, Spinner } from '../../../component'
import Distance from '../../../utils/distance';
import { faAddressBook, faClock, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import API from '../../../service';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const AbsentSchedule = ({ navigation, route }) => {
    const grade_periode_id = route.params.grade_periode_id
    const [absentschedule, setAbsentschedule] = useState([{}]);
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [loading, setLoading] = useState(true);
    const isFocused = useIsFocused()

    useEffect(() => {
        let run = true
        let dataApi = {
            grade_periode_id: grade_periode_id,
        }
        // let datajson = JSON.stringify(dataApi)
        // alert(datajson)
        if (run) {
            API.absentSchedules(dataApi, TOKEN).then((result) => {
                //console.log(result);
                let data = []
                // data gradeperiode
                result.data.map((item, index) => {
                    data[index] = {
                        id: item.id,
                        register: item.register,
                        subject: { name: item.subject.name },
                        teachers: item.teachers
                    }
                })

                // insert data
                //console.log('data', data);
                setAbsentschedule(data)
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

    return (
        <View style={styles.container}>
            {loading &&
                <Spinner />
            }
            <ScrollView style={{ flex: 1 }}>
                <Header2 />
                <Title title="Jadwal Absent" />
                <Distance distance={10} />
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '90%' }}>
                        <Dropdown
                            data={[{ id: 1, name: 'Pilih Hari' },
                            { id: 2, name: 'Senin' },
                            { id: 3, name: 'Selasa' },
                            { id: 4, name: 'Rabu' },
                            { id: 5, name: 'Kamis' },
                            { id: 6, name: 'Jumat' },
                            { id: 7, name: 'Sabtu' },
                            { id: 8, name: 'Minggu' },
                            ]}
                            placeholder="<--Pilih Hari-->"
                        />
                        <Distance distanceH={5} />
                        <Button title="Filter" width="18%" />
                    </View>
                    <Distance distance={20} />
                    <View style={{ alignItems: 'center' }}>
                        {/* start section */}
                        {absentschedule.map((item, index) => {
                            // alert(item.subject.name)

                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.boxTitle}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40 }}>
                                            <FontAwesomeIcon icon={faClock} style={{ color: '#FFFFFF' }} size={25} />
                                            <Distance distanceH={5} />
                                            <Text style={styles.textDay}>{item.register ? item.register : null}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.boxHeader}>
                                        <View style={styles.boxHeaderLeft}>
                                            <Text style={styles.textHeader}>Mata Pelajaran</Text>
                                        </View>
                                        <View style={styles.boxHeaderRight}>
                                            <Text style={styles.textHeader}>Pengajar</Text>
                                        </View>
                                    </View>
                                    <View style={styles.boxData}>
                                        <View style={styles.boxDataLeft}>
                                            <Text>{item.subject ? item.subject.name : null}</Text>
                                        </View>
                                        <View style={styles.boxDataRight}>
                                            {item.teachers && item.teachers.map((item2, index2) => {
                                                return (
                                                <Text>{item2.name ? item2.name : null}</Text>
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={styles.boxBtn}>
                                        <View style={styles.boxBtnLeft}>
                                            <TouchableOpacity style={{ height: 40, width: 120, backgroundColor: '#163F5F', borderRadius: 7 }} onPress={() => navigation.navigate('SessionForm', {schedule_id : item.id,grade_periode_id : grade_periode_id })}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                                                    <FontAwesomeIcon icon={faUserClock} style={{ color: '#FFFFFF' }} size={15} />
                                                    <Distance distanceH={3} />
                                                    <Text style={styles.textBtn}>Buka Sesi</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.boxBtnRight}>
                                            <TouchableOpacity style={{ height: 40, width: 120, backgroundColor: '#1774BC', borderRadius: 7 }} onPress={() => navigation.navigate('AbsentList')}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                                                    <FontAwesomeIcon icon={faAddressBook} style={{ color: '#FFFFFF' }} size={15} />
                                                    <Distance distanceH={3} />
                                                    <Text style={styles.textBtn}>Absen/Iuran</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Distance distance={15} />
                                </View>
                            )
                        })}
                    </View>
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
    boxTitle: {
        backgroundColor: '#54B3B9',
        width: 205,
        height: 40,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    boxHeader: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 60,
        flexDirection: 'row',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    boxHeaderLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxHeaderRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxData: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 70,
        flexDirection: 'row',
    },
    boxDataLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxDataRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxData: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 70,
        flexDirection: 'row',
    },
    boxDataLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxDataRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: '#E5E7E9'
    },
    boxBtn: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 60,
        flexDirection: 'row',
    },
    boxBtnLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderTopWidth: 2,
        borderColor: '#E5E7E9'
    },
    boxBtnRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 2,
        borderColor: '#E5E7E9'
    },
    textDay: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textHeader: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default AbsentSchedule