import React from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { default as Icon } from 'react-native-vector-icons/FontAwesome5';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Meals } from '../data/dummy-data';
import { HeaderButton, DefaultText } from '../components';
import { Meal } from '../models';
import { Colors, Fonts } from '../constants';

const ListItem = (props: any) => {
    return (
        <View
            key={props.key}
            style={styles.listItem}
        >
            <DefaultText style={styles.itemText}>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen: NavigationStackScreenComponent = props => {
    const mealId = props.navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }: Meal) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {};
    }
    return (
        <View style={styles.screen}>
            <ScrollView>
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
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                    ))}
                </View>
                <View style={styles.lists}>
                    <Text style={styles.title}>Steps</Text>
                    {selectedMeal.steps.map((step: string) => (
                        <ListItem key={step}>{step}</ListItem>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }: any) => {
    const mealId = navigation.getParam('mealId')
    let selectedMeal: any = Meals.find(({ id }: Meal) => id === mealId);
    return {
        headerTitle: selectedMeal ? selectedMeal.title : 'Details',
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
        backgroundColor: Colors.background,
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        backgroundColor: Colors.surface,
    },
    detail: {
        color: Colors.onSurface,
    },
    lists: {
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
