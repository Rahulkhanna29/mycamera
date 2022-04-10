import React from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

function LoginSecond({ navigation, route }) {
  const { abc } = route.params;

  return (
    <FlatList
      data={JSON.parse(abc)}
      renderItem={({ item, index }) => (

        <View style={{ width: 100, height: 100, backgroundColor: 'yellow',alignSelf:'center' }}>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
          <Text>{item.address}</Text>
        </View>

      )}
    />
  );
}

export default LoginSecond;

