import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomLineView = (props) => {
    return (
        <View style={[{ height: 50, width: 200, marginVertical:10, backgroundColor: props.color }]}>
            <TouchableOpacity onPress={() => { props.onClick() }}>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default CustomLineView;