import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Menu = ({ navigation }) => {

    const activities = [{
        name: 'How much do you know them?',
        image: null,
        screen: 'Quiz'
    }]

    const handleNavigation = (item) => {
        navigation.navigate(item.screen)
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.flatListItem} onPress={() => handleNavigation(item)}>
                <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
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