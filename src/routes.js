import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Conta from "./screens/Login"
import Register from "./screens/Register"
import Notification from "./screens/Notification"

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                initialRouteName: 'Login',
                tabBarStyle: {
                    backgroundColor: '#f6ce55',
                }
            }}
        >
            <Tab.Screen
                name="Login"
                component={Conta}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={size} color="purple" />
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="notifications" size={size} color="purple" />
                        }
                        return <Ionicons name="notifications-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Register"
                component={Register}
                ScreenOptions={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes