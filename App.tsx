import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import Auth from './src/screens/auths'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="auth" >
        <Stack.Screen name="screen" component={Auth}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator >
    </NavigationContainer>
    )
}
