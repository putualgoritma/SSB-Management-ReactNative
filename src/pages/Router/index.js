import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Master from '../Master';
import Student from '../Master/Student';
import DetailStudent from '../Master/Student/Detail';
import Teacher from '../Master/Teacher';
import DetailTeacher from '../Master/Teacher/Detail';
import Grade from '../Master/Grade';
import DetailGrade from '../Master/Grade/Detail';
import Semester from '../Master/Semester';
import DetailSemester from '../Master/Semester/Detail';
import Periode from '../Master/Periode';
import DetailPeriode from '../Master/Periode/Detail';
import Team from '../Master/Team';
import DetailTeam from '../Master/Team/Detail';
import Subject from '../Master/Subject';
import DetailSubject from '../Master/Subject/Detail';
import Akademic from '../Akademic';
import Schedule from '../Akademic/Schedule';
import DetailSchedule from '../Akademic/Schedule/Detail';
import Test from '../Akademic/Test';
import Dnp from '../Akademic/Dnp';
import DetailTest from '../Akademic/Test/Detail';
import Absent from '../Akademic/Absent';
import Absensi from '../Akademic/Absent/Absensi';
import Absen from '../Akademic/Absent/Absent';
import Bayar from '../Akademic/Absent/Bayar';
import Bill from '../Akademic/Bill';
import DetailBill from '../Akademic/Bill/Edit';
import Profile from '../Profile';
const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Master" 
                component={Master} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Student" 
                component={Student} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailStudent" 
                component={DetailStudent} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Teacher" 
                component={Teacher} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailTeacher" 
                component={DetailTeacher} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Grade" 
                component={Grade} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailGrade" 
                component={DetailGrade} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Semester" 
                component={Semester} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailSemester" 
                component={DetailSemester} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Periode" 
                component={Periode} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailPeriode" 
                component={DetailPeriode} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Team" 
                component={Team} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailTeam" 
                component={DetailTeam} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Subject" 
                component={Subject} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailSubject" 
                component={DetailSubject} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Akademic" 
                component={Akademic} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Schedule" 
                component={Schedule} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailSchedule" 
                component={DetailSchedule} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Test" 
                component={Test} 
                options={{headerShown:false}}/>
            <Stack.Screen
                name="Dnp"
                component={Dnp}
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailTest" 
                component={DetailTest} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Absent" 
                component={Absent} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Absensi" 
                component={Absensi} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Absen" 
                component={Absen} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Bayar" 
                component={Bayar} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Bill" 
                component={Bill} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailBill" 
                component={DetailBill} 
                options={{headerShown:false}}/>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}


export default Router