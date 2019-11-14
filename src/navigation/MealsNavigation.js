import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
    CategoriesScreen,
    CategoryMealsScreen,
    MealDetailScreen,
    FavoritesScreen,
} from '../screens';
import { Colors } from '../constants';

const defaultStackNavigationOptions = {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.background,
        },
        headerTintColor: Platform.OS === 'android' ? Colors.onPrimary : Colors.primary,
    },
};

const MealsNavigation = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meal Categiries',
            },
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: {
            screen: MealDetailScreen,
        },
    }, defaultStackNavigationOptions
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: {
            screen: MealDetailScreen,
        },
    }, defaultStackNavigationOptions
);

const tabScreenContent = {
    Meals: {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Icon
                        solid
                        color={tabInfo.tintColor}
                        name="utensils"
                        size={20}
                    />
                );
            },
            tabBarColor: Colors.primary,
        },
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Icon
                        solid
                        color={tabInfo.tintColor}
                        name="star"
                        size={20}
                    />
                );
            },
            tabBarColor: Colors.primaryVariant,
        },
    },
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(
            tabScreenContent,
            {
                shifting: true,
                activeColor: Colors.backgroundColor,
                inactiveColor: Colors.backgroundColor,
                barStyle: { backgroundColor: Colors.primary, },
            }
        )
        : createBottomTabNavigator(
            tabScreenContent,
            {
                tabBarOptions: {
                    activeBackgroundColor: Colors.background,
                    activeTintColor: Colors.primary,
                    inactiveBackgroundColor: Colors.surface,
                    inactiveTintColor: Colors.primaryVariant,
                },
            }
        );

export default createAppContainer(MealsFavTabNavigator);
