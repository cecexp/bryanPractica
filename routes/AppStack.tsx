import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import CameraPage from "../pages/CameraPage";
import ImagePage from "../pages/ImagePage";
import Chat from "../pages/Chat";

const Stack = createNativeStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component = {HomePage}/>
      <Stack.Screen name="camera" component = {CameraPage}/> 
      <Stack.Screen name="image" component = {ImagePage}/>
      <Stack.Screen name="chat" component = {Chat}/>
    </Stack.Navigator>
  )
}
export default AppStack