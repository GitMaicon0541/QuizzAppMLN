import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Import or define the Home component
import Home from './Home'; // Adjust the path as needed

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          // Define or import the Tipe component
                    <Stack.Screen name="Tipe" component={() => <></>} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
