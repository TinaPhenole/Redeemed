import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter1p3">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 1, Part three</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>
          The help disappeared, it got warmer outside, and summer crept around
          the corner. The woman was now behind in two courses, the HTML course,
          and the OOP specialization course. The energy was no longer there and
          despair, anxiety and demoralization crept upon her. Maybe she was too
          dumb to continue? The meeting with the course leader, Henrik, gave
          little consolation, and was compromised that during the summer the
          woman could focus on what she had fallen behind on, and come back on
          strong legs. Unfortunately she spent the summer with doubt and
          exhaustion. She simply did not have the energy to do any of the things
          she was set out to do.
        </Text>
        <Text style={styles.storyText}>
          This is where she quit her job, which she hated, for good. She
          consoled herself that they did not appreciate her and that was the
          right thing to do. But she was forced to work her last three weeks
          there with colleagues who wished she would fail. With comments like
          "You will come back anyway" and "That's probably too hard for you."
          When those doors closed behind her for the last time, she was as
          relieved as she extremly distressed.
        </Text>
        <Text style={styles.storyText}>End of Chapter 1</Text>
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter2p1")}
          />
        </View>
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
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
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
