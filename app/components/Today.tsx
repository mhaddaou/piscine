import { Button, Text, TouchableOpacityComponent, View } from "react-native"
import { router } from "expo-router";

const Today = () =>{
    return (
        <View className="flex-1 flex justify-center items-center bg-white">
            <Text className="text-lg font-bold tracking-wide">Today</Text>
        </View>
    )
}

export default Today;