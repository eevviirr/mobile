import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Menu from "../Components/Menu";
import { Linking } from "react-native";
import tw from 'twrnc'

const Profile = ({ navigation }) => {
    const openTelegramApp = () => {
        Linking.openURL("https://t.me/dobriyeugene");
    };
    return (
        <>
            <View>
                <TouchableOpacity onPress={openTelegramApp} style={tw`h-full justify-center items-center bg-black`}>
                    <Text style={tw`text-white p-10 bg-blue-500`}>Перейти в мой  Telegram</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Profile;
