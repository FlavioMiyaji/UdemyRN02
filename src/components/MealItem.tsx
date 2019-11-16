import React from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    ImageBackground,
} from 'react-native';
import { Colors, Fonts } from '../constants';
import { Meal } from '../models';
import { DefaultText } from '.';

const MealItem = (props: any) => {
    const { mealId } = props;

    const availableMeals = useSelector((state: any) => state.meals.filteredMeals);

    let selectedMeal: any = availableMeals.find(({ id }: Meal) => id === mealId);
    if (!selectedMeal) {
        selectedMeal = {}
    }
    let TouchableComp: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComp
                onPress={props.onSelectMeal}
            >
                <View style={{ flex: 1 }}>
                    <View style={{
                        ...styles.mealRow,
                        ...styles.mealHeader,
                    }}>
                        <ImageBackground
                            source={{ uri: selectedMeal.imageUrl }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {selectedMeal.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{
                        ...styles.mealRow,
                        ...styles.mealDetail,
                    }}>
                        <DefaultText style={styles.details}>{String(selectedMeal.duration)}m</DefaultText>
                        <DefaultText style={styles.details}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText style={styles.details}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableComp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealRow: {
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        alignItems: 'center',
    },
    mealHeader: {
        height: '80%',
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    titleContainer: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        paddingHorizontal: 12,
        paddingVertical: 2,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.onSurface,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    details: {
        fontFamily: Fonts.regular,
        color: Colors.onSurface,
    },
});

export default MealItem;
