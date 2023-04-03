import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { spacing } from "../theme/spacing";

export default function Cart({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 50, backgroundColor: "yellow" }}>
          <Text>Cart</Text>
        </View>
        <View style={{ flex: 50, backgroundColor: "red" }}>
          <Text>Cart</Text>
        </View>
      </View>

      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}
