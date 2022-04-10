import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

function CsDataStore({ navigation, route }) {

  const [color, setColor]=useState()
  const Changecolor=(index)=>{

    color===index?setColor():setColor(index)
  }

  const [savedValue, setSavedValue] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('SavedData').then((res) => {
      if (res != null) {
        setSavedValue(JSON.parse(res))
      }
    })
  }, [])

  return (
    <FlatList
      data={[...savedValue]}
      style={{ height: 300, width: 300 }}
      renderItem={({ item,index }) => (

        <View style={[styles.screen,{  backgroundColor: color && color===index ? 'orange' : 'yellow'}]}>
          <TouchableOpacity onPress={()=>Changecolor(index)}>
            <Text style={{ alignSelf: 'center', justifyContent: 'center' }}>{item.name}</Text>
            <Text style={{ alignSelf: 'center' }}>{item.age}</Text>
          </TouchableOpacity>
        </View>

      )}
    />
  );
}
export default CsDataStore;

const styles = StyleSheet.create({
  screen: {
    width: '70%',
    height: 50,
    marginTop: 10,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 90,
  }
});