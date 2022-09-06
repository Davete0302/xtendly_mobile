import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

import { HomeSection } from '../components/HomeSection'
import { SecondSection } from '../components/SecondSection';
import { SaleSection } from '../components/SaleSection';
import { FooterSection } from '../components/FooterSection';

export function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View>
                <HomeSection />
                <SecondSection />
                <SaleSection />
                <FooterSection />
            </View>
        </ScrollView>
    );
}
