import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { RootStackScreenProps } from "../../types";

type Props = RootStackScreenProps<"Chapter3p1">;

export default function StoryPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 3</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <Text style={styles.storyText}>C.3 Part 1</Text>
        <Text style={styles.storyText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          iure doloribus, hic, praesentium repudiandae sunt ipsum, dignissimos
          rem deleniti enim dolorem! Unde asperiores dicta vero repellendus
          autem, sequi culpa repellat. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusantium iure doloribus, hic, praesentium
          repudiandae sunt ipsum, dignissimos rem deleniti enim dolorem! Unde
          asperiores dicta vero repellendus autem, sequi culpa repellat. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure
          doloribus, hic, praesentium repudiandae sunt ipsum, dignissimos rem
          deleniti enim dolorem! Unde asperiores dicta vero repellendus autem,
          sequi culpa repellat. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusantium iure doloribus, hic, praesentium
          repudiandae sunt ipsum, dignissimos rem deleniti enim dolorem! Unde
          asperiores dicta vero repellendus autem, sequi culpa repellat. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure
          doloribus, hic, praesentium repudiandae sunt ipsum, dignissimos rem
          deleniti enim dolorem! Unde asperiores dicta vero repellendus autem,
          sequi culpa repellat.
        </Text>
        <View style={styles.centerItems}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Chapter3p2")}
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
