import React from 'react'
import { View, Text } from 'react-native'

const Distance = (props) => {
    return (
        <View style={{marginVertical : props.distance, marginHorizontal: props.distanceH }} />
    )
}

export default Distance
