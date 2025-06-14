import React from 'react'
import { Alert, Linking, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../utils/const'
import Button from '../button/button'
import Clipboard from '@react-native-clipboard/clipboard'

type IconTextProps = {
	icon: React.ComponentProps<typeof Ionicons>['name']
	text: string
	link?: string
	time?: boolean
}

const IconText = ({ icon, text, link, time }: IconTextProps) => {
	return (
		<View style={styles.iconText}>
			<View style={styles.iconWrapper}>
				<Ionicons
					style={styles.icon}
					color={Colors.accent}
					name={icon}
					size={25}
				></Ionicons>
			</View>
			{link ? (
				<Text
					style={styles.link}
					onPress={() => Linking.openURL(link)}
					onLongPress={() => {}}
					selectable
				>
					{text}
				</Text>
			) : time ? (
				<View style={styles.textWrapper}>
					<Text style={styles.text}>{text.split(' ')[1]}</Text>
					<Text style={styles.textDate}>{text.split(' ')[0]}</Text>
				</View>
			) : (
				<Text style={styles.text}>{text}</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	iconText: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		columnGap: 10,
		minHeight: 80,
		width: '100%',
		padding: 16,
		/* borderColor: 'black',
		borderWidth: 1, */
	},
	iconWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		marginTop: 8,
		width: 32,
		height: 32,
	/* 	borderColor: 'black',
		borderWidth: 1, */
	},
	icon: {},
	textWrapper: {
		flexDirection: 'column',
		width: 150,
		/* borderColor: 'black',
		borderWidth: 1, */
	},
	text: {
		color: Colors.text,
		fontSize: 17,
		width: '90%',
		/* borderColor: 'black',
		borderWidth: 1, */
	},
	link: {
		color: Colors.accent,
		fontSize: 17,
		width: '90%',
	},
	textDate: {
		fontSize: 11,
		opacity: 60,
		color: Colors.accent,
	},
})

export default IconText
