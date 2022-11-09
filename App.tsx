import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'

import { StatusBar } from 'expo-status-bar';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import theme from './src/theme'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style='light' />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
