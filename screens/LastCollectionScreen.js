import * as React from 'react';
import { Button, View } from 'react-native';

import { CustomText } from '../components/CustomText';
import { Header } from '../components/Header';
import Layout from '../constants/Layout'

export function LastCollectionScreen({ navigation }) {
    return (
        <View style={{flex:1}}>
            <Header />
            <View style={{  alignItems: 'center', justifyContent: 'center' ,height:'100%'}}>
                <CustomText text={'Last Collection'} size={Layout.size30} style={{ marginVertical: Layout.margin20 }} />
                <Button onPress={() => navigation.goBack()} title="Go back" />
            </View>
        </View>

    );
}
