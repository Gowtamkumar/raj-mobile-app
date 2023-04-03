import { View, Text, Button } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'

export default function About({navigation}) {
  return (
    <View>
      <Text>About</Text>

      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}