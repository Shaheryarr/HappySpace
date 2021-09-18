import {StyleSheet, Dimensions} from 'react-native';
import {themeStyleSheet} from '../../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  inputView: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {
    textAlign: 'left',
    width: width * 0.8,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  subHeading: {
    textAlign: 'left',
    width: width * 0.8,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotText: {
    textAlign: 'left',
    width: width * 0.8,
    fontSize: 16,
    color: themeStyleSheet.mainColor,
    fontWeight: 'bold',
  },
  loginText: {
    color: themeStyleSheet.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
