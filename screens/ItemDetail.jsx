import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Input from '../components/input';
import { spacing } from '../theme/spacing';

const ItemDetail = ({ navigation, route }) => {
  const [itemsValue, setItemValue] = useState({})
  console.log(route.params.item);
  const { price, diamond } = route.params.item
  return (
    <View>
      <Text>Price: {price}</Text>
      <Text>Dimond: {diamond}</Text>
      <TextInput
        style={styles.input}
        placeholder="Topup Id"
        autoCapitalize={"words"}
        onChangeText={(e) => setItemValue({ ...itemsValue, topUpId: e })} />

      <Input
        placeholder="new Id"
        autoCapitalize={"words"}
        onChangeText={(e) => setItemValue({ ...itemsValue, email: e })}
      />
      <Button
        title="Buy Now"
        customStyles={{ marginTop: spacing[1], alignSelf: "center" }}
        onPress={() => console.log("buy now", itemsValue)}
      />
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
})