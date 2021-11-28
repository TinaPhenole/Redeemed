import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomePage from "../screens/HomePage";
import StoryPage from "../screens/StoryPage";
import Chapter1p1 from "../screens/chapter1/chapter1p1";
import Chapter1p2 from "../screens/chapter1/chapter1p2";
import Chapter1p3 from "../screens/chapter1/chapter1p3";
import Chapter2p1 from "../screens/chapter2/chapter2p1";
import Chapter2p2 from "../screens/chapter2/chapter2p2";
import Chapter2p3 from "../screens/chapter2/chapter2p3";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Chapter1p1"
          component={Chapter1p1}
          options={{ title: "Chapter 1" }}
        />
        <Stack.Screen
          name="Chapter1p2"
          component={Chapter1p2}
          options={{ title: "Chapter 1" }}
        />
        <Stack.Screen
          name="Chapter1p3"
          component={Chapter1p3}
          options={{ title: "Chapter 1" }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Chapter2p1"
          component={Chapter2p1}
          options={{ title: "Chapter 2" }}
        />
        <Stack.Screen
          name="Chapter2p2"
          component={Chapter2p2}
          options={{ title: "Chapter 2" }}
        />
        <Stack.Screen
          name="Chapter2p3"
          component={Chapter2p3}
          options={{ title: "Chapter 2" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomePage"
        component={HomePage}
        options={({ navigation }: RootTabScreenProps<"HomePage">) => ({
          title: "Home Page",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="StoryPage"
        component={StoryPage}
        options={{
          title: "Stories",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
