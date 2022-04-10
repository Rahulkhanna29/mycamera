import { tSExternalModuleReference } from '@babel/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react';

import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';


function SplashScreen({ navigation }) {
  
useEffect(()=>{
  setTimeout(() => {
    AsyncStorage.getItem('isLogin').then((res)=>{
      if(res !=null){
        if(res === '1'){
          navigation.replace('HomeScreen')
        }else{
          navigation.replace('LoginPage')
        }
      }
      else{
        navigation.replace('LoginPage')
      }
    })
      }, 3000);
},[])
    
    return (
      <View style={styles.MainContainer}>
  <Image style={{width:100, height:100}} source={{uri:"https://lh4.googleusercontent.com/-MLraK3k7PH4/AAAAAAAAAAI/AAAAAAAAAAA/bsh1cWf7gBQ/s44-p-k-no-ns-nd/photo.jpg"}}></Image>
        <Text style={styles.text}>CS Soft Solution</Text>
     
      </View>
    );
  }

  export default SplashScreen;

  
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
   
    text: {
      textAlign: 'center',
      fontSize: 50,
      fontWeight: "bold",
      color:'black'
    },
    image:{
      backgroundColor:'white'
    }
   
  });