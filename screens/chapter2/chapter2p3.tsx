import * as React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter2p3">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 2, Part Three</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>
          She is aware that she is leaving things to the last minute, and easily
          gives up before she even tried. All and all, she listens too much to
          what others thinks and says about her, and likes to paint scenarios in
          her own head, which is much bigger and more complicated than the
          reallity is. She is too proud to ask for help and insanely too easily
          influenced by external factors. She has almost lost all effort to try.
        </Text>
        <Text style={styles.storyText}>
          The moral of the story: Do not let others influence what you want to
          do with your life. Because in the end, only you will live it.
        </Text>
        <Image
          source={require("../../assets/chapterImages/istockphoto-1021755694-612x612.jpg")}
          style={styles.image}
        />
        <Text style={styles.storyText}>The End .... for now.</Text>
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
