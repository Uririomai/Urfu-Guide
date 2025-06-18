import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = process.env.base_url

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			return headers
		},
	}),
	endpoints: () => ({}),
})
