import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  notchContainer: {
    flex: 0,
    backgroundColor: themeStyleSheet.white,
  },
  mainContainer: {
    flex: 1,
  },
  postContainer: {
    width: width,
    padding: 15,
    borderTopWidth: 0.5,
    borderColor: themeStyleSheet.lightgray,
    flexDirection: 'row',
    // alignItems: 'center'
  },
  postFirstRow: {
    width: '15%',
    height: height * 0.075,
    justifyContent: 'center',
    alignItems: 'center'
  },
  initialContainer: {
    backgroundColor: themeStyleSheet.mainColor,
    width: 50,
    height: 50, 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  initialText: {
    color: themeStyleSheet.white,
    fontSize: 18
  },
  postSecondRow: {
    marginLeft: 5,
    width: '85%'
  },
  textInputContainer: {
    fontSize: 18,
    width: '100%'
  },
  uploadImageContainer: {
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 25,
    position: 'absolute'
  },
  uploadImageIconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: themeStyleSheet.mainColor
  },
  uploadImageIcon: {
    height: 50,
    width: 50,
    backgroundColor: themeStyleSheet.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  imageText: {
    fontSize: 16
  }
});

export default styles;