import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  price: string;
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function Card({ price, source, style, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.card_container, style]}>
      <Image resizeMode="cover" source={source} style={{ flex: 1 }} />
      <View style={styles.card_price}>
        <Text style={styles.card_price_text}>{price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    width: "50%",
    borderRadius: 20,
    overflow: "hidden",
  },
  card_price: {
    position: "absolute",
    left: 15,
    top: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.28)",
    borderRadius: 100,
  },
  card_price_text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
