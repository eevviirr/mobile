import React from "react";

import Home from "./app/screens/Home";
import Profile from "./app/screens/Profile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: "Главная" }}
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={{ title: "Профиль" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
