import React from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Radius } from '../../utils/const'
import { TSection } from '../../utils/types'

const SectionItem = ({ title, icon }: TSection) => {
	return (
		<View style={styles.section}>
			<View style={styles.iconContainer}>
				<Image style={styles.icon} source={{ uri: icon }} />
			</View>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}

export default SectionItem

const styles = StyleSheet.create({
	section: {
		width: 172,
		height: 140,
		backgroundColor: Colors.accent,
		borderRadius: Radius.r16,
		justifyContent: 'space-between',
		fontSize: 15,
		lineHeight: 135,
		padding: 16,
	},
	iconContainer: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: '100%',
		height: '100%',
		resizeMode: 'center',
	},
	text: { color: Colors.textAccent },
})
