import {
  StyleSheet,
  Text,
  Button,
  Dimensions,
  View,
  TouchableHighlight,
  ScrollView
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

let deviecWidth = Dimensions.get("window").width;
let deviecHeight = Dimensions.get("window").height;

const DashBoard = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.dashboardHeadding}>
        <Text>Topup Admin Panal</Text>
      </View>
      <View style={styles.serviceContainer}>
        <TouchableHighlight>
          <View style={styles.service}>
            <Text>Users</Text>
            <Text>40000</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.service}>
            <Text>Orders</Text>
            <Text>40000</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.service}>
            <Text>Today Sales</Text>
            <Text>40000</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.service}>
            <Text>Total Sales</Text>
            <Text>40000</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.dashboardHeadding}>
        <Text>Menu</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Product</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Product Item</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Header Slider</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Notice</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { console.log("menu item") }}>
          <View style={styles.innerMenu}>
            <Text>Total Sales</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
export default DashBoard;

const styles = StyleSheet.create({
  dashboardHeadding: {
    alignItems: "center",
    padding: 10,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: "center",
  },
  service: {
    width: deviecWidth / 2 - 6,
    height: "auto",
    backgroundColor: "yellow",
    // paddingHorizontal: 2,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: "center",
  },
  innerMenu: {
    width: deviecWidth / 3 - 6,
    height: "auto",
    backgroundColor: "gray",
    // paddingHorizontal: 2,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
