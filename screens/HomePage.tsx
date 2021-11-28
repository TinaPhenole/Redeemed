import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomePage({
  navigation,
}: RootTabScreenProps<"HomePage">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        style={styles.spreadText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Welcome to my visuall story app!{" "}
      </Text>

      <Text
        style={styles.content}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This app contains a short story about my life. Down in the bottom
        navigation tab you can go directly to the storys page where you can
        select the story you wish you read.{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  spreadText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  content: {
    marginTop: 20,
    marginHorizontal: 30,
    fontSize: 15,
    textAlign: "center",
  },
});
