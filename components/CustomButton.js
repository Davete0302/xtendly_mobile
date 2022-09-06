import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './CustomText';
import  Colors  from '../constants/Colors'
import Layout from '../constants/Layout'

export function CustomButton({  text, textSize,padding }) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
               onPress={() => navigation.navigate('Shop')}
                style={[styles.buttonStyle,{paddingVertical:padding??Layout.padding10}]}
            >
                <CustomText text={text} size={textSize} weight={'500'}/>
            </TouchableOpacity>
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
        paddingHorizontal: Layout.padding25,
        paddingVertical: Layout.padding10,
        borderRadius: Layout.borderRadius25,
        borderWidth: Layout.borderWidthsmall,
        backgroundColor: Colors.white

    },

});
