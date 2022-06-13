import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
// import Put from './Put';
// import Delete from './Delete';
// GET
// const student = (token) => Get(Config.REACT_STUDENT, false, token);
const grades = (token) => Get(Config.REACT_GRADES, false, token);
const teacher = (token) => Get(Config.REACT_TEACHER, false, token);
const semester = (token) => Get(Config.REACT_SEMESTERS, false, token);
const periods = (token) => Get(Config.REACT_PERIODS, false, token);
const teams = (token) => Get(Config.REACT_TEAMS, false, token);
const subject = (token) => Get(Config.REACT_SUBJECT, false, token);
const presence = (data, token) => Get(`${Config.REACT_PRESENCE}${data.studentId}/${data.registrasi}/${data.schedulesSubjectId}`, false, token);
const bill = (data,token) => Get(`${Config.REACT_PRESENCE}${data.studentId}/${data.registrasi}/${data.schedulesSubjectId}`, false, token);
const schedulesList = (data,token) => Get(`${Config.REACT_SCHEDULES_LIST}${data}`, false, token);
const absentGrades = (token) => Get(Config.REACT_ABSENT_GRADES, false, token);
//POST
const login = (data) => Post(Config.REACT_LOGIN, false, data);
const student = (data, token) => Post(Config.REACT_STUDENT, false, data, token);
const schedules = (data, token) => Post(Config.REACT_SCHEDULES, false,data, token);
const absenlist = (data, token) => Post(`${Config.REACT_ABSENTS}${data.subject}/${data.grade}`, false,data.form, token);
const presenceProcess = (data, token) => Post(Config.REACT_PRESENCE_LIST, false,data, token);
const billProcess = (data, token) => Post(Config.REACT_BILL_PROCESS, false,data, token);
const spp = (data, token) => Post(Config.REACT_SPP, false,data, token);
const sppProcess = (data, token) => Post(Config.REACT_PAID_PROCESS, false, data, token);
const absentSchedules = (data, token) => Post(Config.REACT_ABSENT_SCHEDULES, false, data, token);
// PUT

const API = {
      login,
      student,
      grades,
      teacher,
      semester,
      periods,
      schedules,
      teams,
      subject,
      absenlist,
      presence,
      presenceProcess,
      bill,
      billProcess,
      spp,
      sppProcess,
      schedulesList,
      absentGrades,
      absentSchedules,
}

export default API;