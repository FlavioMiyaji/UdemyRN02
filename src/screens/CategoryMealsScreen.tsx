import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
    Meals,
    Categories,
} from '../data/dummy-data';
import { MealList } from '../components';
import { Meal, Category } from '../models';

const CatetgoryMealsScreen: NavigationStackScreenComponent = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = Meals.filter(
        ({ categoryIds }: Meal) => categoryIds.indexOf(categoryId) >= 0
    );

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

export default CatetgoryMealsScreen;
