import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { CustomText } from './CustomText';
import Layout from '../constants/Layout'

export const Logo = (props) => {
    return (

        <ImageBackground
            source={require('../assets/images/logo.png')}
            resizeMode='contain'
            style={[styles.imageContainer, { height: props.height ?? Layout.size100, width: props.width ?? Layout.size100 }]}
        >
            <CustomText text={'LOGO'} size={props.height ? Layout.size10 : Layout.size20} />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});
