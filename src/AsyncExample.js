import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View , Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

export default function AsyncExample(){
    const [name,setName]=useState('')
    const [savedValue,setSavedValue]=useState('')
    const [array,setArray]=useState([])
     
    const storeData=()=>{
    AsyncStorage.setItem('user',name)
    AsyncStorage.getItem("user")
    .then((value) => {
setSavedValue(value)

    })
}

const getData = () => {
if(name){
    let arr= array;
    arr.push({name:name})
setArray(arr);
setName('')
}
  
}

const clear = () => {
    AsyncStorage.removeItem('user');
    setName('')
}

return(
  <View style={{width:'100%', height:'100%'}}>
    <View>
 <Text style={{width:100, height:50,marginTop:30, color:'black',alignSelf:'center', fontSize:30}}>ToDo</Text>
 
     <TextInput value={name}
        onChangeText={setName}
        placeholder='Type Here'
        style={{ fontSize: 30, alignSelf: 'center', marginTop: 20, color: 'black', borderWidth:2,marginBottom:20,width:"90%"}}
        />
               <Button
                onPress={getData}
                title="save"
            />
            {/* <Button
                onPress={clear}
                title="Clear"
            /> */}

{/* <Button
                onPress={getData}
                title="Get"
            /> */}

{/* <Button
                onPress={()=>{navigation.navigate('First')}}
                title="Next"
            />   */}

            <FlatList    
                       data={array}
                renderItem={({item,index})=>( 
                     <View style={{ width: 100, height: 100, backgroundColor: 'yellow',alignSelf:'center' }}>
          <Text>{item.name}</Text>
          </View>)}
                />

</View>
</View>
)

}
