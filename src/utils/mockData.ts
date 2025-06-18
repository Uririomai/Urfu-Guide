import { dataResponse } from './types'

export const mockData: dataResponse = [
	{
		code: 'ru',
		sections: [
			{
				content_type: 'drop_down_list_list',
				title: 'Порядок действий',
				icon: 'http://158.160.182.170:8082/api/file/4e449325-9de1-4d48-a8d4-3538e1f7cde8',
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
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109). Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Виза и миграционный контроль',
								description:
									'Согласно российскому законодательству тебе необходимо получить официальный документ, подтверждающий законное нахождение на территории РФ. Здесь же ты можешь продлить срок действия визы. Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								address: 'улица Мира, 19. Кабинет ГУК-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Получить договор на поселение',
								description:
									'Получить договор необходимо в центре адаптации иностранных обучающихся',
								address: 'улица Мира, 19. Кабинет ГУК-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Оплатить проживание',
								description:
									'Оплатить проживание в общежитии можно в офисе СКБ-банка, Сбербанка или в терминалах оплаты. необходимо внести единовременный платеж за весь семестр. Не забудь взять квитанцию об оплате!',
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Медицинский осмотр',
								description:
									'Чтобы иметь возможность проживать в общежитии, тебе необходимо пройти мед. осмотр в Поликлинике УрФУ',
								address: 'ул Комсомольская, 59Б',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Основные программы (контракт)',
						subTitle:
							'Для студентов, обучающихся на основных программах на контрактной основе',
						icon: 'document',
						elements: [
							{
								title: 'Прибытие',
								description:
									'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109). Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Виза и миграционный контроль',
								description:
									'Согласно российскому законодательству тебе необходимо получить официальный документ, подтверждающий законное нахождение на территории РФ. Здесь же ты можешь продлить срок действия визы. Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								address: 'улица Мира, 19. Кабинет ГУК-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Получить договор на поселение',
								description:
									'Получить договор необходимо в центре адаптации иностранных обучающихся',
								address: 'улица Мира, 19. Кабинет ГУК-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Оплатить проживание',
								description:
									'Оплатить проживание в общежитии можно в офисе СКБ-банка, Сбербанка или в терминалах оплаты. необходимо внести единовременный платеж за весь семестр. Не забудь взять квитанцию об оплате!',
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Медицинский осмотр',
								description:
									'Чтобы иметь возможность проживать в общежитии, тебе необходимо пройти мед. осмотр в Поликлинике УрФУ',
								address: 'ул Комсомольская, 59Б',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Русский язык (бюджет)',
						subTitle:
							'Для студентов, изучающих русский язык как иностранный на бюджетной основе',
						icon: 'document',
						elements: [
							{
								title: 'Прибытие',
								description:
									'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109). Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Виза и миграционный контроль',
								description:
									'Согласно российскому законодательству тебе необходимо получить официальный документ, подтверждающий законное нахождение на территории РФ. Здесь же ты можешь продлить срок действия визы. Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								address: 'улица Мира, 19. Кабинет ГУК-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Получить договор на поселение',
								description:
									'Получить договор необходимо в центре адаптации иностранных обучающихся',
								address: 'улица Мира, 19. Кабинет ГУК-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Оплатить проживание',
								description:
									'Оплатить проживание в общежитии можно в офисе СКБ-банка, Сбербанка или в терминалах оплаты. необходимо внести единовременный платеж за весь семестр. Не забудь взять квитанцию об оплате!',
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Медицинский осмотр',
								description:
									'Чтобы иметь возможность проживать в общежитии, тебе необходимо пройти мед. осмотр в Поликлинике УрФУ',
								address: 'ул Комсомольская, 59Б',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Русский язык (контракт)',
						subTitle:
							'Для студентов, изучающих русский язык как иностранный на контрактной основе',
						icon: 'document',
						elements: [
							{
								title: 'Прибытие',
								description:
									'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109). Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Виза и миграционный контроль',
								description:
									'Согласно российскому законодательству тебе необходимо получить официальный документ, подтверждающий законное нахождение на территории РФ. Здесь же ты можешь продлить срок действия визы. Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								address: 'улица Мира, 19. Кабинет ГУК-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Получить договор на поселение',
								description:
									'Получить договор необходимо в центре адаптации иностранных обучающихся',
								address: 'улица Мира, 19. Кабинет ГУК-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Оплатить проживание',
								description:
									'Оплатить проживание в общежитии можно в офисе СКБ-банка, Сбербанка или в терминалах оплаты. необходимо внести единовременный платеж за весь семестр. Не забудь взять квитанцию об оплате!',
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Медицинский осмотр',
								description:
									'Чтобы иметь возможность проживать в общежитии, тебе необходимо пройти мед. осмотр в Поликлинике УрФУ',
								address: 'ул Комсомольская, 59Б',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Обмен',
						subTitle: 'Для студентов-обменников',
						icon: 'document',
						elements: [
							{
								title: 'Прибытие',
								description:
									'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Сдать документы для зачисления',
								description:
									'Чтобы начать процедуру зачисления, сдай необходимые документы в Центр приёма (ГУК-109). Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Виза и миграционный контроль',
								description:
									'Согласно российскому законодательству тебе необходимо получить официальный документ, подтверждающий законное нахождение на территории РФ. Здесь же ты можешь продлить срок действия визы. Необходимые документы: \n - Паспорт \n - Копия первой страницы паспорта \n - Перевод первой страницы паспорта  \n - 4 фотографии 3х4 см',
								address: 'улица Мира, 19. Кабинет ГУК-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Получить договор на поселение',
								description:
									'Получить договор необходимо в центре адаптации иностранных обучающихся',
								address: 'улица Мира, 19. Кабинет ГУК-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Оплатить проживание',
								description:
									'Оплатить проживание в общежитии можно в офисе СКБ-банка, Сбербанка или в терминалах оплаты. необходимо внести единовременный платеж за весь семестр. Не забудь взять квитанцию об оплате!',
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Медицинский осмотр',
								description:
									'Чтобы иметь возможность проживать в общежитии, тебе необходимо пройти мед. осмотр в Поликлинике УрФУ',
								address: 'ул Комсомольская, 59Б',
							},
							{
								title: 'Заселение в общежитие',
								description: 'Адрес твоего общежития указан в договоре',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Институты',
				icon: 'http://158.160.182.170:8082/api/file/6d497010-c8d9-4cf3-bcd8-568cbcaa5340',
				iconList: 'school',
				data: [
					{
						title: 'Институт экономики и управления',
						address: 'ул. Мира, 21',
						timetable: 'Пн-Пт 9:00–18:00',
						phone: '+7 900 000-00-01',
						description:
							'- Школа экономики и менеджмента \n - Факультет экономики и управления \n - Факультет ИМТ \n - Экономический факультет УрГУ',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
						video:
							'https://rutube.ru/video/88c2e3e0b969928176a465baf2a12897/?r=plemwd',
					},
					{
						title: 'Институт естественных наук и математики',
						address: 'ул. Куйбышева, 48, Кабинет 353',

						phone: '+7 343 261 31 24',

						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Институт новых материалов и технологий',
						address: 'ул. Мира, 28, кабинет МТ-327',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title:
							'Институт радиоэлектроники и информационных технологий - РтФ',
						address: 'ул. Мира, 32, кабинет Р-332',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Институт строительства и архитектуры',
						address: 'ул. Мира, 17',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Институт технологий открытого образования',
						address: 'ул. Мира, 19',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Институт физической культуры, спорта и молодежной политики',
						address: 'ул. Коминтерна, 14',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Институт фундаментального образования',
						address: 'ул. С. Ковалевской, 5',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Уральский гуманитарный институт',
						address: 'пр. Ленина, 51',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Физико-технологический институт',
						address: 'пр. Мира, 21',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Химико-технологический институт',
						address: 'пр. Мира, 28, кабинет Х-327',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Высшая инженерная школа',
						address: 'пр. Мира, 21, кабинет ФТ-214',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Общежития',
				icon: 'http://158.160.182.170:8082/api/file/bebe6731-ec25-4cf6-a1da-77fedbfff74e',
				iconList: 'bed',
				data: [
					{
						title: 'Студенческое общежитие № 1',
						address: 'ул. Большакова, 79',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
						video:
							'https://rutube.ru/video/88c2e3e0b969928176a465baf2a12897/?r=plemwd',
					},
					{
						title: 'Студенческое общежитие № 2',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 4',
						address: 'ул. Большакова, 71',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 5',
						address: 'ул. Малышева, 144',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 6',
						address: 'ул. Чапаева, 16А',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 7',
						address: 'ул. Коминтерна, 3',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 8',
						address: 'ул. Комсомольская, 70/10',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 9',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 10',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 12',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 13',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 14',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 15',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Студенческое общежитие № 16',
						address: 'ул. Большакова, 77',
						timetable: 'Пн-Вс 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
				],
			},
			{
				content_type: 'default_block',
				title: 'Центр приёма',
				icon: 'http://158.160.182.170:8082/api/file/43f14e16-5dd0-4006-9e1e-840cc29a1471',
				data: {
					address: 'ул. Мира, 19, ГУК-109',
					timetable: 'Пн-Пт 9:00–17:15',
					phone: '+7 900 000-00-01',
					description:
						'Здесь ты можешь получить консультацию по следующим вопросам: \n - зачисление всех иностранных студентов \n - поселение в общежитие \n - гранты \n - получение пропуска в университет',
				},
			},
			{
				content_type: 'default_block',
				title: 'Визовая поддержка',
				icon: 'http://158.160.182.170:8082/api/file/c476ba34-b9fe-44ee-87a9-2243b48c7b7e',
				data: {
					address: 'ул. Мира, 19, Кабинет ГУК-109',
					timetable: 'Пн-Пт 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'Запомни! У тебя есть три дня после прибытия, чтобы получить официальный документ, подтверждающий твое законное пребывание на территории РФ.',
				},
			},
			{
				content_type: 'default_block',
				title: 'Центр адаптации',
				icon: 'http://158.160.182.170:8082/api/file/646385a6-07e8-4812-b492-4fdc33cfb5ac',
				data: {
					address: 'ул. Мира, 19, Кабинет И-110',
					timetable: 'Пн-Пт 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'В центре адаптации иностранных обучающихся тебе помогут: \n - Узнать о процессе поселения в студенческих общежитиях \n - Получить договор для поселения \n - Задать все интересующие вопросы о получении Медицинского полиса \n Мы жем тебя в Центре адаптации иностранных студентов',
				},
			},
			{
				content_type: 'default_block',
				title: 'Страховка и мед. услуги',
				icon: 'http://158.160.182.170:8082/api/file/67f743d7-9292-4339-a3a3-adfc807b4709',
				data: {
					address: 'ул. Мира, 19, кабинет ГУК-109',
					timetable: 'Пн-Пт 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'Все иностранные граждане должны иметь Полис медицинского страхования на территории России. Полис можно приобрести в любой страховой компании в Екатеринбурге или в родной стране.',
					link: 'https://urfu.ru/ru/',
				},
			},
			{
				content_type: 'default_block_list',
				title: 'Библиотеки',
				icon: 'http://158.160.182.170:8082/api/file/a1b35320-0153-41e2-8af1-55bd0679d60b',
				iconList: 'book',
				data: [
					{
						title: 'О библиотеке',
						address: 'ул. Мира, 19',
						description:
							'Библиотека УрФУ - это современный информационный центр, обеспечивающий доступ к многопрофильной коллекции электронных электронных и печатных изданий.',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Читальный зал',
						address: 'ул. Мира, 19, кабинет Б-202',
						timetable: 'Пн-Пт 9:00–19:00',
						description:
							'Научные и учебные издания технического профиля и нормативно-техническая документация',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Читальный зал',
						address: 'ул. Мира, 19, кабинет Б-203',
						timetable: 'Пн-Пт 9:00–19:00',
						description:
							'Научные и учебные издания технического профиля и нормативно-техническая документация',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Читальный зал',
						address: 'ул. Мира, 19, кабинет Б-301',
						timetable: 'Пн-Пт 9:00–19:00',
						description:
							'Научные и учебные издания технического профиля и нормативно-техническая документация',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Отдел',
						address: 'ул. Мира, 19, кабинет Б-401',
						timetable: 'Пн-Пт 9:00–19:00',
						description:
							'Словари, справочники, эниклопедические издания, научно-вспомогательные библиографические указатели',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Инфоцентр',
						address: 'ул. Мира, 19, кабинет Б-304',
						timetable: 'Пн-Пт 9:00–19:00',
						description:
							'Доступ к электронным каталогам и ресурсам, помощь в регистрации в электронных системах. Консультации семинары, тренинги на русском и английском языках по использованию электронных ресурсов и сервисов.',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Спорт',
				icon: 'http://158.160.182.170:8082/api/file/ec5ee238-46ce-499d-8332-53e230fc4cd5',
				iconList: 'basketball',
				data: [
					{
						title: 'Бассейн УрФУ',
						address: 'ул. Коминтерна, 14А',
						timetable: 'Пн-Пт 6:30–22:00',
						phone: '+7 343 375 93 84',
						description:
							'Первое занятие начинается в 6:30 последнее в 20:45. Расписание тренировок и занятий можно найти на доске информации в здании бассейна',
						image:
							'http://158.160.182.170:8082/api/file/dbc77cb1-7ff9-46b2-a076-e088841005bb',
					},
					{
						title: 'Легкоатлетический манеж',
						address: 'ул. Мира, 29',
						timetable: 'Пн-Пт 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Легкая атлетика, аэробика, скалолазание',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Стадион УрФУ',
						address: 'ул. Мира, 29',
						timetable: 'Пн-Пт 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Легкая атлетика, футбол, мини-футбол',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'СКИВС',
						address: 'ул. Коминтерна, 14',
						timetable: 'Пн-Пт 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Гандбол, волейбол, баскетбол, мини-футбол',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Бизнес центр им. Б.Н. Ельцина',
						address: 'ул. Коминтерна, 16',
						timetable: 'Пн-Пт 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Дзюдо, самбо, большой теннис',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Баскетбольный зал',
						address: 'ул. Коминтерна, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Зал бокса и тяжелой атлетики',
						address: 'ул. Коминтерна, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Студенческий центр "Звездный"',
						address: 'ул. Коминтерна, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Физкультурно-оздоровительный комплекс',
						address: 'ул. Коминтерна, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Зал "Тайпинг"',
						address: 'ул. Коминтерна, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Банк',
				icon: 'http://158.160.182.170:8082/api/file/52f053aa-7689-4bd6-9e27-6dfd7c009ba6',
				iconList: 'wallet',
				data: [
					{
						title: 'СКБ-Банк',
						address: 'ул. Ленина, 49',

						phone: '+7 343 375 93 84',
						description:
							'В этом банке ты сможешь оплатить обучение и проживание, а также получить степендиальную банковскую карту и обменять валюту',
					},
					{
						title: 'СКБ-Банк',
						address: 'ул. Мира, 19',

						phone: '+7 343 375 93 84',
						description:
							'В этом банке ты сможешь оплатить обучение и проживание, а также получить степендиальную банковскую карту и обменять валюту',
					},
					{
						title: 'СКБ-Банк',
						address: 'ул. Большакова, 97',

						phone: '+7 343 375 93 84',
						description:
							'В этом банке ты сможешь оплатить обучение и проживание, а также получить степендиальную банковскую карту и обменять валюту',
					},
				],
			},
			{
				content_type: 'drop_down_list',
				title: 'Частые вопросы',
				icon: 'http://158.160.182.170:8082/api/file/b575b615-c170-4508-b1b4-798ce51f9506',
				data: {
					title: '',
					subTitle: '',
					icon: 'document',
					elements: [
						{
							title: 'Кто-нибудь сможет встретить меня в аэропорту?',
							description:
								'Для того, чтобы наши волонтёры встретили тебя в аэропорту, заполни анкету прибытия.',
							link: 'https://urfu.ru/anketa',
						},
						{
							title:
								'Я хочу оформить Е-карту, но у меня нет студенческого билета. Что мне делать? ',
							description:
								'Если вы являетесь студентом, приехавшим по обмену, обратитесь к одному из координаторов академической мобильности для оформления справки о зачислении.',
						},
						{
							title: 'В какой валюте мне следует платить за свое обучение?',
							description:
								'Все денежные операции совершаются в рублях. Евро и доллары можно легко обменять на рубли.',
						},
						{
							title: 'Какие условия проживания предоставляет университет?',
							description:
								'Университет предоставляет койко-место в комнате по 2-4 человека. Приблизительная стоимость 1000 рублей на человека в месяц.',
						},
						{
							title:
								'Сколько денег мне необходимо на проживание в течение месяца?',
							description:
								'Мы рекомендуем иметь при себе по крайней мере, 250 долларов.',
						},
						{
							title:
								'Я собираюсь поехань на несколько дней в другой город в России. Следует ли мне сообщить кому-нибудь об этом?',
							description:
								'Конечно, следует подойти в кабинет ГУК-109 (ул. Мира, 19).',
						},
						{
							title:
								'Что мне делать, если я попал в экстренную ситуацию (кража, угроза здоровью, конфликт и пр)?',
							description:
								'Вам нужно обратиться в службу безопасности УрФУ либо в центр адаптации иностранных обучающихся, ул. Мира, 19, каб. ГУК-209',
						},
					],
				},
			},
			{
				content_type: 'default_block',
				title: 'Личный кабинет',
				icon: 'http://158.160.182.170:8082/api/file/c1e8dcf9-7131-4994-9113-47b51864659e',
				data: {
					description:
						'Личный кабинет доступен только на русском и английских языках!',
					link: 'https://istudent.urfu.ru/',
				},
			},
		],
	},
	{
		code: 'en',
		sections: [
			{
				content_type: 'drop_down_list_list',
				title: 'Procedure',
				icon: 'http://158.160.182.170:8082/api/file/4e449325-9de1-4d48-a8d4-3538e1f7cde8',
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
									'To have our volunteers meet you at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admissions Center (GUK-109). Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Visa and migration control',
								description:
									'According to Russian legislation, you need to obtain an official document confirming your legal stay in the Russian Federation. Here you can also extend your visa. Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								address: 'Mira Street, 19. Office GUK-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Obtain a housing agreement',
								description:
									'You need to obtain the agreement at the Center for Adaptation of International Students',
								address: 'Mira Street, 19. Office GUK-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Pay for accommodation',
								description:
									"You can pay for dormitory accommodation at SKB Bank, Sberbank offices or payment terminals. You need to make a one-time payment for the entire semester. Don't forget to take the payment receipt!",
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Medical examination',
								description:
									'To be able to live in the dormitory, you need to undergo a medical examination at UrFU Polyclinic',
								address: 'Komsomolskaya Street, 59B',
							},
							{
								title: 'Move into the dormitory',
								description:
									'Your dormitory address is specified in the agreement',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Main programs (contract)',
						subTitle:
							'For students enrolled in main programs on a contract basis',
						icon: 'document',
						elements: [
							{
								title: 'Arrival',
								description:
									'To have our volunteers meet you at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admissions Center (GUK-109). Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Visa and migration control',
								description:
									'According to Russian legislation, you need to obtain an official document confirming your legal stay in the Russian Federation. Here you can also extend your visa. Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								address: 'Mira Street, 19. Office GUK-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Obtain a housing agreement',
								description:
									'You need to obtain the agreement at the Center for Adaptation of International Students',
								address: 'Mira Street, 19. Office GUK-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Pay for accommodation',
								description:
									"You can pay for dormitory accommodation at SKB Bank, Sberbank offices or payment terminals. You need to make a one-time payment for the entire semester. Don't forget to take the payment receipt!",
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Medical examination',
								description:
									'To be able to live in the dormitory, you need to undergo a medical examination at UrFU Polyclinic',
								address: 'Komsomolskaya Street, 59B',
							},
							{
								title: 'Move into the dormitory',
								description:
									'Your dormitory address is specified in the agreement',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Russian language (budget)',
						subTitle:
							'For students studying Russian as a foreign language on a budget basis',
						icon: 'document',
						elements: [
							{
								title: 'Arrival',
								description:
									'To have our volunteers meet you at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admissions Center (GUK-109). Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Visa and migration control',
								description:
									'According to Russian legislation, you need to obtain an official document confirming your legal stay in the Russian Federation. Here you can also extend your visa. Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								address: 'Mira Street, 19. Office GUK-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Obtain a housing agreement',
								description:
									'You need to obtain the agreement at the Center for Adaptation of International Students',
								address: 'Mira Street, 19. Office GUK-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Pay for accommodation',
								description:
									"You can pay for dormitory accommodation at SKB Bank, Sberbank offices or payment terminals. You need to make a one-time payment for the entire semester. Don't forget to take the payment receipt!",
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Medical examination',
								description:
									'To be able to live in the dormitory, you need to undergo a medical examination at UrFU Polyclinic',
								address: 'Komsomolskaya Street, 59B',
							},
							{
								title: 'Move into the dormitory',
								description:
									'Your dormitory address is specified in the agreement',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Russian language (contract)',
						subTitle:
							'For students studying Russian as a foreign language on a contract basis',
						icon: 'document',
						elements: [
							{
								title: 'Arrival',
								description:
									'To have our volunteers meet you at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admissions Center (GUK-109). Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Visa and migration control',
								description:
									'According to Russian legislation, you need to obtain an official document confirming your legal stay in the Russian Federation. Here you can also extend your visa. Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								address: 'Mira Street, 19. Office GUK-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Obtain a housing agreement',
								description:
									'You need to obtain the agreement at the Center for Adaptation of International Students',
								address: 'Mira Street, 19. Office GUK-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Pay for accommodation',
								description:
									"You can pay for dormitory accommodation at SKB Bank, Sberbank offices or payment terminals. You need to make a one-time payment for the entire semester. Don't forget to take the payment receipt!",
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Medical examination',
								description:
									'To be able to live in the dormitory, you need to undergo a medical examination at UrFU Polyclinic',
								address: 'Komsomolskaya Street, 59B',
							},
							{
								title: 'Move into the dormitory',
								description:
									'Your dormitory address is specified in the agreement',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
					{
						title: 'Exchange',
						subTitle: 'For exchange students',
						icon: 'document',
						elements: [
							{
								title: 'Arrival',
								description:
									'To have our volunteers meet you at the airport, fill out the arrival form.',
								link: 'https://istudent.urfu.ru/anketa',
							},
							{
								title: 'Submit documents for enrollment',
								description:
									'To start the enrollment procedure, submit the required documents to the Admissions Center (GUK-109). Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								link: 'https://istudent.urfu.ru/centrpriema',
							},
							{
								title: 'Visa and migration control',
								description:
									'According to Russian legislation, you need to obtain an official document confirming your legal stay in the Russian Federation. Here you can also extend your visa. Required documents: \n - Passport \n - Copy of the first page of the passport \n - Translation of the first page of the passport \n - 4 photos (3x4 cm)',
								address: 'Mira Street, 19. Office GUK-109',
								phone: '+73433759491',
								link: 'https://istudent.urfu.ru/visasupport',
							},
							{
								title: 'Obtain a housing agreement',
								description:
									'You need to obtain the agreement at the Center for Adaptation of International Students',
								address: 'Mira Street, 19. Office GUK-209',
								link: 'https://istudent.urfu.ru/centr',
							},
							{
								title: 'Pay for accommodation',
								description:
									"You can pay for dormitory accommodation at SKB Bank, Sberbank offices or payment terminals. You need to make a one-time payment for the entire semester. Don't forget to take the payment receipt!",
								link: 'https://istudent.urfu.ru/bank',
							},
							{
								title: 'Medical examination',
								description:
									'To be able to live in the dormitory, you need to undergo a medical examination at UrFU Polyclinic',
								address: 'Komsomolskaya Street, 59B',
							},
							{
								title: 'Move into the dormitory',
								description:
									'Your dormitory address is specified in the agreement',
								link: 'https://istudent.urfu.ru/bank',
							},
						],
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Institutes',
				icon: 'http://158.160.182.170:8082/api/file/6d497010-c8d9-4cf3-bcd8-568cbcaa5340',
				iconList: 'school',
				data: [
					{
						title: 'Institute of Management and Economics',
						address: 'Mira Street, 21',
						timetable: 'Mon-Fri 9:00–18:00',
						phone: '+7 900 000-00-01',
						description:
							'- School of Economics and Management \n - Faculty of Economics and Management \n - Faculty of IMT \n - Economics Faculty of USU',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of Natural Sciences and Mathematics',
						address: 'Kuibysheva Street, 48, Office 353',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of New Materials and Technologies',
						address: 'Mira Street, 28, Office MT-327',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title:
							'Institute of Radioelectronics and Information Technologies - RTF',
						address: 'Mira Street, 32, Office R-332',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of Construction and Architecture',
						address: 'Mira Street, 17',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of Open Education Technologies',
						address: 'Mira Street, 19',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of Physical Culture, Sports and Youth Policy',
						address: 'Kominterna Street, 14',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Institute of Fundamental Education',
						address: 'S. Kovalevskaya Street, 5',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Ural Humanities Institute',
						address: 'Lenina Avenue, 51',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Physical-Technological Institute',
						address: 'Mira Avenue, 21',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Chemical-Technological Institute',
						address: 'Mira Avenue, 28, Office Kh-327',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
					{
						title: 'Higher School of Engineering',
						address: 'Mira Avenue, 21, Office FT-214',
						phone: '+7 343 261 31 24',
						link: 'https://urfu.ru/ru/',
						image:
							'http://158.160.182.170:8082/api/file/5972b304-1019-42c5-8520-d2e202b9ae25',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Dormitories',
				icon: 'http://158.160.182.170:8082/api/file/bebe6731-ec25-4cf6-a1da-77fedbfff74e',
				iconList: 'bed',
				data: [
					{
						title: 'Student Dormitory No. 1',
						address: 'Bolshakova Street, 79',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 2',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 4',
						address: 'Bolshakova Street, 71',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 5',
						address: 'Malysheva Street, 144',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 6',
						address: 'Chapaeva Street, 16A',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 7',
						address: 'Kominterna Street, 3',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 8',
						address: 'Komsomolskaya Street, 70/10',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 9',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 10',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 12',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 13',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 14',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 15',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
					{
						title: 'Student Dormitory No. 16',
						address: 'Bolshakova Street, 77',
						timetable: 'Mon-Sun 6:00–1:00',
						phone: '+7 900 000-00-01',
						image:
							'http://158.160.182.170:8082/api/file/46f49712-1ef0-4d9d-ab52-91c7148e7060',
					},
				],
			},
			{
				content_type: 'default_block',
				title: 'Admissions Center',
				icon: 'http://158.160.182.170:8082/api/file/43f14e16-5dd0-4006-9e1e-840cc29a1471',
				data: {
					address: 'Mira Street, 19, GUK-109',
					timetable: 'Mon-Fri 9:00–17:15',
					phone: '+7 900 000-00-01',
					description:
						'Here you can get advice on the following issues: \n - enrollment of all international students \n - accommodation in dormitories \n - grants \n - obtaining a university pass',
				},
			},
			{
				content_type: 'default_block',
				title: 'Visa Support',
				icon: 'http://158.160.182.170:8082/api/file/c476ba34-b9fe-44ee-87a9-2243b48c7b7e',
				data: {
					address: 'Mira Street, 19, Office GUK-109',
					timetable: 'Mon-Fri 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'Remember! You have three days after arrival to obtain an official document confirming your legal stay in the Russian Federation.',
				},
			},
			{
				content_type: 'default_block',
				title: 'Adaptation Center',
				icon: 'http://158.160.182.170:8082/api/file/646385a6-07e8-4812-b492-4fdc33cfb5ac',
				data: {
					address: 'Mira Street, 19, Office I-110',
					timetable: 'Mon-Fri 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'At the Center for Adaptation of International Students, we can help you with: \n - Learning about the dormitory accommodation process \n - Obtaining a housing agreement \n - Answering all your questions about obtaining a Medical Insurance Policy \n We welcome you to the Center for Adaptation of International Students',
				},
			},
			{
				content_type: 'default_block',
				title: 'Insurance and Medical Services',
				icon: 'http://158.160.182.170:8082/api/file/67f743d7-9292-4339-a3a3-adfc807b4709',
				data: {
					address: 'Mira Street, 19, Office GUK-109',
					timetable: 'Mon-Fri 9:00–18:00',
					phone: '+7 900 000-00-01',
					description:
						'All foreign citizens must have a Medical Insurance Policy in Russia. The policy can be purchased from any insurance company in Yekaterinburg or in your home country.',
					link: 'https://urfu.ru/ru/',
				},
			},
			{
				content_type: 'default_block_list',
				title: 'Libraries',
				icon: 'http://158.160.182.170:8082/api/file/a1b35320-0153-41e2-8af1-55bd0679d60b',
				iconList: 'book',
				data: [
					{
						title: 'About the Library',
						address: 'Mira Street, 19',
						description:
							'The UrFU Library is a modern information center providing access to a multidisciplinary collection of electronic and printed publications.',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Reading Room',
						address: 'Mira Street, 19, Office B-202',
						timetable: 'Mon-Fri 9:00–19:00',
						description:
							'Scientific and educational publications of technical profile and normative-technical documentation',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Reading Room',
						address: 'Mira Street, 19, Office B-203',
						timetable: 'Mon-Fri 9:00–19:00',
						description:
							'Scientific and educational publications of technical profile and normative-technical documentation',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Reading Room',
						address: 'Mira Street, 19, Office B-301',
						timetable: 'Mon-Fri 9:00–19:00',
						description:
							'Scientific and educational publications of technical profile and normative-technical documentation',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Department',
						address: 'Mira Street, 19, Office B-401',
						timetable: 'Mon-Fri 9:00–19:00',
						description:
							'Dictionaries, reference books, encyclopedic publications, scientific auxiliary bibliographic indexes',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
					{
						title: 'Info Center',
						address: 'Mira Street, 19, Office B-304',
						timetable: 'Mon-Fri 9:00–19:00',
						description:
							'Access to electronic catalogs and resources, assistance with registration in electronic systems. Consultations, seminars, trainings in Russian and English on using electronic resources and services.',
						image:
							'http://158.160.182.170:8082/api/file/53daf7ed-2a91-477f-ab47-6bda98fc134c',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Sports',
				icon: 'http://158.160.182.170:8082/api/file/ec5ee238-46ce-499d-8332-53e230fc4cd5',
				iconList: 'basketball',
				data: [
					{
						title: 'UrFU Swimming Pool',
						address: 'Kominterna Street, 14A',
						timetable: 'Mon-Fri 6:30–22:00',
						phone: '+7 343 375 93 84',
						description:
							'The first class starts at 6:30, the last at 20:45. The schedule of trainings and classes can be found on the information board in the swimming pool building',
						image:
							'http://158.160.182.170:8082/api/file/dbc77cb1-7ff9-46b2-a076-e088841005bb',
					},
					{
						title: 'Athletics Arena',
						address: 'Mira Street, 29',
						timetable: 'Mon-Fri 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Athletics, aerobics, rock climbing',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'UrFU Stadium',
						address: 'Mira Street, 29',
						timetable: 'Mon-Fri 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Athletics, football, futsal',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'SKIVS',
						address: 'Kominterna Street, 14',
						timetable: 'Mon-Fri 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Handball, volleyball, basketball, futsal',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'B.N. Yeltsin Business Center',
						address: 'Kominterna Street, 16',
						timetable: 'Mon-Fri 8:00–22:00',
						phone: '+7 343 375 93 84',
						description: 'Judo, sambo, tennis',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Basketball Hall',
						address: 'Kominterna Street, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Boxing and Weightlifting Hall',
						address: 'Kominterna Street, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: "Student Center 'Zvezdny'",
						address: 'Kominterna Street, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: 'Sports and Recreation Complex',
						address: 'Kominterna Street, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
					{
						title: "'Taiping' Hall",
						address: 'Kominterna Street, 16',
						image:
							'http://158.160.182.170:8082/api/file/15479011-8676-4be4-9b6e-9df3d5463840',
					},
				],
			},
			{
				content_type: 'default_block_list',
				title: 'Bank',
				icon: 'http://158.160.182.170:8082/api/file/52f053aa-7689-4bd6-9e27-6dfd7c009ba6',
				iconList: 'wallet',
				data: [
					{
						title: 'SKB Bank',
						address: 'Lenina Street, 49',
						phone: '+7 343 375 93 84',
						description:
							'At this bank you can pay for tuition and accommodation, as well as get a stipend bank card and exchange currency',
					},
					{
						title: 'SKB Bank',
						address: 'Mira Street, 19',
						phone: '+7 343 375 93 84',
						description:
							'At this bank you can pay for tuition and accommodation, as well as get a stipend bank card and exchange currency',
					},
					{
						title: 'SKB Bank',
						address: 'Bolshakova Street, 97',
						phone: '+7 343 375 93 84',
						description:
							'At this bank you can pay for tuition and accommodation, as well as get a stipend bank card and exchange currency',
					},
				],
			},
			{
				content_type: 'drop_down_list',
				title: 'Frequently Asked Questions',
				icon: 'http://158.160.182.170:8082/api/file/b575b615-c170-4508-b1b4-798ce51f9506',
				data: {
					title: '',
					subTitle: '',
					icon: 'document',
					elements: [
						{
							title: 'Will someone be able to meet me at the airport?',
							description:
								'To have our volunteers meet you at the airport, fill out the arrival form.',
							link: 'https://urfu.ru/anketa',
						},
						{
							title:
								"I want to apply for an E-card, but I don't have a student ID. What should I do?",
							description:
								'If you are an exchange student, contact one of the academic mobility coordinators to obtain an enrollment certificate.',
						},
						{
							title: 'In what currency should I pay for my education?',
							description:
								'All monetary transactions are made in rubles. Euros and dollars can be easily exchanged for rubles.',
						},
						{
							title: 'What living conditions does the university provide?',
							description:
								'The university provides a bed in a room for 2-4 people. The approximate cost is 1000 rubles per person per month.',
						},
						{
							title: 'How much money do I need for living expenses per month?',
							description: 'We recommend having at least $250 with you.',
						},
						{
							title:
								"I'm going to travel to another city in Russia for a few days. Should I inform someone about this?",
							description:
								'Of course, you should come to office GUK-109 (Mira Street, 19).',
						},
						{
							title:
								'What should I do if I find myself in an emergency situation (theft, health threat, conflict, etc.)?',
							description:
								'You need to contact the UrFU security service or the Center for Adaptation of International Students, Mira Street, 19, office GUK-209',
						},
					],
				},
			},
			{
				content_type: 'default_block',
				title: 'Personal Account',
				icon: 'http://158.160.182.170:8082/api/file/c1e8dcf9-7131-4994-9113-47b51864659e',
				data: {
					description:
						'Personal account is available only in Russian and English!',
					link: 'https://istudent.urfu.ru/',
				},
			},
		],
	},
]
