import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const Menu = () => {
    
    const activities = [{
        name: 'How much do you know them?',
        image: null
    }]

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.flatListItem}>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Select an Activity</Text>
                    <Text>Please select an activity you would like to enjoy with your colleagues</Text>
                </View>

                <FlatList
                    data={activities}
                    keyExtractor={(item, index) => item.name}
                    contentContainerStyle={styles.flatList}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </>
    )
}

export default Menu;