import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Sections from '../sections/Sections'
import Header from '../header/header'
import Sidemenu from '../sidemenu/Sidemenu'

import { createDrawerNavigator } from '@react-navigation/drawer'
import DefaultBlock from '../blocks/defaultBlock/DefaultBlock'
import { TIcon, TSection, typeBlock } from '../../utils/types'
import ListLinkBlock from '../blocks/listLinkBlock/ListLinkBlock'
import BlockList from '../blocks/blockList/BlockList'
import { StyleSheet } from 'react-native'

export type RootStackParamList = {
	Home: undefined
	Section: { title: string; data: typeBlock }
	ListLink: {
		title: string
		icon?: TIcon
		content_type: string
		data: typeBlock[]
	}
	BlockList: { title: string; elements: typeBlock[] }
}
const Drawer = createDrawerNavigator<RootStackParamList>()
const Stack = createStackNavigator<RootStackParamList>()

export const Navigation = () => {
	return (
		<NavigationContainer >
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Sections}
					options={{ headerTitle: () => <Header /> }}
				/>
				<Stack.Screen
					name='Section'
					component={DefaultBlock}
					options={({ route }) => ({
						headerTitle: () => <Header title={route.params.title} />,
					})}
				/>
				<Stack.Screen
					name='ListLink'
					component={ListLinkBlock}
					options={({ route }) => ({
						headerTitle: () => <Header title={route.params.title} />,
					})}
				/>
				<Stack.Screen
					name='BlockList'
					component={BlockList}
					options={({ route }) => ({
						headerTitle: () => <Header title={route.params.title} />,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	containter: { borderWidth: 1, borderColor: 'black' },
})
