import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export function LogoCircle({ name }) {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <View
                source={require('../assets/images/logo.png')}
                style={styles.container}
            >
                <MIcon name={name} size={Layout.size30} color={Colors.white} />
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: Layout.size50,
        height: Layout.size50,
        borderRadius: Layout.size50 / 2,
        backgroundColor: Colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Layout.margin5
    }
});
