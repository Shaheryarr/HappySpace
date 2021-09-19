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
  headingContainer: {
    height: height * 0.12,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5
  },
  buttonContainer: {
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemContainer: {
    width: width * 0.9,
    height: height * 0.1,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: themeStyleSheet.lightgray,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemContainerSelected: {
    width: width * 0.9,
    height: height * 0.1,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: themeStyleSheet.mainColor,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemInitialContainer: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemMainContainer: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listItemInitial: {
    backgroundColor: themeStyleSheet.lightgray,
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  listItemInitialSelected: {
    backgroundColor: themeStyleSheet.mainColor,
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  listMainText: {
    color: themeStyleSheet.white,
    fontSize: 16,
  },
  image: {
    height: 55,
    width: 55,
  }
});

export default styles;