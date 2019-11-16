import React from 'react';
import {
    Text,
    Platform,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    CategoriesScreen,
    CategoryMealsScreen,
    MealDetailScreen,
    FavoritesScreen,
    FiltersScreen,
} from '../screens';
import { Colors, Fonts } from '../constants';

const defaultNavOptions = {
    headerTitleStyle: {
        fontFamily: Fonts.bold,
    },
    HeaderBackTitleStyle: {
        fontFamily: Fonts.regular,
    },
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.background,
    },
    headerTintColor: Platform.OS === 'android' ? Colors.onPrimary : Colors.primary,
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
    }, { defaultNavigationOptions: defaultNavOptions, }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: {
            screen: MealDetailScreen,
        },
    }, { defaultNavigationOptions: defaultNavOptions, }
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: Fonts.bold }}>Meals</Text> : 'Meals',
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: Fonts.bold }}>Favorites</Text> : 'Favorites',
        }
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
                    labelStyle: {
                        fontFamily: Fonts.bold,
                    },
                    activeBackgroundColor: Colors.background,
                    activeTintColor: Colors.primary,
                    inactiveBackgroundColor: Colors.surface,
                    inactiveTintColor: Colors.primaryVariant,
                },
            }
        );

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen,
    },
    {
        navigationOptions: {
            drawerLabel: 'Go to Filters',
            drawerIcon: (drawerInfo) => {
                return (
                    <Icon
                        solid
                        color={drawerInfo.tintColor}
                        name="filter"
                        size={20}
                    />
                );
            }
        },
        defaultNavigationOptions: defaultNavOptions,
    },
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Go to Meals',
                drawerIcon: (drawerInfo) => {
                    return (
                        <Icon
                            solid
                            color={drawerInfo.tintColor}
                            name="utensils"
                            size={20}
                        />
                    );
                }
            },
        },
        Filters: FiltersNavigator,
    },
    {
        drawerBackgroundColor: Colors.background,
        contentOptions: {
            activeBackgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.background,
            activeTintColor: Platform.OS === 'android' ? Colors.onPrimary : Colors.primary,
            inactiveBackgroundColor: Platform.OS === 'android' ? Colors.primaryVariant : Colors.background,
            inactiveTintColor: Platform.OS === 'android' ? Colors.onPrimaryVariant : Colors.primaryVariant,
            itemsContainerStyle: {
                flex: 1,
                backgroundColor: Colors.surface,
            },
        },
    }
);

export default createAppContainer(MainNavigator);
