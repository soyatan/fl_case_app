import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textDemo}>PROFILE PAGE </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDemo: { fontSize: 30 },

  scrollList: { marginTop: 16, flex: 1 },
  searchBar: {
    marginTop: 16,
    backgroundColor: "white",
  },
});
