import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter1p3">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 1</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>Part 3</Text>
        <Text style={styles.storyText}>End of Chapter 1</Text>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("Chapter2p1")}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Chapter Selection"
          onPress={() => navigation.navigate("StoryPage")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
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
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  storyText: {
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 20,
    textAlign: "auto",
    letterSpacing: 0.8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
