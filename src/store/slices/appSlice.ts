import { combineReducers } from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import { dataResponse, TSection } from '../../utils/types'
import { mockData } from '../../utils/mockData'
import { Alert } from 'react-native'

export enum Lang {
	EN = 'en',
	RU = 'ru',
}

export interface AppState {
	code: string
	sections: TSection[]
	allLang: string[]
	data: dataResponse
	modalIsOpen: boolean
}

const initialState: AppState = {
	code: 'ru',
	sections: mockData.find(item => item.code === 'ru')?.sections as TSection[],
	allLang: mockData.map(item => item.code),
	data: mockData,
	modalIsOpen: false,
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeLanguage: (state, action) => {
			state.code = action.payload
			state.sections = state.data.find(item => item.code === action.payload)
				?.sections as TSection[]
		},
		getAllLanguage: state => {
			state.data.map(item => item.code)
		},
		toggleModal: (state, actions) => {
			state.modalIsOpen = actions.payload
		},
	},
})

export const { changeLanguage, getAllLanguage, toggleModal } = appSlice.actions
