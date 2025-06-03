import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Sections from '../sections/Sections'
import Header from '../header/header'
import Sidemenu from '../sidemenu/Sidemenu'

import { createDrawerNavigator } from '@react-navigation/drawer'
import DefaultBlock from '../blocks/defaultBlock/DefaultBlock'

export type RootStackParamList = {
	Home: undefined
	Section: { id: number; title: string }
}
const Drawer = createDrawerNavigator<RootStackParamList>()
const Stack = createStackNavigator<RootStackParamList>()

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Sections}
					options={{ headerTitle: () => <Header /> }}
				/>
				<Stack.Screen
					name='Section'
					component={DefaultBlock}
					options={{ headerTitle: () => <Header /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export const SideMenu = () => {
	return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen name='Home' component={Sidemenu} />
		</Drawer.Navigator>
	)
}
