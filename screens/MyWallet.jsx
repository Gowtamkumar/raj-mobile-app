import { View, Text, Button } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'

const MyWallet = ({navigation}) => {
  return (
    <View>
      <Text>MyWallet</Text>
      <Button
        title="Go Back"
        customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default MyWallet