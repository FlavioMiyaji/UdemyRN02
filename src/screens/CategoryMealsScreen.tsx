import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
    View, StyleSheet,
} from 'react-native';
import { Categories } from '../data/dummy-data';
import { MealList, DefaultText } from '../components';
import { Meal, Category } from '../models';
import { Colors } from '../constants';

const CatetgoryMealsScreen: NavigationStackScreenComponent = props => {
    const categoryId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector((state: any) => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        ({ categoryIds }: Meal) => categoryIds.indexOf(categoryId) >= 0
    );

    if (!displayedMeals || displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText style={styles.text}>
                    No meals found, maybe check your filters?
                </DefaultText>
            </View>
        );
    }
    return (
        <MealList
            data={displayedMeals}
            navigation={props.navigation}
        />
    );
};

CatetgoryMealsScreen.navigationOptions = ({ navigation }: any) => {
    const categoryId = navigation.getParam('categoryId');
    const selectedCategory = Categories.find(({ id }: Category) => id === categoryId);
    return {
        headerTitle: selectedCategory ? selectedCategory.title : 'Meals',
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: Colors.onBackground,
        textAlign: 'center',
    },
});

export default CatetgoryMealsScreen;
