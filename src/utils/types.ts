type TDefaultBlock = {
	id: number
	address?: string
	title?: string
	timetable?: string
	phone?: string
	description?: string
}
type TBlock = {
	id: number
	address?: string
	title?: string
	timetable?: string
	phone?: string
	description?: string
}

type typeBlock = TDefaultBlock | TBlock

export type TSection = {
	id: number
	content_type: string
	title: string
	data: typeBlock
}

type TLanguageSections = {
	code: string
	sections: TSection[]
}

export type dataResponse = TLanguageSections[]
