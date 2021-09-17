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
    height: '15%', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subText: {
    color: themeStyleSheet.white,
    fontSize: 16,
    marginTop: 25
  },
  mainText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -30,
    alignSelf: 'center'
  }
});

export default styles;