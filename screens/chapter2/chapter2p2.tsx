import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter2p2">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 2, Part Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>
          The next course did not get better. The new group she ended up in were
          quite passionate about what they wanted to create and this could lead
          to heated discussions. Something the woman could no longer withstand.
          Her attitude had now completely changed from "This is what I want and
          I will change my life with this" to "Am I really in the right place?".
          She still wanted to be a system developer, a front-end programmer, but
          without the knowledge and motivation, everything felt like it was too
          much and overwhelming.
        </Text>
        <Text style={styles.storyText}>
          She started putting more and more off, of things and assignments she
          wanted to hand in. Unconsciously sabotaged for herself. Did not
          participate in any activities that had to do with school and
          relinquish next to all forms of responsibility at home. Unfortunately,
          this woman's story has no really happy ending ... yet.
        </Text>
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter2p3")}
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
