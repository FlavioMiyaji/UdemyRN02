import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    ImageBackgroundComponent,
    ImageBackground,
} from 'react-native';
import { Meals } from '../data/dummy-data';
import { Colors, Fonts } from '../constants';

const MealItem = (props: any) => {
    const { mealId } = props;
    let selectedMeal: any = Meals.find(({ id }) => id === mealId);
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
                        <Text>{String(selectedMeal.duration)}m</Text>
                        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                        <Text>{selectedMeal.affordability}</Text>
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
    }
});

export default MealItem;
