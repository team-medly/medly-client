import React from "react";
import { useColorScheme } from "react-native";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import MainDrawerNav from "./navigation/MainDrawerNav";
// import { persistor, store } from "./store/store";
import { darkTheme, lightTheme } from "./constants/Theme";
import { NavigationContainer } from "@react-navigation/native";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <NavigationContainer>
        <MainDrawerNav />
      </NavigationContainer>
    </ThemeProvider>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
