import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Switch,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert,
} from 'react-native';
import { HeaderButton, DefaultText } from '../components';
import { Colors, Fonts } from '../constants';

const FilterSwitch = (props: any) => {
    let TouchableComp: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <TouchableComp
            onPress={() => {
                props.onSwitch(!props.value)
            }}
        >
            <View style={styles.filterContainer}>
                <DefaultText style={styles.filterText}>{props.label}</DefaultText>
                <Switch
                    value={props.value}
                    onValueChange={props.onSwitch}
                    trackColor={{
                        true: Colors.onBackground,
                        false: Colors.desabled,
                    }}
                    thumbColor={Platform.OS === 'android' ? Colors.onBackground : ''}
                />
            </View>
        </TouchableComp>
    );
};

const FiltersScreen = (props: any) => {
    const { navigation } = props;
    const [glutenFree, setGlutenFree] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree,
            lactoseFree,
            vegan,
            vegetarian,
        };
        Alert.alert('Filters', JSON.stringify(appliedFilters));
    }, [
        glutenFree,
        lactoseFree,
        vegan,
        vegetarian,
    ]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.mainTitle}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                value={glutenFree}
                onSwitch={(newValue: boolean) => setGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                value={lactoseFree}
                onSwitch={(newValue: boolean) => setLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                value={vegan}
                onSwitch={(newValue: boolean) => setVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                value={vegetarian}
                onSwitch={(newValue: boolean) => setVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.background,
    },
    mainTitle: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        marginVertical: 20,
        marginHorizontal: 10,
        textAlign: 'center',
        color: Colors.onBackground,
    },
    filterText: {
        color: Colors.onBackground,
    },
    filterContainer: {
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

FiltersScreen.navigationOptions = ({ navigation }: any) => {
    return {
        headerTitle: 'Filters',
        headerLeft: <HeaderButton
            iconName="bars"
            onPress={() => navigation.toggleDrawer()}
        />,
        headerRight: <HeaderButton
            iconName="save"
            onPress={navigation.getParam('save')}
        />,
    };
};

export default FiltersScreen;
