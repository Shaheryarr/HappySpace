import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    notchContainer: {
        flex: 0,
        backgroundColor: themeStyleSheet.white,
    },
    container: {
        flex: 1,
        backgroundColor: themeStyleSheet.mainColor,
        alignItems: 'center'
    },
    upperView: {
        backgroundColor: themeStyleSheet.white,
        height: height * 0.8,
        width,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        justifyContent: "space-between"
    },
    inputView: {
        height: '65%',
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    heading: {
        textAlign: 'left',
        width: width * 0.8,
        fontSize: 30,
        fontWeight: 'bold'
    },
    subHeading: {
        textAlign: 'left',
        width: width * 0.8,
        fontSize: 16,
    },
    forgotText: {
        textAlign: 'left',
        width: width * 0.8,
        fontSize: 16,
        color: themeStyleSheet.mainColor,
        fontWeight: 'bold'
    },
    lowerView: {
        width,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerText: {
        color: themeStyleSheet.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    otpContainer: {
        width: '90%',
    },
    codeContainer: {
        borderWidth: 3,
        borderRadius: 15,
    },
    mainOtpContainer: {
        height: height * 0.12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;