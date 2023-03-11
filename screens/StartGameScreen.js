import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Keyboard,
  Alert,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import InstructionText from '../components/InstructionText';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const { height } = useWindowDimensions();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid  Number!',
        'Numbers has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <InstructionText>You Selected</InstructionText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <PrimaryButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </PrimaryButton>
      </Card>
    );
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title style={styles.title}> Guess My Number</Title>
          <Card style={styles.inputContainer}>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  onPress={resetInputHandler}
                  color={Colors.secondary}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  onPress={confirmInputHandler}
                  color={Colors.primary}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
