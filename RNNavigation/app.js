import { NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from '@/screens/CourseListScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import SettingsScreen from '@/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationIndependentTree>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Course List' component={CourseListScreen} />
                    <Tab.Screen name='Profile' component={ProfileScreen} />
                    <Tab.Screen name='Settings' component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}