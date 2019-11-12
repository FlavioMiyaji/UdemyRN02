import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

const CatetgoryMealsScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The Catetgory Meals Screen!</Text>
            <Button
                title="Go to Meal Detail!"
                onPress={() => (
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                    })
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CatetgoryMealsScreen;