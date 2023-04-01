import {
  View,
  Button,
  Image,
  // Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Text from "../components/text/text";
import { presets } from "../components/text/text.preset";

export default function Profile({ navigation }) {
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  // ];
  // const Item = ({ title }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  // const renderItem = ({ item }) => <Item title={item.title} />;

  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            // backgroundColor: "yellow",
            // paddingHorizontal: 2,
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?auto=compress&cs=tinysrgb&w=600",
              width: 100,
              height: 100,
            }}
            style={{ borderRadius: 100 }}
          />
          <Text style={presets.default} preset="h1" >Gowtam kumar</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: spacing[4],
            justifyContent: 'center',
            padding: spacing[3],
          }}
        >
          <View style={{ backgroundColor: colors.Silver, padding: spacing[5] }}>
            <Text>Balance:৳ 888</Text>
          </View>
          <View style={{ backgroundColor: colors.Grey, padding: spacing[5] }}>
            <Text>Orders ( 200 )</Text>
          </View>
        </View>

        <View style={{ paddingLeft: spacing[3], paddingRight: spacing[3] }}>
          <TouchableHighlight onPress={() => {
            navigation.navigate("MyWallet");
          }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>My Profile</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {
            navigation.navigate("MyWallet");
          }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>My Wallet</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { navigation.navigate("Orders") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>My Orders</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { navigation.navigate("Transaction") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>Transaction</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { navigation.navigate("About") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>About Us</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { navigation.navigate("PrivatePolicy") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>Private Policy</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { navigation.navigate("TermAndCondition") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>Terms and conditions</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate("Login") }} style={styles.singleItem}>
            <View style={styles.profileItem}>
              <View style={{ flexDirection: "row", gap: spacing[1] }}>
                <MaterialCommunityIcons
                  name={"google"}
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>Log Out</Text>
              </View>
              <MaterialCommunityIcons
                name={"arrow-right-thick"}
                size={20}
                color="white"
              />
            </View>
          </TouchableHighlight>
        </View>

        {/* <Button
          title="Go to Details Profile"
          onPress={() => navigation.navigate("HomeScreen")}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    height: "auto",
    backgroundColor: "yellow",
    paddingHorizontal: 2,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing[2],
  },
  title: {
    fontSize: 32,
  },
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    padding: 7,
  },
  singleItem: {
    backgroundColor: colors.Blue,
    padding: spacing[2],
    marginTop: spacing[1],
  },
});
