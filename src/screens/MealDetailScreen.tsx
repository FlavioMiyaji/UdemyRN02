import React from 'react';
import {
    View,
    Text,
    Alert,
    Button,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { default as Icon } from 'react-native-vector-icons/FontAwesome5';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Meals } from '../data/dummy-data';
import { HeaderButton } from '../components';
import { Colors } from '../constants';

const MealDetailScreen: NavigationStackScreenComponent = props => {
    const mealId = props.navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {}
    }
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go Baco to Caregories"
                onPress={() => props.navigation.popToTop()}
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    const mealId = navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {}
    }
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButton
            iconName="star"
            onPress={() =>
                Alert.alert('Favorite!')
            }
        />,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;
