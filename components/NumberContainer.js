import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}> {props.children} </Text>
    </View>
  );
};

// ios, no difference between screen and window
// android: screen - entire available width and height including the status bar, window - excluding the status bar
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.primary,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});

export default NumberContainer;
