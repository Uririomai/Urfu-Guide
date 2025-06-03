import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../button/button'
import Header from '../header/header'
import { Navigation } from '../navigation/Navigation'
import { Colors } from '../../utils/const'

const App = () => {
	return (
		<View style={styles.app}>
			<Navigation />
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	app: {
		flex: 1,
		paddingTop: 50,
		color: Colors.textAccent,
		//paddingHorizontal: 10,
	},
})
