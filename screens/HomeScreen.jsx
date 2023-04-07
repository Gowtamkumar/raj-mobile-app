import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { service } from "../MockData/services";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors";

let deviecWidth = Dimensions.get("window").width;
let deviecHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const [auth, setAuth] = useState(false)
  const handleChange = () => { };

  const navigation = useNavigation()

  return (
    // <SafeAreaView>
    <ScrollView>
      <View>
        <Carousel
          loop
          width={deviecWidth}
          height={deviecHeight / 4}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg",
                  }}

                />
                {index}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text>Topup Service</Text>
      </View>
      <View style={styles.serviceContainer}>
        {service.map((item, idx) => {
          return (
            <TouchableHighlight
              // onPress={() =>
              //   navigation.navigate("ProductDetail", {
              //     name: "Gowtamkumar",
              //     fName: "Dulal Chandra",
              //     mName: "Kanon Rani",
              //     son: "Arko Paul",
              //   })
              // }

              onPress={() =>
                navigation.navigate("ProductDetail")
              }
              key={idx}
            >
              <View style={styles.service}>
                <Image
                  source={{
                    uri: item.img_url,
                    width: 120,
                    height: 100,
                  }}
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 200,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
    margin: 3,
  },
  service: {
    width: deviecWidth / 2 - 6,
    height: "auto",
    // backgroundColor: "yellow",
    // paddingHorizontal: 2,
    // paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.Cyan,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20

  },
});
