import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import {
    CategoriesScreen,
    CategoryMealsScreen,
    MealDetailScreen,
} from '../screens';

const MealsNavigation = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: {
        screen: MealDetailScreen,
    }
});

export default createAppContainer(MealsNavigation);
