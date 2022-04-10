import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput, Button, Image, TouchableOpacity, StyleSheet } from "react-native";

function LoginPage({ navigation }) {
   const [name, setName] = useState('')
   const [password, setPassword] = useState('')


   const storeData = () => {

      if (name && password) {
         setName(''); setPassword('');
         AsyncStorage.setItem('isLogin', '1')
         navigation.replace('HomeScreen');
      }
   }

   //   const dataGet=()=>{
   //      AsyncStorage.getItem('user').then((value)=>{setSavedValue(value)})
   //      AsyncStorage.getItem('pass').then((value)=>{setSavedValue(value)})
   //   }

   return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
         <View>

            <Image style={{ width: 100, marginLeft: 140, height: 100,marginBottom:10 }}
               source={{ uri: "https://lh4.googleusercontent.com/-MLraK3k7PH4/AAAAAAAAAAI/AAAAAAAAAAA/bsh1cWf7gBQ/s44-p-k-no-ns-nd/photo.jpg" }}></Image>
            {/* <Text style={{ width: 100, height: 50,marginLeft: 20 ,marginTop: 100, color: 'black', alignSelf: 'center', fontSize: 30 }}>Login</Text> */}

            <TextInput
               value={name}
               onChangeText={setName}
               placeholder='Enter Username'
             style={styles.textinput}
            />
            <TextInput
               value={password}
               onChangeText={setPassword}
               placeholder='Enter Password'
             style={styles.textinput}
            />
            <TouchableOpacity>
               <Text
                  style={styles.text}
                  onPress={storeData}
                  >LOGIN IN</Text>
           
            </TouchableOpacity>
            {/* <Button
             onPress={storeData}
               title="Login In"
            /> */}

         </View>
      </View>
   );
}
export default LoginPage;

const styles= StyleSheet.create({
   textinput:{
      fontSize: 30,
       alignSelf: 'center',
        borderRadius: 20, 
        marginTop: 20, 
        color: 'black', 
        borderWidth: 2,
         marginBottom: 20, 
         width: "90%"
   },

   text:{
      backgroundColor: '#07c4d9',
       width: '80%',
        height: 40,
         borderRadius: 40,
          paddingTop: 12,
           color: 'white',
            alignSelf: 'center',
             paddingLeft: 120 
   }
});