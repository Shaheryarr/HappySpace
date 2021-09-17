import React, { useState } from 'react';
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import styles from './styles';
import Button from '../../common/Buttons';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const GettingStarted = () => {

    let test = [{
        name: 'tes'
    }, {
        name: 'ss'
    }]

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselItem}>
                <Text>Here</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={test}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title={'Create Your Own Workspace'} />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.subText}>Already Registered? <Text style={styles.mainText}>Login</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default GettingStarted;