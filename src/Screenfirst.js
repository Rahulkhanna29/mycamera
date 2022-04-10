import { tSExternalModuleReference } from '@babel/types';
import * as React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';


function Screenfirst({ navigation }) {
  

  const navigateToScreen=()=>{

        navigation.navigate('Second',{'value':name});
    
      }
    
const [name, setName] = useState('')
    return (
      <View style={styles.MainContainer}>
  
        <Text style={styles.text}> Enter your Name</Text>
        {/* <TextInput style={{borderRadius:3, borderColor:'black',width:250, height:50,marginBottom:10, 
        borderWidth:1}}></TextInput> */}


<TextInput
style={{borderRadius:3, borderColor:'black',width:250, height:50,marginBottom:10, 
borderWidth:1}}
value={name}
onChangeText={(text)=>{setName(text)}}
/>
        <Button onPress={navigateToScreen} title="Save" />
        
      </View>
    );
  }

  export default Screenfirst;

  
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
   
    text: {
      textAlign: 'center',
      margin: 12,
      fontSize: 22,
      fontWeight: "100",
    },
   
  });