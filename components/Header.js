import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';

import { Logo } from './Logo';
import { CustomText } from './CustomText';
import  Colors  from '../constants/Colors'
import Layout from '../constants/Layout'

export function Header({ }) {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <MIcon name={'menu'} size={Layout.size30} color={'black'} style={{ marginHorizontal:Layout.margin20 }} />
            </TouchableOpacity>
            
            <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                <Logo height={Layout.size45} weight={Layout.size45} />
            </View>

            <View style={{ marginLeft: 'auto', flexDirection: 'row', marginRight: Layout.margin20 }}>
                <IconBadge
                    MainElement={
                        <MIcon name={'basket-outline'} size={Layout.size40} color={'black'} style={{ marginHorizontal: Layout.margin5 }} />
                    }
                    BadgeElement={
                        <CustomText text={'0'} size={10} />
                    }
                    IconBadgeStyle={{
                        top: Layout.size30,
                        right: Layout.size0,
                        width: Layout.size15,
                        height: Layout.size15,
                        backgroundColor: Colors.dirtyWhite
                    }}
                    Hidden={false}
                />
                <MIcon name={'star-outline'} size={Layout.size40} color={'black'} style={{ marginHorizontal: 5 }} />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
mainContainer:{
     flexDirection: 'row',
      backgroundColor: Colors.white,
       marginVertical: Layout.margin20, 
       height: Layout.size60, 
       alignItems: 'center', 
       width: '100%'
     }

});
