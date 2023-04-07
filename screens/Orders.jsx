import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'

const Orders = ({ navigation }) => {
  return (
    <View>
      <Text>Orders</Text>
      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})