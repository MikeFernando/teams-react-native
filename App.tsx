import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "src/theme";

import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light" />
      {fontLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
