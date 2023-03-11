import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0, could use this or the select style below, also we can use platform specific file name as done for this title component
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
