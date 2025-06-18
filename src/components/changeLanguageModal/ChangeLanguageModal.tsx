import React, { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from '../../store'
import Button from '../button/button'
import { changeLanguage } from '../../store/slices/appSlice'
import { Alert, StyleSheet, Text } from 'react-native'
import { Gaps } from '../../utils/const'

type Props = {}

const ChangeLanguageModal = ({}: Props) => {
	const [currentLang, setCurrentLang] = useState<string>(
		useSelector(state => state.app.code)
	)
	const allLang = useSelector(state => state.app.allLang)

	const dispatch = useDispatch()

	return (
		<Modal title={'Change language'}>
			<FlatList
				style={styles.langList}
				data={allLang}
				renderItem={({ item }) => (
					<Button
						style={styles.langItem}
						icon={item === currentLang ? 'radio-button-on' : 'radio-button-off'}
						iconSize='37'
						title={item}
						onPress={() => {
							currentLang !== item && setCurrentLang(item)
							dispatch(changeLanguage(item))
						}}
					/>
				)}
			/>
		</Modal>
	)
}

const styles = StyleSheet.create({
	langList: {
		width: '100%',
		paddingHorizontal: 20,

		/* borderColor: 'black',
		borderWidth: 3, */
	},
	langItem: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: Gaps.g16,
		
		marginBottom: 20,
	},
})

export default ChangeLanguageModal
