import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButton, DefaultText } from '../components';
import { Meal } from '../models';
import { Colors, Fonts } from '../constants';
import { toggleFavorite } from '../store/actions/MealsAction'


const ListItem = (props: any) => {
    return (
        <View
            style={styles.listItem}
        >
            <DefaultText style={styles.itemText}>{props.label}</DefaultText>
        </View>
    );
};

const MealDetailScreen: NavigationStackScreenComponent = props => {
    const mealId = props.navigation.getParam('mealId')
    const isFavorite = useSelector((state: any) => state.meals.favoriteMeals.some((meal: Meal) => meal.id === mealId));
    const availableMeals = useSelector((state: any) => state.meals.meals);
    let selectedMeal: any = availableMeals.find(({ id }: Meal) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {};
    }

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite({ mealId }));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFavorite });
    }, [isFavorite]);

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Image
                    source={{ uri: selectedMeal.imageUrl }}
                    style={styles.image}
                />
                <View style={styles.details}>
                    <DefaultText style={styles.detail}>{String(selectedMeal.duration)}m</DefaultText>
                    <DefaultText style={styles.detail}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText style={styles.detail}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.title}>Ingredients</Text>
                    {selectedMeal.ingredients.map((ingredient: string) => (
                        <ListItem key={ingredient} label={ingredient} />
                    ))}
                </View>
                <View style={styles.lists}>
                    <Text style={styles.title}>Steps</Text>
                    {selectedMeal.steps.map((step: string) => (
                        <ListItem key={step} label={step} />
                    ))}
                </View>
            </View >
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }: any) => {
    const mealTitle = navigation.getParam('mealTitle');
    const toggleFavorite = navigation.getParam('toggleFavorite');
    const isFavorite = navigation.getParam('isFavorite');
    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButton
            solid={isFavorite}
            iconName="star"
            onPress={toggleFavorite}
        />,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
    },
    details: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        backgroundColor: Colors.surface,
    },
    detail: {
        color: Colors.onSurface,
    },
    lists: {
        width: '100%',
        margin: 10,
        borderRadius: 10,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        textAlign: 'center',
        color: Colors.onBackground,
    },
    listItem: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: Colors.surface,
    },
    itemText: {
        color: Colors.onSurface,
    },
});

export default MealDetailScreen;
