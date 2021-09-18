import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    mainContainer: {
        width,
        height: height * 0.1,
        flexDirection: 'row'
    },
    firstIconContainer: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: themeStyleSheet.mainColor
    },
    headingContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    heading: {
        color: themeStyleSheet.mainColor,
        fontSize: 18,
        // fontWeight: '700'
    }
});

export default styles;