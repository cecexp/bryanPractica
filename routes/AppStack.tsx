import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import CameraPage from "../pages/CameraPage";

const Stack = createNativeStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component = {HomePage}/>
      <Stack.Screen name="camera" component = {CameraPage}/>  
    </Stack.Navigator>
  )
}
export default AppStack