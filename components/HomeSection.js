import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Button } from 'react-native';

import { CustomButton } from './CustomButton';
import { Header } from './Header';
import Layout from '../constants/Layout'

export const HomeSection = (props) => {
    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageContainer}
        >
            <Header />

            <View style={{ marginVertical: Layout.margin70 }}>

                <Image
                    source={require('../assets/images/first.png')}
                    style={styles.firstImage}
                />
                <Image
                    source={require('../assets/images/second.png')}
                    style={styles.secondImage}
                />
                <Image
                    source={require('../assets/images/third.png')}
                    style={styles.thirdImage}
                />
                <CustomButton text={'Shop Now'} textSize={21} />

            </View>

        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
    },
    firstImage: {
        width: 250,
        height: 200,
        marginLeft: 'auto'
    },
    secondImage: {
        width: 200,
        height: 297,
        marginTop: '-6%',
        marginLeft: 20
    },
    thirdImage: {
        width: 187,
        height: 263,
        marginLeft: 'auto',
        marginRight: Layout.margin20,
        marginTop: '-25%'
    }
});
