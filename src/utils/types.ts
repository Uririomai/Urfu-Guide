import { Ionicons } from '@expo/vector-icons'

export type TIcon = React.ComponentProps<typeof Ionicons>['name']
export type contentType =
	| 'default_block'
	| 'default_blocks'
	| 'drop_down_list_list'
	| 'drop_down_list'
	| 'default_block_list'

export type TDefaultBlock = {
	address?: string
	title?: string
	timetable?: string
	phone?: string
	description?: string
	link?: string
	image?: string
}

export type TListLinkBlock = {
	content_type: contentType
	icon?: TIcon
	title: string
	subTitle?: string
	elements: TDefaultBlock[]
}

export type typeBlock = TListLinkBlock | TDefaultBlock

export type TSection = {
	content_type: contentType
	title: string
	icon: string
	data: typeBlock | typeBlock[]
}

type TLanguageSections = {
	code: string
	sections: TSection[]
}

export type dataResponse = TLanguageSections[]
