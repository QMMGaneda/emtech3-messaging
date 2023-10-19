import Constants from "expo-constants";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import React from "react";

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  componentDidMount() {
    NetInfo.fetch().then((state) => {
      this.setState({ isConnected: state.isConnected });
    });

    this.unsubscribe = NetInfo.addEventListener((state) => {
      this.setState({ isConnected: state.isConnected });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { isConnected } = this.state;
    const backgroundColor = isConnected ? "blue" : "red";

    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? "dark-content" : "light-content"}
        animated={false}
      />
    );

    if (Platform.OS === "ios") {
      return (
        <View style={[styles.status, { backgroundColor }]}>{statusBar}</View>
      );
    }

    return statusBar;
  }
}

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight,
  },
});
