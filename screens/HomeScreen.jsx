import {
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { service } from "../MockData/services";

export default function HomeScreen({ navigation }) {
  let deviecWidth = Dimensions.get("window").width;
  let deviecHeight = Dimensions.get("window").height;

  const handleChange = () => { };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Carousel
            loop
            width={deviecWidth}
            height={deviecHeight / 4}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
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
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 5,
            margin: 3
          }}
        >
          {service.map((item, idx) => {
            return (
              <View
                style={{
                  width: deviecWidth / 2 - 6,
                  height: 'auto',
                  backgroundColor: "yellow",
                  paddingHorizontal: 2,
                  paddingVertical: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={idx}
              >
                <Image
                  source={{
                    uri: item.img_url,
                    width: 100,
                    height: 100,
                  }}
                />

                <Text>{item.name}</Text>
                <Text style={{ textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore recusandae nobis laborum, sint vero amet laboriosam
                  accusantium atque soluta necessitatibus ea, ullam omnis!
                  Deleniti nihil dolorum ea doloribus vero ducimus.
                </Text>
                <Button
                  onPress={() => navigation.navigate("ProductDetail")}
                  title="Learn More"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    padding: 5,
    flexDirection: "row",
    columnGap: "10px",
    // justifyContent: "space-around",
    // alignItems: 'stretch',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
