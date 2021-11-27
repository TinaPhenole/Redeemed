import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 4,
    borderRadius: 20,
    height: 50,
    width: 300,
    backgroundColor: "grey",
  },
  text: {
    textAlign: "center",
  },
});
