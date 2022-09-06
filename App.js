import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/commonNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
       <Navigation />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}