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
        backgroundColor: themeStyleSheet.white,
        alignItems: 'center'
    },
    headingContainer: {
		height: height * 0.1,
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderColor: themeStyleSheet.lightgray,
		backgroundColor: themeStyleSheet.white,
		marginBottom: 10,
	},
	heading: {
		fontSize: 22,
		fontWeight: '700'
	},
	profileContainer: {
		height: 45,
		width: 45,
		backgroundColor: themeStyleSheet.mainColor,
		borderRadius: 45 / 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	profileText: {
		color: themeStyleSheet.white,
		fontSize: 16
	},
	notchContainer: {
		flex: 0,
		backgroundColor: themeStyleSheet.white,
	},
	mainContainer: {
		flex: 1,
	},
	fabContainer: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 25
	},
	authorRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	modalContainer: {
		backgroundColor: themeStyleSheet.white,
		width: width,
		borderRadius: 20,
		alignItems: 'center'
	},
	bottomList: {
		marginBottom: 100
	},
	postContainer: {
		width: width,
		alignSelf: 'center',
		backgroundColor: themeStyleSheet.white,
		marginBottom: 10,
        flex: 1,
        justifyContent: 'space-between'
	},
	innerPost: {
		width: width * 0.9,
		alignSelf: 'center',
		paddingVertical: 15,
	},
	author: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	authorName: {
		marginLeft: 10,
		fontWeight: 'bold',
		fontSize: 16
	},
	editDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '17%',
	},
	contentContainer: {
		marginVertical: 30,
	},
	img: {
		height: 250,
		width,
		marginVertical: 20
	},
	reactionInfo: {
		width,
		marginTop: 15,
        borderBottomWidth: 0.25,
        alignSelf: 'center'
	},
	align: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	likeCommentContainer: {
		width,
		alignSelf: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		// marginTop: 15,
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: themeStyleSheet.lightgray,
		paddingVertical: 13,
	},
	likeBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%'
	}
});

export default styles;