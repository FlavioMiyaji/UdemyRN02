import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import {
    CategoriesScreen,
    CategoryMealsScreen,
    MealDetailScreen,
} from '../screens';
import { Colors } from '../constants';

const MealsNavigation = createStackNavigator({
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
}, {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.background,
        },
        headerTintColor: Platform.OS === 'android' ? Colors.onPrimary : Colors.primary,
    },
});

export default createAppContainer(MealsNavigation);
