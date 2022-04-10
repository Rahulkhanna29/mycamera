import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MultiColorChange = () => {
    const array = [{ key: 'One', isSelected: "false" }, { key: 'Two', isSelected: "false" }, { key: 'Three', isSelected: "false" },
    { key: 'Four', isSelected: "false" }, { key: 'Five', isSelected: "false" }, { key: 'Six', isSelected: "false" },
    { key: 'Seven', isSelected: "false" }, { key: 'Eight', isSelected: "false" }, { key: 'Nine', isSelected: "false" },
    { key: 'Ten', isSelected: "false" }, { key: 'Eleven', isSelected: "false" }, { key: 'Twelve', isSelected: "false" },
    { key: 'Thirteen', isSelected: "false" }, { key: 'Fourteen', isSelected: "false" }]
    const [data, setData] = useState(array);

    const onSelectedItemsChange = (index) => {
        let arr = data;

        //1st Way
        arr[index].isSelected = !arr[index].isSelected
        setData([...arr])

        // 2nd way 
        // let item = arr[index];
        // item.isSelected = !item.isSelected;
        // arr[index] = item
        // setData([...arr])


    };


    return (
        <FlatList

            data={[...data]}
            renderItem={({ item, index }) => (
                <View style={styles.screen2}>
                    <TouchableOpacity
                        style={[styles.screen, {

                            backgroundColor: item.isSelected ? 'skyblue' : 'pink',
                        }
                        ]}
                        onPress={() => { onSelectedItemsChange(index) }}
                    >
                        <LinearGradient colors={['#43D4FF', '#38ABFD', '#f803fc']}  style={styles.gradient} >
                        <Text
                            style={{ fontSize: 20, marginLeft: 20, color: 'black' }}>
                            {item.key}
                        </Text>
                        </LinearGradient>


                    </TouchableOpacity>
                </View>
            )}
        />


    );
}
const styles = StyleSheet.create({
    screen: {
        // alignSelf: 'center',
        // padding: 10,
        // width: '100%',
        // marginTop: 20,
        // alignItems: 'center'

        width: '80%',
        height: 50,
        borderWidth: 2,
        shadowColor: 'blue',
        shadowOpacity: 5.3,
        elevation: 20,
        borderColor: 'white',
        borderRadius: 40,
        alignItems:'center',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        // paddingLeft: 120
    },
    screen2: {
        width: '100%',

        height: '7%'
    },
    gradient: {
       justifyContent:'center',
      
        width: '100%',
        height: 50,
        alignItems:'center',
        borderRadius: 5
      },
})

export default MultiColorChange;