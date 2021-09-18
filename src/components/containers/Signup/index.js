import React, { useState } from 'react';
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import { themeStyleSheet } from '../../../constants';
import PasswordField from '../../common/PasswordField';
import TextField from '../../common/TextField';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Signup = ({ navigation, dispatch }) => {
	return (
		<>
			<SafeAreaView style={{ flex: 0, backgroundColor: themeStyleSheet.white }} />
			<SafeAreaView style={styles.container}>
				<View
					style={{
						backgroundColor: themeStyleSheet.white,
						height: height * 0.8,
						width,
						borderBottomLeftRadius: 35,
						borderBottomRightRadius: 35,
						justifyContent: 'space-between',
					}}>
					<View
						style={{
							height: '80%',
							// backgroundColor: the,
							alignItems: 'center',
							justifyContent: 'space-evenly',
							// width: width * 0.8,
						}}>
						<Text
							style={{
								textAlign: 'left',
								width: width * 0.8,
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Welcome To Happy Space
            </Text>
						<Text
							style={{
								textAlign: 'left',
								width: width * 0.8,
								fontSize: 16,
							}}>
							Join a workspace to stay happy
            </Text>
						<TextField
							placeholder="Enter Name"
							placeholderTextColor={themeStyleSheet.lightgray}
							label={'Full Name'}
						/>
						<TextField
							placeholder="Enter Email Address"
							placeholderTextColor={themeStyleSheet.lightgray}
							label={'Email Address'}
						/>
						<PasswordField
							placeholder="Enter Password"
							placeholderTextColor={themeStyleSheet.lightgray}
							label={'Password'}
						/>
						<PasswordField
							placeholder="Enter Password Again"
							placeholderTextColor={themeStyleSheet.lightgray}
							label={'Confirm Password'}
						/>
						<TextField
							placeholder="Enter Workspace"
							placeholderTextColor={themeStyleSheet.lightgray}
							label={'Workspace'}
						/>
					</View>
					<View />
				</View>
				<View
					style={{
						width,
						paddingVertical: 20,
					}}>
					<Text>asd</Text>
				</View>
			</SafeAreaView>
		</>
	);
};

export default Signup;
