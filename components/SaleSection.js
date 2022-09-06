import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';

import { Card } from './Card';
import { CustomText } from './CustomText';
import { CustomButton } from './CustomButton';
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export function SaleSection({ }) {
    const [data, setData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]);

    const SecondSectionBody = ({ item }) => (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <View style={styles.container}>
                <ImageBackground borderRadius={Layout.borderRadius15}
                    source={require('../assets/images/sweatshirt.png')}
                    style={styles.imageContainer}
                >
                    <View style={styles.buttonContainer}>
                        <Card text={'15% OFF'} padding={Layout.padding5} textSize={Layout.size10} />
                    </View>
                </ImageBackground>
                <CustomText text={'LOREM IPSUM'} size={Layout.size15} weight={'bold'} />
                <CustomText text={'Lorem Ipsum'} size={Layout.size13} />
            </View>
        </TouchableOpacity>

    );
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <CustomText text={'SALE'} style={{ color: Colors.red }} size={Layout.size35} weight={'bold'} />
            </View>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={SecondSectionBody}
                keyExtractor={item => item.id}
            />
            <View style={styles.more}>
                <CustomButton text={'More'} textSize={Layout.size18} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    more: {
        height: Layout.size50,
        width: Layout.size100,
        paddingVertical: Layout.padding50
    },
    mainContainer: {
        paddingBottom: Layout.padding50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    titleContainer: {
        height: Layout.size50,
        width: '100%',
        backgroundColor: Colors.white,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Layout.margin50
    },
    container: {
        justifyContent: 'center',
        width: '100%',
        height: 240,
        alignSelf: 'center',
        marginVertical: Layout.margin30,
        marginHorizontal: Layout.margin25,
        paddingHorizontal: Layout.padding10
    },
    imageContainer: {
        width: '97%',
        height: '100%',
    },
    buttonContainer: {
        top: '10%',
        left: 35,
        position: 'absolute',
        width: 200,
        height: Layout.size30,
        zIndex: 1
    }

});
