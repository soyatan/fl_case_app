import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

type Props = { title: string; selected: boolean; onPress: () => void };

export function FilterButton({ title, selected, onPress }: Props) {
  return (
    <Button
      style={styles.button}
      contentStyle={[
        styles.buttonContent,
        { backgroundColor: selected ? "#D5DDFB" : "#E8E8E8" },
      ]}
      labelStyle={styles.buttonText}
      textColor={selected ? "black" : "gray"}
      mode="outlined"
      onPress={onPress}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {},
  buttonContent: { width: 120 },
  buttonText: { fontSize: 14 },
});
