import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';

function renderWeight(weight) {
  switch (weight) {
    case 'thin':
      return '300';
    case 'medium':
      return '400'
    case 'bold':
      return '600';
    case 'regular':
      return '500';
    default:
      return '400';
  }
}

export function CustomText({ text, size, style, weight }) {
  return (
    <Text
      style={[styles.textStyle, { fontSize: size, fontWeight: renderWeight(weight) },style]}
    >{text}
    </Text>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: 'Inter'
  },

});
