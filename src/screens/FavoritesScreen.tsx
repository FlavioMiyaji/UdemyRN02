import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { MealList, HeaderButton, DefaultText } from '../components';
import { Fonts, Colors } from '../constants';

const FavoritesScreen: NavigationStackScreenComponent = props => {
    const availableMeals = useSelector((state: any) => state.meals.favoriteMeals);
    if (!availableMeals || availableMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText style={styles.text}>
                    {'No favorite meals found.\nStart adding some!'}
                </DefaultText>
            </View>
        );
    }
    return (
        <MealList
            data={availableMeals}
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: Colors.onBackground,
        textAlign: 'center',
    },
});

export default FavoritesScreen;
