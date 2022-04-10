import React, { useRef } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { useState } from 'react/cjs/react.development';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


function LoginFirst({ navigation }) {
  const ref_input2 = useRef();
  const ref_input3 = useRef();



  // const navigateToScreen = () => {

  //   navigation.navigate('Second', { data: JSON.stringify(array)});
  // }

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [array, setArray] = useState([])



const gotoNext=()=>{
  if (name && age && address) {
    let arr = array;
    arr.push({ name: name, age: age, address: address })
 setName(''); setAge(''); setAddress('')
 navigation.navigate('Second',
 {
   abc:JSON.stringify(arr),
 })
  }

}

  return (
    <KeyboardAwareScrollView >
    <View
      style={{ width: '100%', height: '100%', alignSelf: 'center', marginTop: 20 }}>

      {<Text style={{
        fontSize: 30, borderColor: 'black', alignSelf: 'center', color: 'black'
      }}>Please Fill the Forms</Text>}
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ fontSize: 30, marginLeft: 30, color: 'black', }}>Name</Text>
        <TextInput value={name}
          onChangeText={(text) => { setName(text) }}
          style={{
            borderRadius: 3, borderColor: 'black', width: 230, height: 50, marginLeft: 40, alignSelf: 'center',
            borderWidth: 1
          }} 
          placeholder="Input1"
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}      
    ></TextInput>



      </View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ fontSize: 30, color: 'black', marginLeft: 30 }}>Age</Text>
        <TextInput
          keyboardType="number-pad"

          value={age}
          onChangeText={(text) => { setAge(text) }}
          style={{
            borderRadius: 3, borderColor: 'black', width: 230, marginLeft: 10, height: 50, marginLeft: 20, marginLeft: 60,
            borderWidth: 1
          }} 
          placeholder="Input2"
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
          ></TextInput>



      </View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ fontSize: 30, marginLeft: 30, color: 'black', }}>Address</Text>
        <TextInput
          value={address}
          onChangeText={(text) => { setAddress(text) }}
          style={{
            borderRadius: 3, borderColor: 'black', width: 230, height: 50, marginLeft: 10, alignSelf: 'center',
            borderWidth: 1
          }} 
          ref={ref_input3}
          ></TextInput>



      </View>
      <View style={{ marginTop: 30, width: 300, height: 100, alignSelf: "center" }}>
        <Button 
        
        onPress={gotoNext}
        

        title="Next"></Button>
      </View>
</View>
</KeyboardAwareScrollView>
  );
}

export default LoginFirst;