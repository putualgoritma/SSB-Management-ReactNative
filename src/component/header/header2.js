import React from 'react';
import { Dimensions } from 'react-native'
import {
    Image,
} from 'react-native'
const { width, height} = Dimensions.get('screen');
const header2=()=>{
    return(
        <Image source={require('../../assets/img/ssbheader.png')} style={{width:width/100*100,height:height/100*20}} />
    )
}
export default header2
