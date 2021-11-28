import * as React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter1p1">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 1, Part One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Image
          source={require("../../assets/chapterImages/depositphotos_316482244-stock-photo.jpg")}
          style={styles.image}
        />
        <Text style={styles.storyText}>
          A woman lived in an apartment, just outside Borås. She had everything
          she could wish for. A wonderful boyfriend, a steady point in life, two
          wonderful cats and a really good set for the rig. Her computer could
          handle most things, and she had recently purchased a Wacom screen.
          This really has nothing to do with anything. But she could not wish
          for more in her life. The only thing missing, according to her, was a
          proper career. So she left her job, and set out to become a system
          developer. Programming was always something she found interesting and
          she had previously taken courses in both HTML and programming in C++.
          This would be the new challenge for her, and she would begin her
          journey towards the next step in her life.
        </Text>
        <Text style={styles.storyText}>
          The first step was quite simple. She applied to Borås Yrkeshögskola,
          and to TUC which was a digital school where all the courses where on
          distans. She got into both, but thought: "I actually want to meet
          people, attend lectures and make some new friends." So she declined
          TUC and set out for the real thing in Borås. It had been a bit of a
          struggle in the world, but nothing would stop her!
        </Text>
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter1p2")}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Chapter Selection"
          onPress={() => navigation.navigate("StoryPage")}
        />
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
  image: {
    width: 300,
    height: 300,
    marginHorizontal: 30,
    marginBottom: 10,
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
