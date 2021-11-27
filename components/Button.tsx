import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Text } from "./Themed";

interface Props {
  title: string;
  onPress: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    height: 20,
    width: 50,
  },
  text: {
    textAlign: "center",
  },
});
