import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Button from "../components/Button";
import { RootStackScreenProps } from "../types";

type Props = RootStackScreenProps<"StoryPage">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Chapter 1"
        onPress={() => navigation.navigate("Chapter1p1")}
      />
      <Button
        title="Chapter 2"
        onPress={() => navigation.navigate("Chapter2p1")}
      />
      <Button
        title="Chapter 3"
        onPress={() => navigation.navigate("Chapter3p1")}
      />
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
});
