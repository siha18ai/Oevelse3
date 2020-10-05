import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingScreen";
import TopNavigation from "./components/TopNavigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Details" component={TopNavigation}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


