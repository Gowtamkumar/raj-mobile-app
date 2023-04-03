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
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { service } from "../MockData/services";

let deviecWidth = Dimensions.get("window").width;
let deviecHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  const handleChange = () => { };
  return (
    <SafeAreaView>
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
                    style={styles.logo}
                    source={{
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    margin: 3,
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
});
