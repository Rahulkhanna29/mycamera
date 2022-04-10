import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Button, Text, View,TouchableOpacity,StyleSheet } from "react-native";

 function HomeScreen({navigation})
{
 
const goToAddItems=()=>{
  navigation.navigate('CsData')
}


const goToDetails=()=>{
 
  navigation.navigate('CsDataStore')
}
    return(
//         <View>
// <Text style={{fontSize:35,alignSelf:'center',color:'black', marginTop:50}}>Home Page</Text>
// <View style={{width:'80%',alignSelf:'center',marginTop:200}}>

// <Button
// title="Add Items"
// onPress={goToAddItems}
// />
// </View>
// <View style={{marginTop:20,width:'80%',alignSelf:'center'}}>
// <Button
// title="Details"
// onPress={goToDetails}
// />

// </View>
//         </View>
   
<View style={{width:'100%',height:'100%',alignSelf:'center',justifyContent:'center',backgroundColor:'white'}}>
<View>
  <Text style={styles.text1}>WELCOME TO THE HOME!!</Text>
<TouchableOpacity>
               <Text
                  style={styles.text}
                  onPress={goToAddItems}
                  >LOGIN IN</Text>
           
            </TouchableOpacity>

            <TouchableOpacity>
               <Text
                  style={styles.text}
                  onPress={goToDetails}
                  >DETAILS</Text>
           
            </TouchableOpacity>

</View>
</View>


);
}
export default HomeScreen;

const styles=StyleSheet.create({
  text:{
    backgroundColor: '#07c4d9',
    width: '80%',
     height: 40,
      borderRadius: 40,
       paddingTop: 12,
        color: 'white',
        marginTop:20,
         alignSelf: 'center',
          paddingLeft: 120 
  },
  
    text1:{
      fontSize:25,
      alignSelf:'center',
      color:'#07c4d9', 
      marginTop:40,
      marginBottom:40,
     
    }
  
});