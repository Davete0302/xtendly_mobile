import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomText } from './CustomText';
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export const Card = (props) => {
    return (
        <View style={styles.container}>
            <View
                onPress={() => console.log('pressed')}
                style={[styles.buttonStyle, { paddingVertical: props.padding ?? Layout.padding10 }]}
            >
                <CustomText text={props.text} size={props.textSize} style={{ color: Colors.white }} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Layout.size0,
        left: Layout.size0,
        right: Layout.size0,
        bottom: Layout.size0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        paddingHorizontal: Layout.padding5,
        paddingVertical: Layout.padding10,
        backgroundColor: Colors.yellow

    },

});
