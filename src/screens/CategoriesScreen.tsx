import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryGridItem from '../components/CategoryGridItem';
import { Categories } from '../data/dummy-data';

const CategoriesScreen: NavigationStackScreenComponent = props => {
    return (
        <FlatList
            keyExtractor={(item) => (item.id)}
            data={Categories}
            numColumns={2}
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;
