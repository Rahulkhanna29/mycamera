import React from "react";
import { Text } from "react-native";


const CustomRenderView = ({ item }) => {
    return (
        <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
    )
}


export default CustomRenderView;