import {
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Linking,
} from "react-native";
import React from "react";
import { spacing } from "../theme/spacing";
import { presets } from "../components/text/text.preset";
import { colors } from "../theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../components/text/text";

export default function About({ navigation }) {
  const handleEmailClick = () => {
    console.log("email");
    Linking.openURL('mailto:gowtampaul0@gmail.com');
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
          <Text style={presets.bold} preset="h1">
            Technical Pro Rj(INGAME)
          </Text>
          <Text>Version: 1.0.0</Text>
        </View>

        <View
          style={styles.section}
        >
          <View>
            <Text>Contact Us</Text>
          </View>
          <View style={styles.contact}>
            <MaterialCommunityIcons name={"phone"} size={20} color="black" />
            <Text>+8801767163576</Text>
          </View>

          <View style={styles.contact} onPress={handleEmailClick}>
            <MaterialCommunityIcons name={"email"} size={20} color="black" />
            <Text>ssssdesmo@gmail.com</Text>
          </View>
          <View style={styles.contact}>
            <MaterialCommunityIcons name={"web"} size={20} color="black" />
            <Text>google.com</Text>
          </View>
        </View>

        <View
          style={styles.section}
        >
          <View>
            <Text>About Us</Text>
            <Text>Ultimate Free Fire Topup App</Text>
            <Text style={presets.default}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              minus voluptates corrupti nihil eius asperiores pariatur
              necessitatibus delectus quisquam culpa? Consequatur, itaque
              accusantium? Repellat, ratione debitis iusto dignissimos alias
              ipsa?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  contact: {
    flexDirection: "row",

  },
  section: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    padding: spacing[3]
  }
});
