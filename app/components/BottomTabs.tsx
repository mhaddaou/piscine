import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarWeek, faCalendarDay, faGear } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native';
import Currently from "./Currently";
import Today from "./Today";
import Weekly from "./Weekly";

interface ArrayInter {
    route: string;
    label: string;
    icon: any;
    component: React.ComponentType<any>;
}

const TabArr: ArrayInter[] = [
    { route: 'Med', label: 'Currently', icon: faGear, component: Currently },
    { route: 'Had', label: 'Today', icon: faCalendarDay, component: Today },
    { route: 'Last', label: 'Weekly', icon: faCalendarWeek, component: Weekly }
];

const Tab = createMaterialTopTabNavigator();

export default function BottomBar() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={({ route }) => {
                const { icon, label } = TabArr.find(item => item.route === route.name) || {};
                return {
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={icon} size={20} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color, fontSize: 12 }}>{label}</Text>
                    ),
                    tabBarActiveTintColor: '#607d8b',
                    tabBarInactiveTintColor: '#9e9e9e',
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        backgroundColor: '#fefbff',
                        height: 60,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#5b5d72',
                        height: 2,
                        width: '11%',
                        left: '11%'
                       
                    },
                    tabBarItemStyle: {
                        padding: 5,
                        flexDirection: 'column', // Ensures icon and label are in a row
                        alignItems: 'center', // Centers them vertically
                        justifyContent: 'center',
                    },
                    
                    tabBarPressColor: 'white'
                };
            }}
        >
            {TabArr.map((item) => (
                <Tab.Screen
                    key={item.route}
                    name={item.route}
                    component={item.component}
                />
            ))}
        </Tab.Navigator>
    );
}
