import {StyleSheet, Dimensions} from 'react-native';
import {themeStyleSheet} from '../../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  notchContainer: {
    flex: 0,
    backgroundColor: themeStyleSheet.white,
  },
  container: {
    flex: 1,
    backgroundColor: themeStyleSheet.mainColor,
    alignItems: 'center',
  },
  upperView: {
    backgroundColor: themeStyleSheet.white,
    height: height * 0.8,
    width,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'space-between',
  },
  lowerView: {
    width,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
