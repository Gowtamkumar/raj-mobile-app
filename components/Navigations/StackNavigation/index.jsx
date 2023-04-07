import React from "react";
import About from "../../../screens/About";
import ProductDetail from "../../../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/HomeScreen";
import MyWallet from "../../../screens/MyWallet";
import Orders from "../../../screens/Orders";
import PrivatePolicy from "../../../screens/PrivatePolicy";
import TermAndCondition from "../../../screens/TermAndCondition";
import ItemDetail from "../../../screens/ItemDetail";
import OnboardingScreen from "../../../screens/OnBoardingScreen";
import Login from "../../../screens/login";
import Signup from "../../../screens/Signup";


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerTitleAlign: "center"
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      
      
    </Stack.Navigator>
  );
}
