import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './theme/colors';
import { spacing } from './theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './theme/typography';
import Text from './components/text/text';

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./fonts/Antonio-VariableFont_wght.ttf'),
    LeagueSpartan: require('./fonts/LeagueSpartan-VariableFont_wght.ttf'),
    RobotoMedium: require('./fonts/Roboto-Regular.ttf'),

  });

  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ color: 'green' }}>Learn React Native</Text>
      <Text preset='h4'>Hello World</Text>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
