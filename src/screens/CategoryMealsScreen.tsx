import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
    Meals,
    Categories,
} from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CatetgoryMealsScreen: NavigationStackScreenComponent = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = Meals.filter(
        ({ categoryIds }) => categoryIds.indexOf(categoryId) >= 0
    );

    const renderMealItem = ({ item }: any) => (
        <MealItem
            mealId={item.id}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: item.id,
                    },
                })
            }}
        />
    );

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item) => (item.id)}
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

CatetgoryMealsScreen.navigationOptions = ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId');
    const selectedCategory = Categories.find(({ id }) => id === categoryId);
    return {
        headerTitle: selectedCategory ? selectedCategory.title : 'Meals',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CatetgoryMealsScreen;
