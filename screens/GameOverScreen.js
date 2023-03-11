import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import InstructionText from '../components/InstructionText';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/success.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <InstructionText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{roundsNumber} guesses </Text> to
            guess the number <Text style={styles.highlight}>{userNumber}</Text>
          </InstructionText>
        </View>
        <PrimaryButton onPress={onRestart}>NEW GAME </PrimaryButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
    color: 'white',
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
});

export default GameOverScreen;
