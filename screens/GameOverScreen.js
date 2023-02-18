import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import BodyText from '../components/BodyText';
import Title from '../components/Title';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode="cover"
        />
        {/* <Image
          style={styles.image}
          source={{
            uri:
              'https://picjumbo.com/wp-content/uploads/snowy-mountain-peak-with-sunrise-glow-2210x1243.jpg',
          }}
          resizeMode="cover"
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{roundsNumber} guesses </Text> to guess
          the number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <CustomButton onPress={onRestart}>NEW GAME </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default GameOverScreen;
