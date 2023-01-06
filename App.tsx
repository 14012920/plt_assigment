import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { CartScreen } from "./src/Screens/CartScreen";
import { Store } from "./src/Redux/Store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Apptheme from "./src/Theme/ThemeConfig";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <PaperProvider theme={Apptheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
