import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/Navigation'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Section'>

type Props = {
	route: ProfileScreenRouteProp
}

const DefaultBlock = ({ route }: Props) => {
	const { id, title } = route.params
	return (
		<View style={styles.sectionInfo}>
			<Text>id = {id}</Text>
			<Text>{title}</Text>
		</View>
	)
}

export default DefaultBlock

const styles = StyleSheet.create({
	sectionInfo: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
