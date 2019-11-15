import React from 'react';
import {
    Alert,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
    Meals,
} from '../data/dummy-data';
import { MealList, HeaderButton } from '../components';

const FavoritesScreen: NavigationStackScreenComponent = props => {
    return (
        <MealList
            data={Meals}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = ({ navigation }: any) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: <HeaderButton
            iconName="bars"
            onPress={() => navigation.toggleDrawer()}
        />,
    };
};

export default FavoritesScreen;
