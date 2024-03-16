import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";
import DetailsScreen from "../screens/DetailScreen";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList> | undefined;
  Details: { id: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export default function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="TabsStack"
      screenOptions={{
        animation: "fade",
        headerShown: false,
      }}
    >
      <RootStack.Screen name="TabsStack" component={TabsNavigator} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
}
