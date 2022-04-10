import React, { useEffect, useRef } from "react";
import { Button, FlatList, Text, TextInput, ToastAndroid, View,StyleSheet,TouchableOpacity } from "react-native";
import { useState } from 'react/cjs/react.development';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

function CsData({ navigation }) {
  const ref_input2 = useRef();
  const ref_input3 = useRef();



  // const navigateToScreen = () => {

  //   navigation.navigate('Second', { data: JSON.stringify(array)});
  // }

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [savedValue,setSavedValue]=useState('')
  const [array, setArray] = useState([])


  useEffect(()=>{
    AsyncStorage.getItem('SavedData').then((res)=>{
      if(res != null)
      {
        setArray(JSON.parse(res))
      }
    })
  },[])

const gotoNext=()=>{
  if (name && age) {
 setName(''); setAge('');
 let arr = array;
arr.push({name:name, age: age})
setArray(arr)
AsyncStorage.setItem('SavedData', JSON.stringify(array))
 navigation.navigate('CsDataStore')
}
}
  return (
    <KeyboardAwareScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1, backgroundColor:'#00bfff'}}>
    <View
      style={{  }}>

      
       
     <Text style={{
        fontSize: 30, borderColor: 'black', alignSelf: 'center', color: 'white', marginTop:200
      }}>Add Details</Text>
     
     
     <View style={{ flexDirection: 'row', marginTop:70,alignSelf:'center' }}>
        <Text style={{ fontSize: 30, marginLeft: 10, color: 'white', }}>Add Items</Text>
        <TextInput value={name}
          onChangeText={(text) => { setName(text) }}
          style={{
            borderRadius: 3, borderColor: 'white', width: 210, height: 50, marginLeft: 10, alignSelf: 'center',
            borderWidth: 1, borderRadius: 20, 
          }} 
          // placeholder="Input1"
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}      
    ></TextInput>
  </View>
 
 
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ fontSize: 30, color: 'white', marginLeft: 25 }}>Total Price</Text>
        <TextInput
          keyboardType="number-pad"

          value={age}
          onChangeText={(text) => { setAge(text) }}
          style={{
            borderRadius: 3, borderColor: 'white', width: 210, marginLeft: 8, height: 50,  
            borderWidth: 1, borderRadius: 20, 
          }} 
          // placeholder="Input2"
          returnKeyType="next"
                   ref={ref_input2}
          ></TextInput>
</View>
     
      {/* <View style={{ marginTop: 30, width: 300, height: 100, alignSelf: "center" }}>
        <Button 
        
        onPress={gotoNext}
        

        title="Add Items"></Button>
      </View> */}

<TouchableOpacity>
               <Text
                  style={styles.text}
                  onPress={gotoNext}
                  >ADD ITEMS</Text>
           
            </TouchableOpacity>
</View>
</KeyboardAwareScrollView>
 );
}

export default CsData;

const styles=StyleSheet.create({
  text:{
    backgroundColor: 'white',
    width: '80%',
     height: 40,
      borderRadius: 40,
       paddingTop: 12,
        color: '#00bfff',
        marginTop:20,
         alignSelf: 'center',
          paddingLeft: 120 
  }
});