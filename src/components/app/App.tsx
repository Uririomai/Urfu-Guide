import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../button/button'
import Header from '../header/header'
import { Navigation } from '../navigation/Navigation'
import { Colors } from '../../utils/const'
import { Provider } from 'react-redux'
import store from '../../store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const persistor = persistStore(store)

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<View style={styles.app}>
					<Navigation />
				</View>
			</PersistGate>
		</Provider>
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
