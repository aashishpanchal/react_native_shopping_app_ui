import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      "clamp"
    )})`,
  }));

  // styles
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style]
  );

  const blurViewProps = useAnimatedProps(() => {
    return {
      intensity: interpolate(animatedIndex.value, [-1, 0], [0, 50], "clamp"),
    };
  });

  return (
    <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
  );
};

export default CustomBackdrop;
