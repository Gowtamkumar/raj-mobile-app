import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'

export default function TermAndCondition({ navigation }) {
  return (
    <View>
      <Text>TermAndCondition</Text>
      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})