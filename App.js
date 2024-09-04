import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Inicial from "./src/telas/inicial";
import Login from "./src/telas/login";
import Cadastro from "./src/telas/cadastro";
import Redefinir from "./src/telas/redefinir";
import Home from "./src/telas/home";
import Profile from "./src/telas/profile";
import Box from "./src/telas/box";


import { Entypo, Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Inicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Senha"
          component={Redefinir}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {() => (

            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                  position: "absolute",
                  backgroundColor: "transparent",
                  borderTopWidth: 0,
                  elevation: 0,
                  height: 80,
                  backgroundColor: "#38a69d",
                  borderTopColor: "transparent",
                  borderRadius: 15,
                  margin: 20,
                  right: 0,
                  left: 0,

                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "black",
                tabBarIconStyle: {

                },
                tabBarLabelStyle: {
                  fontSize: 13,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                  marginBottom: 5,
                  resolution: 1.5
                }
              }}
            >
              <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                  tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                      name="truck-delivery"
                      size={size}
                      color={color}
                    />
                  ),
                }}

              />
              <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                  tabBarIcon: ({ size, color }) => (
                    <Feather name="users" size={24} color={color} />

                  )
                }}

              />
              <Tab.Screen
                name="Box"
                component={Box}
                options={{
                  tabBarIcon: ({ size, color }) => (
                    <Feather
                      name="box"
                      size={size}
                      color={color}
                    />
                  ),
                }}

              />
            </Tab.Navigator>

          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}