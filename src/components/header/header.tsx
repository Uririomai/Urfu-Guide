import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../button/button'
import { useRoute } from '@react-navigation/native'
import ChangeLanguageModal from '../changeLanguageModal/ChangeLanguageModal'
import { toggleModal } from '../../store/slices/appSlice'
import { useDispatch } from '../../store'

type HeaderProps = {
	title?: string
}

const Header = ({ title = 'Urfu Guide' }: HeaderProps) => {
	const route = useRoute()
	const dispatch = useDispatch()

	return (
		<View style={styles.header}>
			{route.name === 'Home' && (
				<Button icon='globe' onPress={() => dispatch(toggleModal(true))} />
			)}
			<Text style={title.length > 30 ? styles.textSmall : styles.text}>
				{title}
			</Text>
			{/* <Button icon='search' /> */}
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		
	},
	text: {
		fontSize: 22,
		fontWeight: 700,
	},
	textSmall: {
		fontSize: 18,
		fontWeight: 700,
	},
})
