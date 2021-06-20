import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
class subday extends Component {
constructor(props) {
    super(props);
    this.state = {
    tableHead: ['Mata Pelajaran','Pengajar'],
    tableData: [
        ['Bahasa Indonesia','Surya Dwipayana S.pd'],
    ]
    }
}
render() {
    const state = this.state;
    const element = (data, index) => (
    <View></View>
    );
    return (
    <View style={styles.section}>
            <View style={{alignItems:'center', marginTop:10}}>
                <View style={{backgroundColor:this.props.bgcolor, width:205, height:45,borderRadius:15, bottom:-10 }}>
                    <View style={{flexDirection:'row', justifyContent:'center'}} >
                        <View style={{padding:5}}>
                            <FontAwesomeIcon icon={faClock} style={{color:'#FFFFFF'}}size={ 22 }/>
                        </View>
                            <Text style={styles.titleTime}>{this.props.titletime}</Text>
                    </View>
                </View>
            </View>
        <View style={styles.containertable}>
            <Table borderStyle={{borderWidth: 2,borderColor: '#E5E7E9'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                {
                state.tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                    {
                        rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                        ))
                    }
                    </TableWrapper>
                ))
                }
            </Table>
        </View>
    </View>
    )
}
}
const styles = StyleSheet.create({
section:{
    flex:1
},
containertable: { 
    flex: 1, 
    paddingHorizontal:15,
    backgroundColor: '#E5E7E9',
    top:0, 
},
head: { 
    height: 50,  
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor: '#ffffff',
},
text: { 
    margin: 7
},
row: { 
    flexDirection: 'row', 
    backgroundColor: '#ffffff',
},
titleTime:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    padding:5
},
});
export default subday