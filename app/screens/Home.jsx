import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Menu from "../Components/Menu";
import tw from "twrnc";

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchPosts = () => {
        setIsLoading(true);
        fetch("https://64fc5e43605a026163ae6ae4.mockapi.io/post")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <View style={tw`h-full justify-center items-center bg-black`}>
                <ActivityIndicator size={"large"} />
                <Text style={tw`pt-10 text-white`}>Загрузка постов...</Text>
            </View>
        );
    }
    return (
        <>
            <View style={tw`flex  h-full bg-black px-[15px]`}>
                <FlatList
                    data={posts}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={fetchPosts}
                        />
                    }
                    renderItem={({ item }) => (
                        <View style={tw`border-b border-b-[#333] pt-[8%]`}>
                            <TouchableOpacity>
                                <Text
                                    style={tw`text-6xl text-white mt-10 font-bold`}>
                                    {item.title}
                                </Text>
                                
                                <Text
                                    style={tw`text-4xl opacity-50 text-white`}>
                                    {item.descr}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </>
    );
};

export default Home;
