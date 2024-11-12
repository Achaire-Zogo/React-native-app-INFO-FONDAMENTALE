import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import HelloWorld from './pages/Hello_word';
import Formulaire from './pages/Formulaire';
import Crud from './pages/Crud';
import Camera from './pages/Camera';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
        <Stack.Screen name="Formulaire" component={Formulaire} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;