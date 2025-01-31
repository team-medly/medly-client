import { createDrawerNavigator } from "@react-navigation/drawer";

import MainStackNav from "./MainStackNav";
import EntryStackNav from "./EntryStackNav";

const Drawer = createDrawerNavigator();

export default function MainDrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
    >
      {true ? (
        <Drawer.Screen name="MainStack" component={MainStackNav} />
      ) : (
        <Drawer.Screen name="EntryStack" component={EntryStackNav} />
      )}
    </Drawer.Navigator>
  );
}
