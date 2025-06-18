import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { RootStackParamList } from '../../navigation/Navigation'
import IconLink from '../../ConstructorElements/IconLink'
import { contentType, TIcon, TListLinkBlock } from '../../../utils/types'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'

type ListLinkScreenRouteProp = RouteProp<RootStackParamList, 'ListLink'>

type ListLinkBlockProps = {
	route: ListLinkScreenRouteProp
	navigation: StackNavigationProp<RootStackParamList, 'ListLink'>
}

const ListLinkBlock = ({ route, navigation }: ListLinkBlockProps) => {
	const { title, content_type, data, icon } = route.params as {
		title: string
		content_type: contentType
		data: TListLinkBlock[]
		icon: TIcon
	}
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<IconLink
						icon={icon}
						content_type={content_type}
						title={item.title || title}
						subTitle={item.subTitle || ''}
						navigation={navigation}
						elements={item.elements}
						item={item}
					/>
				)}
			/>
		</View>
	)
}

export default ListLinkBlock
