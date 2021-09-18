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
        width: '40%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    heading: {
        fontSize: 18,
        fontWeight: '500',
        // color: themeStyleSheet.mainColor
    },
    secondIconContainer: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveContainer: {
        backgroundColor: themeStyleSheet.mainColor,
        height: '50%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    saveText: {
        color: themeStyleSheet.white
    }
});

export default styles;