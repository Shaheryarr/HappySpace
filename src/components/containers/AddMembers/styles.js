import {StyleSheet, Dimensions} from 'react-native';
import {themeStyleSheet} from '../../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  inputView: {
    height: '99%',
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
  list: {
    width: '70%',
    height: '50%',
    alignSelf: 'center',
  },
  listItem: {
    padding: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignSelf: 'center',
    backgroundColor: themeStyleSheet.lightgray,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: themeStyleSheet.darkGray,
    flexWrap: 'wrap',
  },
  icon: {
    color: themeStyleSheet.darkGray,
  },
});

export default styles;
