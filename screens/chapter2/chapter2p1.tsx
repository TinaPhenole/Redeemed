import * as React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter2p1">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 2, Part One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>
          The summer was finally over and she wiped her tears and went with her
          head first into the continuation of the HTML course. The first task
          went well, she followed along with the course and the classes. The
          last assignment was a group assignment and she thought "Finally! Now I
          get to know a little more people and I can prove that I belong here!
          ". The group was enormously welded to begin with, and it was noticed
          quite quickly that her knowledge was not the same as the other team
          members. The work and time she put in to get code and features was
          removed by the others, because "do we really need this?"
        </Text>
        <Text style={styles.storyText}>
          All attempts to contribiute, ended up with negative feed back from the
          others in the group. And the woman again felt stupid, and that she did
          not contribute to anything. Not even her knowledge of PS would save
          her this time. "What's the point of trying?" was a thought she often
          went to bed with.
        </Text>
        <Image
          source={require("../../assets/chapterImages/6735595_preview.jpg")}
          style={styles.image}
        />
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter2p2")}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Chapter Selection"
          onPress={() => navigation.navigate("StoryPage")}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
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
