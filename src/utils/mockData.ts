import { dataResponse } from './types'

export const mockData: dataResponse = [
	{
		code: 'ru',
		sections: [
			{
				content_type: 'default_block',
				title: 'Секция 1',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: {
					address: 'ул. Ленина, 1',
					timetable: 'Пн-Пт 9:00–18:00',
					phone: '+7 900 000-00-01',
					description: 'Описание блока 1',
					link: 'https://urfu.ru/ru/',
					image:
						'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
				},
			},
			{
				content_type: 'drop_down_list',
				title: 'Секция 2',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: {
					title: '',
					subTitle: '',
					icon: 'document',
					elements: [
						{
							title: 'Прибытие',
							description:
								'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
							link: 'https://istudent.urfu.ru/',
						},
						{
							title: 'Сдать документы для зачисления',
							description:
								'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109).',
							link: '',
						},
						{
							title: 'Заселение в общежитие',
							description: 'Адрес твоего общежития указан в договоре',
							link: 'https://istudent.urfu.ru/s/modeus',
						},
					],
				},
			},
			{
				content_type: 'default_block_list',
				title: 'Секция 3',
				icon: 'business',
				data: [
					{
            title: 'Институт радиоэлектроники и ',
						address: 'ул. Ленина, 1',
						timetable: 'Пн-Пт 9:00–18:00',
						phone: '+7 900 000-00-01',
						description: 'Описание блока 1',
						link: 'https://urfu.ru/ru/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
					{
						address: 'ул. Ленина, 2',
						timetable: 'Пн-Пт 9:00–18:00',
						phone: '+7 900 000-00-01',
						description: 'Описание блока 2',
						link: 'https://urfu.ru/ru/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
					{
						address: 'ул. Ленина, 3',
						timetable: 'Пн-Пт 9:00–18:00',
						phone: '+7 900 000-00-01',
						description: 'Описание блока 3',
						link: 'https://urfu.ru/ru/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
				],
			},
			{
				content_type: 'drop_down_list_list',
				title: 'Секция 4',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: [
					{
						title: 'Основные программы (бюджет)',
						subTitle:
							'Для студентов, обучающихся на основных программах на бюджетной основе',
						icon: 'document',
						elements: [
							{
								title: 'Прибытие',
								description:
									'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
								link: 'https://istudent.urfu.ru/',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109).',
								link: '',
							},
						],
					},
					{
						title: 'Основные программы (бюджет)',
						subTitle:
							'Для студентов, обучающихся на основных программах на бюджетной основе',
						icon: 'document',
						elements: [
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/s/modeus',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/s/modeus',
							},
						],
					},
				],
			},
		],
	},
	{
		code: 'en',
		sections: [
			{
				content_type: 'default_block',
				title: 'Section 1',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: {
					address: 'Lenina St, 1',
					timetable: 'Mon-Fri 9:00–18:00',
					phone: '+1 900 000-00-01',
					description: 'Block description 1',
					link: 'https://urfu.ru/en/',
					image:
						'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
				},
			},
			{
				content_type: 'drop_down_list',
				title: 'Section 2',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: {
					title: 'Main programs (budget)',
					subTitle: 'For students enrolled in main programs on a budget basis',
					icon: 'document',
					elements: [
						{
							title: 'Arrival',
							description:
								'To be met by our volunteers at the airport, fill out the arrival form.',
							link: 'https://istudent.urfu.ru/',
						},
						{
							title: 'Submit documents for enrollment',
							description:
								'To start the enrollment procedure, submit the required documents to the Admission Center (GUK-109).',
							link: '',
						},
						{
							title: 'Dormitory check-in',
							description: 'Your dormitory address is stated in the contract.',
							link: 'https://istudent.urfu.ru/s/modeus',
						},
					],
				},
			},
			{
				content_type: 'default_block_list',
				title: 'Section 3',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: [
					{
						address: 'Lenina St, 1',
						timetable: 'Mon-Fri 9:00–18:00',
						phone: '+1 900 000-00-01',
						description: 'Block description 1',
						link: 'https://urfu.ru/en/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
					{
						address: 'Lenina St, 2',
						timetable: 'Mon-Fri 9:00–18:00',
						phone: '+1 900 000-00-01',
						description: 'Block description 2',
						link: 'https://urfu.ru/en/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
					{
						address: 'Lenina St, 3',
						timetable: 'Mon-Fri 9:00–18:00',
						phone: '+1 900 000-00-01',
						description: 'Block description 3',
						link: 'https://urfu.ru/en/',
						image:
							'https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331',
					},
				],
			},
			{
				content_type: 'drop_down_list_list',
				title: 'Section 4',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg82X5FYawxzhUZBeFRy2xo4TQB_8FjR7Wg&s',
				data: [
					{
						title: 'Main programs (budget)',
						subTitle:
							'For students enrolled in main programs on a budget basis',
						icon: 'document',
						elements: [
							{
								title: 'Arrival',
								description:
									'To be met by our volunteers at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admission Center (GUK-109).',
								link: '',
							},
						],
					},
					{
						title: 'Main programs (budget)',
						subTitle:
							'For students enrolled in main programs on a budget basis',
						icon: 'document',
						elements: [
							{
								title: 'Dormitory check-in',
								description:
									'Your dormitory address is stated in the contract.',
								link: 'https://istudent.urfu.ru/s/modeus',
							},
							{
								title: 'Dormitory check-in',
								description:
									'Your dormitory address is stated in the contract.',
								link: 'https://istudent.urfu.ru/s/modeus',
							},
						],
					},
				],
			},
		],
	},
]
