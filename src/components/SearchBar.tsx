import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IconButton from "./IconButton";
import { useTheme } from "@react-navigation/native";

type Props = { onPress: () => void };

export default function SearchBar({ onPress }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.search}>
      <TouchableOpacity
        style={[styles.search_btn, { borderColor: colors.border }]}
        activeOpacity={0.8}
      >
        <Icons name="search" size={24} color={colors.text} />
        <Text style={[styles.search_btn_text, { color: colors.text }]}>
          Search
        </Text>
      </TouchableOpacity>
      <IconButton
        theme="dark"
        icon={(props) => <Icons name="tune" {...props} />}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
  },
  search_btn: {
    flex: 1,
    height: 52,
    borderRadius: 52,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
    opacity: 0.5,
  },
  search_btn_text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.5,
  },
});
