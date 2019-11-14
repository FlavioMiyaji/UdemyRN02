import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';
import { Categories } from '../data/dummy-data';
import { Colors, Fonts } from '../constants';

const CategoryGridItem = (props: any) => {
    const { categoryId } = props;
    const selectedCategory = Categories.find(({ id }) => id === categoryId);
    let TouchableComp: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComp
                style={{ flex: 1 }}
                onPress={props.onSelect}
            >
                <View style={{
                    ...styles.container,
                    backgroundColor: selectedCategory ? selectedCategory.backgroundColor : Colors.primary,
                }}>
                    <Text style={{
                        ...styles.title,
                        color: selectedCategory ? selectedCategory.color : Colors.onPrimary,
                    }}>
                        {selectedCategory ? selectedCategory.title : ''}
                    </Text>
                </View>
            </TouchableComp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.surface,
        shadowColor: Colors.onSurface,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2, },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        textAlign: 'center',
        color: Colors.onSurface,
    },
});

export default CategoryGridItem;
