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
    height: height * 0.275,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSubContainer: {
    backgroundColor: themeStyleSheet.lightgray,
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 10
  },
  image: {
    height: 150,
    width: 150
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: '500'
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
    alignItems: 'center'
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