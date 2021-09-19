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
    height: height * 0.13,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5
  },
  questionContainer: {
    backgroundColor: themeStyleSheet.mainColor,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    minHeight: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  question: {
    color: themeStyleSheet.white,
    fontSize: 18,
    textAlign: 'center'
  },
  answerContainer: {
    height: height * 0.35,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answerRow: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  answerTab: {
    backgroundColor: themeStyleSheet.white,
    height: '90%',
    width: '45%',
    elevation: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answerTabActive: {
    backgroundColor: themeStyleSheet.white,
    height: '90%',
    width: '45%',
    elevation: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeStyleSheet.mainColor
  },
  answerText: {
    width: '95%',
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButtonContainer: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;