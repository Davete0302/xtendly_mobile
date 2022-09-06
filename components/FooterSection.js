import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

import { Logo } from './Logo';
import { CustomText } from './CustomText';
import { LogoCircle } from './LogoCircle';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout'

export function FooterSection({ }) {

    return (

        <View style={styles.container}>
            <Logo />

            <View style={[styles.rowStyle, { marginTop: Layout.margin40 }]}>
                <FIcon name={'location-arrow'} size={Layout.size30} color={'black'} />
                <CustomText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} size={Layout.size15} style={styles.spacing} />
            </View>

            <View style={styles.rowStyle}>
                <MIcon name={'cellphone'} size={Layout.size30} color={'black'} />
                <CustomText text={'Lorem ipsum '} size={Layout.size15} style={styles.spacing} />
            </View>

            <View style={styles.rowStyle}>
                <MIcon name={'email-outline'} size={Layout.size30} color={'black'} />
                <CustomText text={'Lorem ipsum dolor sit amet'} size={Layout.size15} style={styles.spacing} />
            </View>

            <View style={{ flexDirection: 'row', marginVertical: Layout.margin30 }}>
                <LogoCircle name={'facebook'} />
                <LogoCircle name={'pinterest'} />
                <LogoCircle name={'instagram'} />

            </View >

            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <CustomText text={'COLLECTION'} size={Layout.size18} style={styles.footerText} weight={'bold'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <CustomText text={'INFORMATION'} size={Layout.size18} style={styles.footerText} weight={'bold'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <CustomText text={'MORE'} size={Layout.size18} style={styles.footerText} weight={'bold'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        marginVertical: Layout.margin10,
        alignItems: 'center'
    },
    container: {
        backgroundColor: Colors.backgroundColor,
        paddingTop: Layout.padding60,
        paddingBottom: Layout.padding120,
        paddingHorizontal: Layout.padding25
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    spacing: {
        paddingLeft: Layout.padding10
    },
    footerText: {
        marginVertical: Layout.margin5
    }

});
