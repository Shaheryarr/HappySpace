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
  imageContainer: {
    height: '40%',
    backgroundColor: themeStyleSheet.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingContainer: {
    height: '23%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10
  },
  buttonContainer: {
    height: '37%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  secondButton: {
    marginVertical: 10
  }
});

export default styles;