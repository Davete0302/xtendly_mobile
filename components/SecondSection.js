import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';

import { CustomButton } from './CustomButton';
import Layout from '../constants/Layout'

export function SecondSection({ }) {
    const [data, setData] = useState([{ title: 'Sweatshirts' }, { title: 'Hoodies' }, { title: 'Pair' }]);

    const SecondSectionBody = ({ item }) => (

        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/sweatshirt.png')}
                style={styles.imageContainer}
            >
                <View style={styles.buttonContainer}>
                    <CustomButton text={item.title} padding={5} />
                </View>
            </ImageBackground>
        </View>

    );
    return (

        <View style={{ backgroundColor: '#EBEAE8' }}>
            <FlatList
                data={data}
                style={{ marginVertical: Layout.margin50, }}
                renderItem={SecondSectionBody}
                keyExtractor={item => item.title}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 204,
        height: 300,
        alignSelf: 'center',
        marginVertical: Layout.margin15,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        bottom: '10%',
        position: 'absolute',
        width: 200,
        height: Layout.size30,
        justifyContent: 'center',
        alignSelf: 'center'
    }

});
