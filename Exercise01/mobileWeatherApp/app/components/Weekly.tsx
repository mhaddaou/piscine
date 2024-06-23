import { Text, View } from "react-native";

const Weekly = ({ text }: { text: string }) => {
  return (
    <View className="flex-1 flex justify-center items-center bg-white">
      <Text className="text-lg font-bold tracking-wide">Weekly</Text>
      <Text className="text-lg font-bold tracking-wide capitalize">{text}</Text>
    </View>
  );
};

export default Weekly;
