import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Map from "../screens/Map";
import Compass from "../screens/Compass";

const Menu = () => {
    const Tab = createBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "black", // Черный цвет фона заголовка
                    },
                    headerTitleStyle: {
                        color: "white", // Белый цвет текста заголовка
                    },
                    tabBarStyle: {
                        backgroundColor : 'black'
                    }
                }}>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{ title: "Главная" }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        title: "Профиль",
                    }}
                />
                <Tab.Screen
                    name='Map'
                    component={Map}
                    options={{ title: "Карта" }}
                />
                <Tab.Screen
                    name='Compass'
                    component={Compass}
                    options={{ title: "Компас" }}
                />
            </Tab.Navigator>
        </>
    );
};

export default Menu;
