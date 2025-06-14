import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/Navigation'
import ConstructorBlock from './ConstructorBlock'

type DefaultScreenRouteProp = RouteProp<RootStackParamList, 'Section'>

type Props = {
	route: DefaultScreenRouteProp
}

const DefaultBlock = ({ route }: Props) => {
	const { data } = route.params
	return (
		<View style={styles.sectionInfo}>
			<ConstructorBlock data={data} key={data.title} />
		</View>
	)
}

export default DefaultBlock

const styles = StyleSheet.create({
	sectionInfo: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
	},
})
