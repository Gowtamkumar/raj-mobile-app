import {
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const handleChange = () => {};
  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container]}>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
        </View>
        <View style={[styles.container]}>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
        </View>
        <View style={[styles.container]}>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("ProductDetail")}
            style={{
              backgroundColor: "gray",
              alignContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <Text style={{ color: "white" }}>
              {" "}
              Linking gives you a general{" "}
            </Text>
          </Pressable>
        </View>

        <View>
          <Text>HomeScreen Hello</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("About")}
          />
          <Button
            title="Go to Details Profile"
            onPress={() => navigation.navigate("DetailsProfile")}
          />
          <Button
            title="ProductDetail page"
            onPress={() => navigation.navigate("ProductDetail")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});
