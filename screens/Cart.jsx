import { View, Text } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}>
      <View style={{ flex: 50, backgroundColor: 'yellow' }}>
        <Text>Cart</Text>
      </View>
      <View style={{ flex: 50, backgroundColor: 'red'}}>
        <Text>Cart</Text>
      </View>
      
    </View>
  );
}
