import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarWeek,
  faCalendarDay,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "react-native";
import Currently from "./Currently";
import Today from "./Today";
import Weekly from "./Weekly";

interface TypesData {
  label: string;
  icon: any;
  component: () => React.JSX.Element;
}

const TabArr: TypesData[] = [
  { label: "Currently", icon: faGear, component: Currently },
  { label: "Today", icon: faCalendarDay, component: Today },
  { label: "Weekly", icon: faCalendarWeek, component: Weekly },
];

const Tab = createMaterialTopTabNavigator();

export default function BottomBar() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({ route }) => {
        const { icon, label } =
          TabArr.find((item) => item.label === route.name) || {};
        return {
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={icon} size={20} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12 }}>{label}</Text>
          ),
          tabBarActiveTintColor: "#607d8b",
          tabBarInactiveTintColor: "#9e9e9e",
          // this for bottom bar
          tabBarStyle: {
            backgroundColor: "#fefbff",
            height: 60,
          },
          // this for outline bottom
          tabBarIndicatorStyle: {
            backgroundColor: "#5b5d72",
            height: 2,
            width: "11%",
            left: "11%",
          },
          // this for icon and labele
          tabBarItemStyle: {
            padding: 5,
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarPressColor: "white",
        };
      }}
    >
      {TabArr.map((item) => (
        <Tab.Screen
          key={item.label}
          name={item.label}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}
