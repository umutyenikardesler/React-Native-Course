import 'react-native-gesture-handler';
import { NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from "@/screens/DashboardScreen";
import SettingsScreen from "@/screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen 
            name="Dashboard" 
            component={DashboardScreen} options={{
              title: "My Dashboard",
              drawerLabel: "Dashboard label",
              drawerActiveTintColor: "#333",
              drawerActiveBackgroundColor: "lightblue",
              drawerContentStyle: {
                backgroundColor: "#c6cbef",
              }
          }} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}