import * as React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function ScreenSecond({ navigation , route}) {
  
    return (
      <View style={styles.MainContainer}>
  
        <Text> {route.params.value}</Text>
        {/* <Button onPress={()=>{alert(route.params.id)}} title="Show Name" /> */}

      </View>
    );
  }

  export default ScreenSecond;

  
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