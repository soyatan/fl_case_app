import {
  Image,
  StyleSheet,
  Platform,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  Modal,
  View,
  Text,
  Pressable,
} from "react-native";
import crashlytics from "@react-native-firebase/crashlytics";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { ButtonGroup } from "@/components/ButtonGroup";
import { ListItem } from "@/components/ListItem";
import { router } from "expo-router";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const [selected, setselected] = useState("");
  const [filters, setfilters] = useState<"all" | "open" | "closed">("all");

  const selectItem = (id: string) => {
    if (selected === id) {
      setselected("");
    } else {
      setselected(id);
    }
  };

  const DATA = [
    {
      id: "asdasd123",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: true,
      selected: true,
    },
    {
      id: "asdasd121233",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: false,
      selected: true,
    },
    {
      id: "asdasd121231233",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: false,
      selected: true,
    },
    {
      id: "asdas123121233",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: false,
      selected: true,
    },
    {
      id: "asdasasdasdqwd121233",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: false,
      selected: true,
    },
    {
      id: "asdasd12asd1233",
      title: "First Item",

      numericInput: "string",
      textInput1: "string",
      textInput2: "string",
      textInput3: "string",
      numericInput2: "string",
      dateInput: "string",
      status: false,
      selected: true,
    },
  ];
  const navigateToId = (id: string, tab: "A" | "B" | "C") => {
    router.replace("/(tabs)/search2");
  };

  const closeFile = (id: string) => {
    console.log("close", id);
  };

  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
  >(Navigator);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Searchbar
        placeholder="Dosya ara"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        placeholderTextColor={"gray"}
      />
      <MaterialTopTabs>
        <MaterialTopTabs.Screen name="search2" options={{ title: "Tab One" }} />
        <MaterialTopTabs.Screen name="two" options={{ title: "Tab Two" }} />
      </MaterialTopTabs>
      <ButtonGroup filters={filters} setFilters={setfilters} />

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            navigateToId={navigateToId}
            closeFile={closeFile}
            selectItem={selectItem}
            selected={selected === item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.scrollList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
  },

  scrollList: { marginTop: 16, flex: 1 },
  searchBar: {
    marginTop: 16,
    backgroundColor: "white",
  },
});
