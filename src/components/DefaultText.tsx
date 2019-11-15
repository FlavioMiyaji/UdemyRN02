import React from 'react';
import {
    Text as RNText,
    StyleSheet,
} from 'react-native';
import { Fonts } from '../constants';

const DefaultText = (props: any) => {
    return (
        <RNText style={{
            ...styles.text,
            ...props.style
        }}>{props.children}</RNText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.regular,
    },
});

export default DefaultText;
