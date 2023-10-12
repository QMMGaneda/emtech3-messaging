import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Status from "./components/Status";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Status/>

        <View style={styles.content}>
          <Text>Content</Text>
        </View>

        <View style={styles.toolbar}>
          <Text>Toolbar</Text>
        </View>

        <View style={styles.inputMethodEditor}>
          <Text>Input Method Editor</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.04)",
    backgroundColor: "#fff",
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // androidStatusBar: {
  //   barStyle: "dark-content",
  //   backgroundColor: "#FFFFFF"
  // },
});
