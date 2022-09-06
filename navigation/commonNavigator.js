import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screens/HomeScreen';
import { NewArrivalScreen } from '../screens/NewArrivalScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { LastCollectionScreen } from '../screens/LastCollectionScreen';
import { MenScreen } from '../screens/MenScreen';
import { WomenScreen } from '../screens/WomenScreen';
import Labels from '../constants/Labels'

const Drawer = createDrawerNavigator();


export default function Navigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ title: Labels.home }} />
            <Drawer.Screen name="NewArrival" component={NewArrivalScreen} options={{ title: Labels.newArrival }} />
            <Drawer.Screen name="Shop" component={ShopScreen} options={{ title: Labels.shop }} />
            <Drawer.Screen name="LastCollection" component={LastCollectionScreen} options={{ title: Labels.lastCollection }} />
            <Drawer.Screen name="Men" component={MenScreen} options={{ title: Labels.men }} />
            <Drawer.Screen name="Women" component={WomenScreen} options={{ title: Labels.women }} />
        </Drawer.Navigator>
    )
}