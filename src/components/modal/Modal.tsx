import React from 'react'
import {
	View,
	Modal as ModalRN,
	ModalProps,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import Button from '../button/button'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from '../../store'
import { toggleModal } from '../../store/slices/appSlice'

type Props = ModalProps & {
	title: string
}

const Modal = ({ title, children, ...props }: Props) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.app.modalIsOpen)
	return (
		<SafeAreaProvider style={styles.modalWrapper}>
			<SafeAreaView style={styles.modal}>
				<ModalRN
					visible={isOpen}
					transparent={true}
					animationType='fade'
					onRequestClose={() => dispatch(toggleModal(false))}
					{...props}
				>
					<TouchableOpacity
						style={styles.modalOverlay}
						activeOpacity={1}
						onPressOut={() => dispatch(toggleModal(false))}
					>
						<TouchableWithoutFeedback>
							<View style={styles.modalView}>
								<View style={styles.modalHeader}>
									<Text style={styles.modalTitle}>{title}</Text>
									<Button
										style={styles.buttonClose}
										icon='close'
										onPress={() => dispatch(toggleModal(false))}
									/>
								</View>
								{children}
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</ModalRN>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	modalWrapper: { position: 'absolute' },
	modal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: 'red',
	},
	modalOverlay: {
		width: '100%',
		height: '100%',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginBottom: 15,
		/* 	borderWidth: 2,
		borderColor: 'black', */
	},
	modalTitle: {
		fontSize: 22,
	},
	buttonClose: {
		position: 'absolute',
		top: 0,
		right: 0,
       
	},
})

export default Modal
