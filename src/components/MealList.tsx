import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { MealItem } from '.';
import { Meal } from '../models';
import { Colors } from '../constants';

const MealList = (props: any) => {
    const favoriteMeals = useSelector((state: any) => state.meals.favoriteMeals);
    const [columns, setColumns] = useState(1);
    useEffect(() => {
        const updateColumns = () => {
            const window = Dimensions.get('window');
            setColumns(window.height > window.width ? 1 : 2);
        };
        Dimensions.addEventListener('change', updateColumns);
        return () => {
            Dimensions.removeEventListener('change', updateColumns);
        };
    });

    const renderMealItem = ({ item }: any) => {
        const isFavorite = favoriteMeals.some((meal: Meal) => meal.id === item.id);
        return (
            <MealItem
                mealId={item.id}
                onSelectMeal={() => (
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: item.id,
                            mealTitle: item.title,
                            isFavorite
                        },
                    })
                )}
            />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                key={columns}
                numColumns={columns}
                keyExtractor={(item: Meal) => (item.id)}
                data={props.data}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});

export default MealList;