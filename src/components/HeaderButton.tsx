import React from 'react';
import {
    View,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
} from 'react-native';
import { default as Icon } from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../constants';

const HeaderButton = (props: any) => {
    let TouchableComp: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <TouchableComp
            onPress={props.onPress}
        >
            <View
                style={styles.iconContainer}
            >
                <Icon
                    solid
                    color={Platform.OS === 'android' ? Colors.onPrimary : Colors.primary}
                    name={props.iconName}
                    size={20}
                />
            </View>
        </TouchableComp>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        padding: 5,
        margin: 10,
        borderRadius: 15,
    },
});

export default HeaderButton;
