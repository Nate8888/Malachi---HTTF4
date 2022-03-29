import React from 'react'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/home'
import MyPlans from '../screens/my-plans'
import Browse from '../screens/browse'

import { colors } from '../styles/global'

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator(props) {
    console.log("BottomTabsNavigator props:")
    console.log(props)
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === 'My Plans'){
                            iconName = focused ? 'list-circle-sharp' : 'list-circle-outline'
                        }else {
                            iconName = focused ? 'search-circle-sharp' : 'search-circle-outline'
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: colors.g,
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false, backgroundColor: "red" }}
                />
                <Tab.Screen
                    name="My Plans"
                    component={MyPlans}
                    options={{ headerShown: false }}
                    initialParams={{ openCloseCreatePlanModal: props.openCloseCreatePlanModal }}
                />
                <Tab.Screen
                    name="Browse"
                    component={Browse}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// children={props => <MyPlans openCloseCreatePlanModal={props.openCloseCreatePlanModal} />}
