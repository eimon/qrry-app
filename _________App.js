import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css"

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}