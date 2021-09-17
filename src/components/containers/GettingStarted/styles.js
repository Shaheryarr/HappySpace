import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: themeStyleSheet.mainColor
  },
  topContainer: {
    height: '85%',
    backgroundColor: themeStyleSheet.white,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  bottomContainer: {
    height: '20%', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;