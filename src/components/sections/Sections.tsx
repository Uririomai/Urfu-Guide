import React, { useState } from 'react'
import {
	Alert,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { mockData } from '../../utils/mockData'
import { FlatList } from 'react-native'
import SectionItem from '../sectionItem/SectionItem'
import { Gaps } from '../../utils/const'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Navigation'
import { StackScreenProps } from '@react-navigation/stack'
import { TSection, typeBlock } from '../../utils/types'
import { switchSection } from '../../utils/utils'

type Props = StackScreenProps<RootStackParamList, 'Home'>

const Sections = ({ navigation }: Props) => {
	//const [sections, setSections] = useState(mockData[0])
	const [isLoading, setIsLoading] = useState(false)

	const sections = mockData[0].sections

	/* const switchSection = (block: TSection) => {
		switch (block.content_type) {
			case 'data': {
				
				break
			}
			case 'listLink': {
				navigation.navigate('ListLink', {
					title: block.title,
					data: block.data as typeBlock[],
				})
				break
			}
			default: {
				navigation.navigate('Section', {
					id: block.id,
					title: block.title,
					data: block.data as typeBlock,
				})
				break
			}
		}
	} */

	/* const switchSection = (block: TSection) => {
		switch (block.content_type) {
			case 'data': {
				navigation.navigate('Section', {
					id: block.id,
					title: block.title,
					data: block.data as typeBlock,
				})
				break
			}
			case 'listLink': {
				navigation.navigate('ListLink', {
					title: block.title,
					data: block.data as typeBlock[],
				})
				break
			}
			default: {
				navigation.navigate('Section', {
					id: block.id,
					title: block.title,
					data: block.data as typeBlock,
				})
				break
			}
		}
	} */

	return (
		<View style={styles.sections}>
			{isLoading ? (
				<Text>Loading</Text>
			) : (
				<FlatList
					style={styles.sectionList}
					numColumns={2}
					data={sections}
					contentContainerStyle={{
						gap: Gaps.g16,
						justifyContent: 'center',
					}}
					columnWrapperStyle={{
						justifyContent: 'center',
						gap: Gaps.g16,
					}}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								switchSection(item, item.content_type, navigation)
							}}
						>
							<SectionItem
								title={item.title}
								icon={item.icon}
								content_type={item.content_type}
								data={item.data}
							/>
						</TouchableOpacity>
					)}
				/>
			)}
		</View>
	)
}

export default Sections

const styles = StyleSheet.create({
	sections: {
		flex: 1,
		justifyContent: 'space-between',
		gap: 16,
		marginTop: 16,
	},
	sectionList: {
		flex: 1,
		gap: 16,
		backgroundColor: 'white',
	},
})
