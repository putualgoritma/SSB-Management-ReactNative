import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Master from '../Master';
import Student from '../Master/Student';
import AddStudent from '../Master/Student/Add'
import EditStudent from '../Master/Student/Edit'
import DetailStudent from '../Master/Student/Detail';
import Teacher from '../Master/Teacher';
import AddTeacher from '../Master/Teacher/Add';
import EditTeacher from '../Master/Teacher/Edit';
import DetailTeacher from '../Master/Teacher/Detail';
import Grade from '../Master/Grade';
import AddGrade from '../Master/Grade/Add';
import EditGrade from '../Master/Grade/Edit';
import DetailGrade from '../Master/Grade/Detail';
import Semester from '../Master/Semester';
import AddSemester from '../Master/Semester/Add';
import EditSemester from '../Master/Semester/Edit';
import DetailSemester from '../Master/Semester/Detail';
import Periode from '../Master/Periode';
import AddPeriode from '../Master/Periode/Add';
import EditPeriode from '../Master/Periode/Edit'
import DetailPeriode from '../Master/Periode/Detail';
import Team from '../Master/Team';
import AddTeam from '../Master/Team/Add';
import EditTeam from '../Master/Team/Edit';
import DetailTeam from '../Master/Team/Detail';
import Subject from '../Master/Subject';
import AddSubject from '../Master/Subject/Add';
import EditSubject from '../Master/Subject/Edit';
import DetailSubject from '../Master/Subject/Detail';
import Akademic from '../Akademic';
import Schedule from '../Akademic/Schedule';
import ScheduleGrade from '../Akademic/Schedule/Schedule-Grade';
import ScheduleList from '../Akademic/Schedule/Schedule-List';
import AddSchedule from '../Akademic/Schedule/Add';
import DetailSchedule from '../Akademic/Schedule/Detail';
import Test from '../Akademic/Test';
import Dnp from '../Akademic/Dnp';
import DetailTest from '../Akademic/Test/Detail';
import Absent from '../Akademic/Absent';
import AbsentGrade from '../Akademic/Absent/Absent-Grade'
import AbsentSchedule from '../Akademic/Absent/Absent-Schedule'
import AbsentList from'../Akademic/Absent/Absen-List'
import SessionForm from '../Akademic/Absent/Session-Form'
import Absensi from '../Akademic/Absent/Absensi';
import Absen from '../Akademic/Absent/Absent';
import Bayar from '../Akademic/Absent/Bayar';
import Bill from '../Akademic/Bill';
import DetailBill from '../Akademic/Bill/Edit';
import Profile from '../Profile';
import TestDate from '../Akademic/Schedule/TestDate';
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
                name="AddStudent" 
                component={AddStudent} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="EditStudent" 
                component={EditStudent} 
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
                name="AddTeacher" 
                component={AddTeacher} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="EditTeacher" 
                component={EditTeacher} 
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
                name="AddGrade"
                component={AddGrade}
                options={{headerShown:false}}/>
            <Stack.Screen
                name="EditGrade"
                component={EditGrade}
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
                name="AddSemester"
                component={AddSemester}
                options={{headerShown:false}}/>
            <Stack.Screen
                name="EditSemester"
                component={EditSemester}
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
                name="AddPeriode" 
                component={AddPeriode} 
                options={{headerShown:false}}/>
            <Stack.Screen
                name="EditPeriode"
                component={EditPeriode}
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="Team" 
                component={Team} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="AddTeam" 
                component={AddTeam} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="EditTeam" 
                component={EditTeam} 
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
                name="AddSubject" 
                component={AddSubject} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="EditSubject" 
                component={EditSubject} 
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
                name="ScheduleGrade"
                component={ScheduleGrade}
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="DetailSchedule" 
                component={DetailSchedule} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="ScheduleList" 
                component={ScheduleList} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="AddSchedule" 
                component={AddSchedule} 
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
                name="AbsentGrade"
                component={AbsentGrade}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="AbsentSchedule"
                component={AbsentSchedule}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="SessionForm"
                component={SessionForm}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="AbsentList"
                component={AbsentList}
                options={{headerShown:false}}
            />
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
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="TestDate" 
                component={TestDate} 
                options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


export default Router