import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    inputContainer: {
        height: 60,
        width: width * 0.85,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: themeStyleSheet.mainColor,
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 18,
        paddingVertical: 0,
    },
    labelStyle: {
        marginLeft: 10,
        fontSize: 10,
        marginBottom: 5,
    }
});

export default styles;