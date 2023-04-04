import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    price: 300,
    diamond: 1234
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    price: 500,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    price: 200,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d33",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29455",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29e72",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29w72",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29t72",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29a72",
    price: 200,
    diamond: 1234
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29y72",
    price: 200,
    diamond: 1234
  },
];



const ProductDetail = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>Select Item</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight key={index} onPress={() => { navigation.navigate("ItemDetail", item = { item }) }} style={styles.singleItem}>
              <View style={styles.profileItem}>
                <View style={{ flexDirection: "row", gap: spacing[1] }}>
                  <Text style={{ color: "white" }}>900</Text>
                  <MaterialCommunityIcons name={"google"} size={20} color="white" />
                </View>
                <Text style={{ color: "white" }}>৳ {(+item.price || 0).toFixed(2)}</Text>
              </View>
            </TouchableHighlight>
          )
        }

        }
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
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
export default ProductDetail;
