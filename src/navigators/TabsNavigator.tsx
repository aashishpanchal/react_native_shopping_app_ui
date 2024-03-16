import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import CustomBottomTabs from "../components/CustomBottomTabs";
import ComingSoon from "../screens/ComingSoon";

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

export default function TabsNavigator() {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => <Icons name="home" {...props} />,
        }}
      />
      <TabStack.Screen
        name="Cart"
        component={ComingSoon}
        options={{
          tabBarIcon: (props) => <Icons name="shopping-cart" {...props} />,
        }}
      />
      <TabStack.Screen
        name="Payment"
        component={ComingSoon}
        options={{
          tabBarIcon: (props) => (
            <Icons name="account-balance-wallet" {...props} />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={ComingSoon}
        options={{
          tabBarIcon: (props) => <Icons name="person" {...props} />,
        }}
      />
    </TabStack.Navigator>
  );
}
