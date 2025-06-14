import React, { JSX } from 'react'
import { TDefaultBlock, typeBlock } from '../../../utils/types'
import { Image, StyleSheet, View, Text, Linking } from 'react-native'
import IconText from '../../ConstructorElements/IconText'
import ImageBlock from '../../ConstructorElements/Image'
import { FlatList } from 'react-native-gesture-handler'
import { Colors, Gaps } from '../../../utils/const'

type ConstructorBlockProps = {
	data: TDefaultBlock
}

const ConstructorTextBlock = ({ data }: ConstructorBlockProps) => {
	const keys = Object.keys(data)
	const arr: React.ReactElement[] = []
	keys.forEach(key => {
		switch (key) {
			/* case 'image': {
                const imgSrc = data[key] as string
                arr.push(<ImageBlock key={imgSrc} src={imgSrc} />)
                break
            } */
			case 'link': {
				data[key] &&
					arr.push(
						<Text
							style={styles.link}
							onPress={() => Linking.openURL(data[key] as string)}
							selectable
						>
							{data[key]}
						</Text>
					)
				break
			}
			case 'phone': {
				data[key] &&
					arr.push(
						<Text
							style={styles.link}
							onPress={() => Linking.openURL(data[key] as string)}
							selectable
						>
							{data[key]}
						</Text>
					)
				break
			}
			case 'description': {
				data[key] &&
					arr.push(
						<Text style={styles.text} selectable>
							{data[key]}
						</Text>
					)
				break
			}
		}
	})

	return (
		<FlatList
			style={styles.textBlockList}
			data={arr}
			renderItem={({ item }) => item}
		/>
	)
}

const styles = StyleSheet.create({
	textBlockList: {
		width: '100%',
		paddingVertical: 0,
		/* borderColor: 'black',
        borderWidth: 1, */
	},

	textWrapper: {
		flexDirection: 'column',
		width: 150,
	},
	text: {
		marginTop: 8,
		color: Colors.text,
		fontSize: 17,
		width: '90%',
		borderTopColor: Colors.grayBorder,
		borderTopWidth: 1,
	},
	link: {
		marginTop: 8,
		color: Colors.accent,
		fontSize: 17,
		width: '90%',
		borderTopColor: Colors.grayBorder,
		borderTopWidth: 1,
	},
	textDate: {
		fontSize: 11,
		opacity: 60,
		color: Colors.accent,
	},
})

export default ConstructorTextBlock
