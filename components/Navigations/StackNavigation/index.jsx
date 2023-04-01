import React from "react";
import About from "../../../screens/About";
import ProductDetail from "../../../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/HomeScreen";
import MyWallet from "../../../screens/MyWallet";
import Orders from "../../../screens/Orders";
import PrivatePolicy from "../../../screens/PrivatePolicy";
import TermAndCondition from "../../../screens/TermAndCondition";
;

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerTitleAlign: "center"
      }}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="PrivatePolicy" component={PrivatePolicy} />
      <Stack.Screen name="TermAndCondition" component={TermAndCondition} />

      
      <Stack.Screen name="Transaction" component={Orders} />
    </Stack.Navigator>
  );
}
