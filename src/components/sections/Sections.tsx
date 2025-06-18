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
import ChangeLanguageModal from '../changeLanguageModal/ChangeLanguageModal'
import { useSelector } from '../../store'

type Props = StackScreenProps<RootStackParamList, 'Home'>

const Sections = ({ navigation }: Props) => {
	const sections = useSelector(state => state.app.sections)
	const [isLoading, setIsLoading] = useState(false)
	const modalOpen = useSelector(state => state.app.modalIsOpen)

	return (
		<View style={styles.sections}>
			{modalOpen && <ChangeLanguageModal />}
			{isLoading ? (
				<Text>Loading</Text>
			) : (
				<>
					<FlatList
						style={styles.sectionList}
						ListFooterComponent={<Text></Text>}
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
				</>
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
	},
	sectionList: {
		flex: 1,
		gap: 16,
		backgroundColor: 'white',
	},
})
