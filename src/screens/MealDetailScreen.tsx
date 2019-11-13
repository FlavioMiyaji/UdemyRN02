import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Meals } from '../data/dummy-data';

const MealDetailScreen: NavigationStackScreenComponent = props => {
    const mealId = props.navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {}
    }
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go Baco to Caregories"
                onPress={() => props.navigation.popToTop()}
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    const mealId = navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {}
    }
    return {
        headerTitle: selectedMeal.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;
