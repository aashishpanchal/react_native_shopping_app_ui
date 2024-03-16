import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  icon: (props: { size: number; color: string }) => JSX.Element;
  theme?: "light" | "dark";
  onPress?: () => void;
};

export default function IconButton({ icon, theme = "light", onPress }: Props) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.icon_btn,
        {
          backgroundColor:
            theme === "light" ? colors.background : colors.primary,
          borderWidth: theme === "light" ? 1 : 0,
          borderColor: theme === "light" ? colors.border : undefined,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon({
        size: 24,
        color: theme === "light" ? colors.primary : colors.background,
      })}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon_btn: {
    width: 52,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 52,
  },
});
