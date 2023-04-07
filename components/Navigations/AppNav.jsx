import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import StackNavigation from "./StackNavigation";
import DrawerNavigation from "./DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const { authToken, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <View style={{
        flex: 1, justifyContent: "center",
        alignItems: "center",
      }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {authToken !== null ? <DrawerNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
