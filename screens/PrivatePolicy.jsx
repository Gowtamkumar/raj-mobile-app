import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { spacing } from '../theme/spacing'

export default function PrivatePolicy({ navigation }) {
  return (
    <View>
      <Text>PrivatePolicy</Text>

      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})