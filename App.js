import React, { Component, useEffect, useState } from "react"; 
import { NavigationContainer } from '@react-navigation/native';
 
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginSecond from "./src/LoginSecond";
import LoginFirst from "./src/LoginFirst";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncExample from './src/AsyncExample';
import SplashScreen from "./src/SplashScreen";
import HomeScreen from "./src/HomeScreen";
import CsData from "./src/CsData";
import CsDataStore from "./src/CsDataStore";
import LoginPage from "./src/LoginPage";
import ColorChange from "./src/ColorChange";
import MultiColorChange from "./src/MultiColorChange";



  const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Multi">
        <Stack.Screen options={{headerShown:false}} name="Splash" component={SplashScreen} />
        <Stack.Screen name="First" component={LoginFirst} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="CsDataStore" component={CsDataStore}options={{headerShown: false}} />
        <Stack.Screen name="CsData" component={CsData}options={{headerShown: false}} />
 <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
 <Stack.Screen name="ColorChange" component={ColorChange} options={{headerShown: false}} />   
          <Stack.Screen name="Second" component={LoginSecond} />
          <Stack.Screen options={{headerShown:false}} name="Multi" component={MultiColorChange} />
        <Stack.Screen name='AsyncExample' component={AsyncExample}/>
     </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
  export default App;
