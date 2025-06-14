import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { typeBlock } from '../../utils/types'
import ConstructorBlock from '../blocks/defaultBlock/ConstructorBlock'
import { Colors } from '../../utils/const'
import ConstructorTextBlock from '../blocks/blockList/ConstructorTextBlock'
import { Ionicons } from '@expo/vector-icons'

type DropDownProps = {
	number: number
	block: typeBlock
}

const DropDown = ({ number, block }: DropDownProps) => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const handlePress = () => {
		setOpen(!isOpen)
	}
	return (
		<View style={styles.dropDown}>
			<TouchableOpacity style={styles.textWrapper} onPress={handlePress}>
				<Text style={styles.number}>{number}</Text>
				<Text style={styles.text}>{block.title}</Text>
				{/* <Ionicons style={styles.arrow} name='caret-down' size={16}></Ionicons> */}
			</TouchableOpacity>
			{isOpen && (
				<View style={styles.textContent}>
					<ConstructorTextBlock key={block.title} data={block} />
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	dropDown: {
		marginTop: 16,
	},
	textWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		
	},
	number: {
		marginLeft: 16,
		alignSelf: 'center',
		fontSize: 16,
		width: 30,
		height: 30,
		backgroundColor: Colors.accent,
		borderRadius: 50,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	arrow: {
		marginTop: 16,
		marginLeft: 'auto',
		marginRight: 16,
		alignContent: 'flex-end',
		alignSelf: 'center',
	},
	text: {
		/* borderColor: 'black',
		borderWidth: 1, */

		marginLeft: 16,
		marginRight: 16,
		fontSize: 16,
		minHeight: 40,
		maxWidth: '80%',
		textAlignVertical: 'center',
	},
	textContent: {
		marginLeft: 62,
	},
})

export default DropDown
