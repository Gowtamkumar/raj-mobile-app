import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Cart from "../../../screens/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "../StackNavigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../../../screens/Profile";

export default function TabNavigation() {
  const [auth, setAuth] = useState(true);
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "Profile") {
            iconName = focused ? "face-man-profile" : "face-man-profile";
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={StackNavigation} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
