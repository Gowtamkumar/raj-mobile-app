import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'

const Contact = ({navigation}) => {
  return (
    <View>
      <Text>Contact</Text>
      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})