import { StyleSheet, View } from "react-native";
import Menu from "./app/Components/Menu";
import MainStack from "./Navigate";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Menu />
            </NavigationContainer>
        </>
    );
}
