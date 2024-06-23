import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./components/BottomTabs";
import Search from "./components/Search";
import { StatusBar } from "react-native";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    StatusBar.setBackgroundColor("#5c5d71", false);
    StatusBar.setBarStyle("light-content");
  }, []);
  
  return (
    <SafeAreaProvider className="flex-1 min-h-screen w-screen h-screen">
      <NavigationContainer independent={true}>
        <Search />
        <BottomBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
