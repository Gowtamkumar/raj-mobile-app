import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './theme/colors';
import { spacing } from './theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './theme/typography';
import Text from './components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';
import DetailsProfile from './screens/DetailsProfile';
import Login from './screens/login';
import Signup from './screens/signup';


const Stack = createNativeStackNavigator();


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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DetailsProfile" component={DetailsProfile} />
      </Stack.Navigator>
    </NavigationContainer>

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
