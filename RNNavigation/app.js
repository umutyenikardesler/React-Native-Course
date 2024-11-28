import { NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from '@/screens/CourseListScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from './app/(tabs)/indexStack';

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationIndependentTree>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarLabelPosition: "below-icon",
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "purple",
                }}>
                    <Tab.Screen 
                        name='Course List' 
                        component={CourseListScreen} 
                        options={{
                            tabBarLabel: "My CourseList",
                            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
                            tabBarBadge: 3,
                        }} />
                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            tabBarLabel: "My Profile",
                            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
                            tabBarBadge: 3,
                        }}
                        />
                    <Tab.Screen name='Settings' component={SettingsScreen} />
                    <Tab.Screen name='About Stack' component={AboutStack} options={{
                        headerShown: false,
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}