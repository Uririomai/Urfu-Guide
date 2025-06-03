import { dataResponse } from './types'

export const mockData: dataResponse = [
	{
		code: 'ru',
		sections: [
			{
				id: 1,
				content_type: 'data',
				title: 'Секция 1',
				data: {
					id: 1,
					address: 'ул. Ленина, 1',
					timetable: 'Пн-Пт 9:00–18:00',
					phone: '+7 900 000-00-01',
					description: 'Описание блока 1',
				},
			},
			{
				id: 2,
				content_type: 'data',
				title: 'Секция 2',
				data: {
					id: 2,
					address: 'ул. Ленина, 2',
					timetable: 'Пн-Пт 10:00–19:00',
					phone: '+7 900 000-00-02',
					description: 'Описание блока 2',
				},
			},
			{
				id: 3,
				content_type: 'data',
				title: 'Секция 3',
				data: {
					id: 3,
					address: 'ул. Ленина, 3',
					timetable: 'Пн-Пт 11:00–20:00',
					phone: '+7 900 000-00-03',
					description: 'Описание блока 3',
				},
			},
		],
	},
	{
		code: 'en',
		sections: [
			{
				id: 4,
				content_type: 'data',
				title: 'Section 1',
				data: {
					id: 4,
					address: 'Lenina St, 1',
					timetable: 'Mon-Fri 9:00–18:00',
					phone: '+1 900 000-00-01',
					description: 'Block description 1',
				},
			},
			{
				id: 5,
				content_type: 'data',
				title: 'Section 2',
				data: {
					id: 5,
					address: 'Lenina St, 2',
					timetable: 'Mon-Fri 10:00–19:00',
					phone: '+1 900 000-00-02',
					description: 'Block description 2',
				},
			},
			{
				id: 6,
				content_type: 'data',
				title: 'Section 3',
				data: {
					id: 6,
					address: 'Lenina St, 3',
					timetable: 'Mon-Fri 11:00–20:00',
					phone: '+1 900 000-00-03',
					description: 'Block description 3',
				},
			},
		],
	},
]
