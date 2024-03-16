import { useMemo } from "react";
import deepmerge from "deepmerge";
import RootNavigator from "./navigators/RootNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

export default function MyApp() {
  const theme = useMemo(
    () =>
      deepmerge(DefaultTheme, {
        colors: {
          background: "#F5F5F5",
          text: "#191919",
          border: "#D9D9D9",
          primary: "#191919",
        },
      }),
    []
  );

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
