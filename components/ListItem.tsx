import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import {
  createRef,
  LegacyRef,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import ModalDropdown from "react-native-modal-dropdown";
import {
  Image,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { OpenCloseButton } from "./OpenCloseButton";
import RNPickerSelect from "react-native-picker-select";

type Props = {
  item: ListItemProps;
  selectItem: (id: string) => void;
  selected: boolean;
  navigateToId: (id: string, tab: "A" | "B" | "C") => void;
  closeFile: (id: string) => void;
};

type ListItemProps = {
  id: string;
  title: string;
  numericInput: string;
  textInput1: string;
  textInput2: string;
  textInput3: string;
  numericInput2: string;
  dateInput: string;
  status: boolean;
  selected: boolean;
};

export function ListItem({
  selected,
  item,
  selectItem,
  navigateToId,
  closeFile,
}: Props) {
  const modalRef = useRef<ModalDropdown>(null);
  const navOptions = [
    "Dosya detayına git",
    "Dosyayı kapat",
    "Tab B'ye git",
    "Tab C'ye git",
  ];

  const onSelectItem = (idx: any) => {
    if (idx === 0) {
      navigateToId(item.id, "A");
    } else if (idx === 1) {
      closeFile(item.id);
    } else if (idx === 2) {
      navigateToId(item.id, "B");
    } else if (idx === 3) {
      navigateToId(item.id, "C");
    }
  };
  return (
    <Pressable
      key={item.id}
      onPress={() => selectItem(item.id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#EAEEFD" : " #E8E8E8" },
        { borderColor: selected ? "#2F54EB" : "gray" },
      ]}
    >
      <View style={styles.outerRow}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <Image
            style={styles.copyImage}
            source={require("../assets/images/content_copy.png")}
          />

          <OpenCloseButton status={item.status} />
        </View>
        <ModalDropdown
          options={navOptions}
          ref={modalRef}
          style={styles.dropdown_4}
          dropdownStyle={styles.dropdown_4_dropdown}
          dropdownTextStyle={styles.modalText}
          //defaultValue={this.state.dropdown_4_defaultValue}
          //onDropdownWillShow={() => modalRef.current?.show?.()}

          onSelect={(idx, value) => onSelectItem(idx)}
        >
          <Pressable
            onPress={() => modalRef.current?.show?.()}
            style={styles.dotContainer}
          >
            <Image
              style={styles.copyImage}
              source={require("../assets/images/more_vert.png")}
            />
          </Pressable>
        </ModalDropdown>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.grayText}>{item.numericInput}</Text>
        <View style={styles.dotSep} />
        <Text style={styles.grayText}>{item.textInput1}</Text>
        <Image
          style={styles.copyImage}
          source={require("../assets/images/content_copy.png")}
        />
      </View>
      <View
        style={[
          styles.seperator,
          { borderColor: selected ? "#2F54EB" : "gray" },
        ]}
      ></View>
      <View style={styles.secondRow}>
        <Text style={styles.grayText}>{item.textInput2}</Text>
        <View style={styles.dotSep} />
        <Text style={styles.grayText}>{item.textInput3}</Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.grayText}>{item.numericInput2}</Text>
        <View style={styles.dotSep} />
        <Text style={styles.grayText}>{item.dateInput}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 6,
    borderWidth: 1,
    borderRadius: 16,
  },
  modalText: {
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  dropdown_4: {
    margin: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 150,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalView: {
    marginLeft: 100,

    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  seperator: {
    borderWidth: 1,
    marginTop: 14,
    marginBottom: 12,
    borderStyle: "dashed",
  },
  copyImage: {},
  dotContainer: {
    borderWidth: 1,
    backgroundColor: "#2F54EB",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",

    width: 30,
    height: 30,
    borderRadius: 100,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  dotSep: { width: 5, height: 5, backgroundColor: "gray", borderRadius: 5 },
  outerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  grayText: {
    fontSize: 16,
    fontWeight: 400,
    color: "gray",
  },
});
