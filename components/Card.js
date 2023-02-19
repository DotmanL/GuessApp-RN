import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    marginTop: deviceWidth < 380 ? 18 : 36,
    elevation: 8,
    padding: 10,
    borderRadius: 10,
  },
});

export default Card;
