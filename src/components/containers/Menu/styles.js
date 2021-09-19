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
    height: height * 0.17,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5
  },
  flatList: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'flex-start',
    paddingVertical: 5
  },
  flatListItem: {
    width: width * 0.45,
    height: height * 0.2,
    borderRadius: 15,
    elevation: 2,
    backgroundColor: themeStyleSheet.white,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: themeStyleSheet.lightgray,
    marginLeft: 15,
    padding: 5
  },
  itemName: {
    textAlign: 'center'
  }
});

export default styles;