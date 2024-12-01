import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { FilterButton } from "./FilterButton";

type Props = {
  filters: "open" | "closed" | "all";
  setFilters: (filter: "open" | "closed" | "all") => void;
};

export function ButtonGroup({ filters, setFilters }: Props) {
  return (
    <View style={styles.buttonGroup}>
      <FilterButton
        onPress={() => setFilters("all")}
        title="Tümü"
        selected={filters === "all"}
      />
      <FilterButton
        onPress={() => setFilters("open")}
        title="Açık"
        selected={filters === "open"}
      />
      <FilterButton
        onPress={() => setFilters("closed")}
        title="Kapalı"
        selected={filters === "closed"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    marginTop: 15,

    justifyContent: "space-between",
  },
});
