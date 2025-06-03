import React, { useState } from 'react'
import {
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

type Props = StackScreenProps<RootStackParamList, 'Home'>

const Sections = ({ navigation }: Props) => {
	//const [sections, setSections] = useState(mockData[0])
	const [isLoading, setIsLoading] = useState(false)

	const sections = mockData[0].sections

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
								navigation.navigate('Section', {
									id: item.id,
									title: item.title,
								})
							}}
						>
							<SectionItem
								title={item.title}
								id={item.id}
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
