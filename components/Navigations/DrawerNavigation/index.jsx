import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../../screens/login";
import Signup from "../../../screens/signup";
import TabNavigation from "../TabNavigation";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTab" component={TabNavigation} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
  );
}
