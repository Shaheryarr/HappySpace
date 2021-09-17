import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 35,
        overflow: 'hidden',
    },
    container: {
        height: height * 0.08,
        paddingHorizontal: 25,
        // width: width * 0.7,
        backgroundColor: themeStyleSheet.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        elevation: 1,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themeStyleSheet.mainColor
    }
});

export default styles;