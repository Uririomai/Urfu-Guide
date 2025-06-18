import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Gaps } from '../../utils/const'

type ButtonProps = TouchableOpacityProps & {
	title?: string
	titleSize?: string
	icon?: React.ComponentProps<typeof Ionicons>['name']
	iconSize?: string
	onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
	title,
	titleSize = '18',
	icon,
	iconSize = '30',
	onPress,
	...props
}) => {
	return (
		<TouchableOpacity style={styles.button} {...props} onPress={onPress}>
			{icon && <Ionicons name={icon} size={+iconSize}></Ionicons>}
			{title && <Text style={{ fontSize: +titleSize }}>{title}</Text>}
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: Gaps.g16,
	},
})
