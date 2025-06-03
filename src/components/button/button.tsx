import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type ButtonProps = TouchableOpacityProps & {
	title?: string
	icon?: React.ComponentProps<typeof Ionicons>['name']
}

const Button: React.FC<ButtonProps> = ({ title, icon, ...props }) => {
	return (
		<TouchableOpacity style={styles.button} {...props}>
			{title && <Text>{title}</Text>}
			{icon && <Ionicons name={icon} size={34}></Ionicons>}
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {},
})
