import React, { Suspense, lazy, useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../../screens/login";
import TabNavigation from "../TabNavigation";
import Contact from "../../../screens/Contact";
import Orders from "../../../screens/Orders";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../../../screens/Profile";
import { Image, TouchableOpacity, View } from "react-native";
import DashBoard from "../../../screens/Dashboard";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import HomeScreen from "../../../screens/HomeScreen";
import ProductDetail from "../../../screens/ProductDetail";
import About from "../../../screens/About";
import MyWallet from "../../../screens/MyWallet";
import PrivatePolicy from "../../../screens/PrivatePolicy";
import TermAndCondition from "../../../screens/TermAndCondition";
import ItemDetail from "../../../screens/ItemDetail";
import Transaction from "../../../screens/Transaction";
import CustomDrawer from "../CustomDrower";
import Text from "../../text/text";
const Signup = lazy(() => import("../../../screens/Signup"));

export default function DrawerNavigation() {
  const navigation = useNavigation();

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ route }) => ({
        // headerShown: true,
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
          } else if (route.name === "Profile") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "DashBoard") {
            iconName = focused
              ? "desktop-mac-dashboard"
              : "desktop-mac-dashboard";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        // custom Header
        headerLeft: false,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={require('../../../assets/user-profile.jpg')}
              style={{ height: 40, width: 40, borderRadius: 40 }}
            />
          </TouchableOpacity>
        ),
        //end custom header
        // drawerContentStyle: ,
        // tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        // headerTitleAlign: "center",
      })}
    >
      <Drawer.Screen
        name="HomeTab"
        component={TabNavigation}
        options={{ title: "Welcome" }}
      />
      <Drawer.Screen name="Contact" component={Contact} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="Orders" component={Orders} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="About" component={About} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="MyWallet" component={MyWallet} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="PrivatePolicy" component={PrivatePolicy} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="TermAndCondition" component={TermAndCondition} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="ItemDetail" component={ItemDetail} options={{
        drawerItemStyle: { height: 0 }
      }} />
      <Drawer.Screen name="Transaction" component={Transaction} options={{
        drawerItemStyle: { height: 0 }
      }} />
    </Drawer.Navigator>
  );
}
