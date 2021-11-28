import * as React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter1p2">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 1, Part Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>
          When Covid-19 hit the city she was moving to, all schools closed. The
          courses would be held on discord. "It does not matter," she thought.
          "This will go well anyway, it's nothing we havn't done before." But
          time has shown that it became harder and harder for her to keep up
          with the courses. She began to fall behind. After a while, she had to
          swallow her pride to try on her own and therefore asked the school
          help. And she got help. A noble man aka Housepainter, stood up and
          took care of her and explained everything she did not understand. They
          met digitally every Wednesday between 8 pm and 10 pm. After a while,
          it started to feel like she was actually catching up. As if she
          understood them new languages and followed along the material. She
          began to feel less stupid and useless.
        </Text>
        <Image
          source={require("../../assets/chapterImages/istockphoto-1254678283-170667a.jpg")}
          style={styles.image}
        />
        <Text style={styles.storyText}>
          So one day, after a particularly difficult lecture, it did not feel so
          great. She took a personal day and ignored that day's online lecture.
          That Wednesday, when she met up again with her mentor, she was met
          with pure disappointment and frustration from her mentor. He had lost
          confidence in her and said that he could not be there for her anymore,
          and to explain things she should have learned during the lectures.
        </Text>
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter1p3")}
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
