import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Dimensions,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { CategoryGridItem, HeaderButton } from '../components';
import { Categories } from '../data/dummy-data';
import { Colors } from '../constants';
import { useSelector } from 'react-redux';
import { Category, Meal } from '../models';

const CategoriesScreen: NavigationStackScreenComponent = props => {
    const [columns, setColumns] = useState(2);
    useEffect(() => {
        const updateColumns = () => {
            const window = Dimensions.get('window');
            setColumns(window.height > window.width ? 2 : 3);
        };
        Dimensions.addEventListener('change', updateColumns);
        return () => {
            Dimensions.removeEventListener('change', updateColumns);
        };
    });

    const availableMeals = useSelector((state: any) => state.meals.filteredMeals);
    const displayedCategories = Categories.filter(({ id }: Category) => {
        const meals = availableMeals.filter(({ categoryIds }: Meal) => (
            categoryIds.indexOf(id) >= 0
        ));
        return meals && meals.length > 0;
    });
    return (
        <FlatList
            style={{ backgroundColor: Colors.background }}
            key={columns}
            numColumns={columns}
            keyExtractor={(item) => (item.id)}
            data={displayedCategories}
            renderItem={itemData => (
                <CategoryGridItem
                    categoryId={itemData.item.id}
                    onSelect={() => {
                        // props.navigation.replace('CategoryMeals')
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id,
                            },
                        });
                    }}
                />
            )}
        />
    );
}

CategoriesScreen.navigationOptions = ({ navigation }: any) => {
    return {
        headerTitle: 'Meal Categiries',
        headerLeft: <HeaderButton
            iconName="bars"
            onPress={() => navigation.toggleDrawer()}
        />,
    };
};

export default CategoriesScreen;
