import { View, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import { Icon } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<TextInput>(null);
  return (
    <View className=" bg-[#5c5d71] w-full flex flex-row px-3.5 justify-between py-3">
      <View className="flex flex-row items-center gap-2">
        <Icon name="search" color="#a6a8b3" />
        <TextInput
          ref={inputRef}
          cursorColor={"white"}
          value={search}
          placeholderTextColor={"#919296"}
          className="    placeholder:font-semibold w-[75%]   text-white"
          placeholder="Search location ..."
          onSubmitEditing={() => {
            setSearch("");
          }}
          onChangeText={(input) => setSearch(input)}
        />
      </View>
      <View className="border-l pl-2 border-l-white py-1">
        <TouchableOpacity
          onPress={() => {
            if (inputRef.current) {
              inputRef.current.blur();
              inputRef.current.clear();
            }
          }}
        >
          <Icon color={"white"} name="near-me" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
