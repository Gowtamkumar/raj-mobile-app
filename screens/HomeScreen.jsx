import { View, Text, Pressable, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen Hello</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to Details Profile"
        onPress={() => navigation.navigate("DetailsProfile")}
      />
      <Button title="Login page" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
