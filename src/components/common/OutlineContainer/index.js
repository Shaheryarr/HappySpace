import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';

const OutlineContainer = ({children, lowerView}) => {
  return (
    <>
      <SafeAreaView style={styles.notchContainer} />
      <SafeAreaView style={styles.container}>
        <View style={styles.upperView}>{children}</View>
        <View style={styles.lowerView}>{lowerView}</View>
      </SafeAreaView>
    </>
  );
};

export default OutlineContainer;
