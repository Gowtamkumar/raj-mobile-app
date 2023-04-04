import React, { Suspense, lazy, useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../../screens/login";
import TabNavigation from "../TabNavigation";
import Contact from "../../../screens/Contact";
import Orders from "../../../screens/Orders";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../../screens/Profile";
import { View } from "react-native";
import DashBoard from "../../../screens/Dashboard";
const Signup = lazy(() => import('../../../screens/Signup'));

export default function DrawerNavigation({ navigation }) {
  const [auth, setAuth] = useState(true)
  useEffect(() => {
    console.log(auth);
  }, [])

  const Drawer = createDrawerNavigator();
  return (

    <Drawer.Navigator

      screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Login") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "Signup") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "Contact") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "Orders") {
            iconName = focused ? "cart" : "cart";
          }
          else if (route.name === "Profile") {
            iconName = focused ? "cart" : "cart";
          }else if (route.name === "DashBoard") {
            iconName = focused ? "DashBoard" : "DashBoard";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // drawerContentStyle: ,
        // tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",

      })}
    >
      <Drawer.Screen name="HomeTab" component={TabNavigation} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Orders" component={Orders} />
      {
        auth &&
        <Drawer.Screen name="DashBoard" component={DashBoard} />
      }

    </Drawer.Navigator>

  );
}
