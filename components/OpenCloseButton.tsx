import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

type Props = { status: boolean };

export function OpenCloseButton({ status }: Props) {
  if (status) {
    return (
      <View style={styles.button}>
        <Text style={styles.openText}>{"Açık"}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.closedButton}>
        <Text style={styles.closeText}>{"Kapandı"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: "#2F54EB",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 100,
  },
  closedButton: {
    borderWidth: 2,
    borderColor: "#22C55E",

    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 100,
  },
  openText: { fontSize: 15, fontWeight: 500, color: "white" },
  closeText: { fontSize: 15, color: "#22C55E", fontWeight: 500 },
  buttonContent: { width: 120 },
  buttonText: { fontSize: 14 },
});
