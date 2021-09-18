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
    backgroundColor: themeStyleSheet.mainColor
  },
  topContainer: {
    height: '85%',
    backgroundColor: themeStyleSheet.white,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  bottomContainer: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: themeStyleSheet.white,
    fontSize: 16
  },
  mainText: {
    fontWeight: 'bold'
  },
  secondaryContainer: {
    width: '90%',
    alignSelf: 'center',
    height: height * 0.15,
    justifyContent: 'center'
  },
  otpHeading: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5
  },
  buttonContainer: {
    height: height * 0.12,
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
    alignItems: 'center'
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
    alignItems: 'center'
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
    borderRadius: 55/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemInitialSelected: {
    backgroundColor: themeStyleSheet.mainColor,
    height: 55,
    width: 55,
    borderRadius: 55/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listMainText: {
    color: themeStyleSheet.white,
    fontSize: 16,
  }
});

export default styles;