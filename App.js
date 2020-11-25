import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './components/StartGameScreen'

const App = () => {
	return (
		<View style={styles.screen}>
			<StatusBar style='auto' />
			<Header title='Guess a Number' />
			<StartGameScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
})

export default App