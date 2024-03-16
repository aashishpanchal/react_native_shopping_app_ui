import React from "react";
import { useTheme } from "@react-navigation/native";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

type Props = {
  data: string[];
};

export default function CategoryTab({ data }: Props) {
  const ref = React.useRef<FlatList>(null);
  const { colors } = useTheme();

  const [categoryActive, setCategoryActive] = React.useState(0);

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index: categoryActive,
      viewPosition: 0.5,
      animated: true,
    });
  }, [categoryActive]);

  return (
    <FlatList
      ref={ref}
      data={data}
      horizontal
      initialScrollIndex={categoryActive}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingVertical: 2,
        gap: 12,
      }}
      renderItem={({ item, index }) => {
        const isSelected = categoryActive === index;
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.tab_btn,
              {
                backgroundColor: isSelected ? colors.primary : colors.card,
              },
            ]}
            onPress={() => setCategoryActive(index)}
          >
            <Text
              style={[
                styles.tab_btn_text,
                {
                  color: isSelected ? colors.background : colors.text,
                  opacity: isSelected ? 1 : 0.5,
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  tab_btn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
    elevation: 0.5,
  },
  tab_btn_text: {
    fontWeight: "500",
    fontSize: 14,
  },
});
