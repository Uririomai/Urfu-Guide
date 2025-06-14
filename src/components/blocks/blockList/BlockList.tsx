import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/Navigation'
import { RouteProp } from '@react-navigation/native'
import ConstructorBlock from '../defaultBlock/ConstructorBlock'
import { Colors } from '../../../utils/const'
import { FlatList } from 'react-native-gesture-handler'
import DropDown from '../../ConstructorElements/DropDown'

type BlockListScreenRouteProp = RouteProp<RootStackParamList, 'BlockList'>

type Props = {
	route: BlockListScreenRouteProp
}

const BlockList = ({ route }: Props) => {
	const { elements } = route.params

	return (
		<FlatList
			data={elements}
			renderItem={({ item }) => (
				<View>
					<DropDown
						number={elements.findIndex(it => it === item) + 1}
						block={item}
					/>
				</View>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	text: {
		marginTop: 16,
		marginLeft: 16,
		marginRight: 16,
		fontSize: 16,
		width: 'auto',
		height: 30,
		backgroundColor: Colors.accent,
		borderRadius: 50,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
})

export default BlockList
