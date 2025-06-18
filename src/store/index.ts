import { combineReducers, createStore } from 'redux'
import { appSlice } from './slices/appSlice'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PersistConfig,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import persistReducer from 'redux-persist/es/persistReducer'
import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi/baseApi'
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
	TypedUseSelectorHook,
} from 'react-redux'

const rootReducers = combineReducers({
	app: appSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})

export type RootState = ReturnType<typeof rootReducers>

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['app'],
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
