import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../utils/const'
import {
	contentType,
	TDefaultBlock,
	TIcon,
	TListLinkBlock,
} from '../../utils/types'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/Navigation'
import { switchSection } from '../../utils/utils'

type IconLinkProps = TListLinkBlock & {
	content_type: contentType
	elements: TDefaultBlock[]
	navigation: StackNavigationProp<RootStackParamList, 'ListLink'>
}

const IconLink = ({
	icon = 'document',
	title,
	subTitle,
	content_type,
	elements,
	navigation,
}: IconLinkProps) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={styles.iconText}
			onPress={() => {
				switchSection(
					{ data: { elements: elements } },
					content_type,
					navigation,
					title
				)
			}}
		>
			<View style={styles.iconWrapper}>
				<Ionicons
					style={styles.icon}
					color={Colors.accent}
					name={icon}
					size={25}
				></Ionicons>
			</View>
			<View style={styles.textWrapper}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</TouchableOpacity>
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

		/* 	borderColor: 'black',
		borderWidth: 1, */
	},
	iconWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		marginTop: 8,
		width: 32,
		height: 32,
	},
	icon: {},
	textWrapper: {
		flexDirection: 'column',
	},
	title: {
		color: Colors.text,
		fontSize: 17,
		width: '90%',
	},
	subTitle: {
		fontSize: 11,
		opacity: 60,
		color: Colors.accent,
	},
})

export default IconLink
