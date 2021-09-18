import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headingContainer: {
    height: height * 0.1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: themeStyleSheet.lightgray,
    backgroundColor: themeStyleSheet.white
  },
  heading: {
    fontSize: 22,
    fontWeight: '700'
  },
  profileContainer: {
    height: 45,
    width: 45,
    backgroundColor: themeStyleSheet.mainColor,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    color: themeStyleSheet.white,
    fontSize: 16
  },
  notchContainer: {
    flex: 0,
    backgroundColor: themeStyleSheet.white,
  },
  mainContainer: {
    flex: 1,
  },
  fabContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25
  },
});

export default styles;