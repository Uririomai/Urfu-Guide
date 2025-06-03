import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../button/button'
import { useRoute } from '@react-navigation/native'

const Header = ({ title = 'Urfu Guide' }) => {
	const route = useRoute()

	return (
		<View style={styles.header}>
			{route.name === 'Home' && <Button icon='menu' />}
			<Text style={styles.text}>{title}</Text>
			<Button icon='search' />
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 22,
		fontWeight: 700,
	},
})
