import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { contentType, TDefaultBlock, TIcon, TSection, typeBlock } from './types'
import { RootStackParamList } from '../components/navigation/Navigation'
import { Alert } from 'react-native'

export const switchSection = (
	block: TSection | TDefaultBlock[] | typeBlock[],
	contentType: contentType,
	navigation: StackNavigationProp<
		RootStackParamList,
		'Home' | 'Section' | 'ListLink'
	>,
	title?: string
) => {
	switch (contentType) {
		case 'default_block': {
			navigation.navigate('Section', {
				title: 'title' in block ? block.title : '',
				data: 'data' in block ? (block.data as typeBlock) : ({} as typeBlock),
			})
			break
		}
		case 'default_blocks': {
			navigation.navigate('Section', {
				title:
					'data' in block && 'elements' in block.data
						? block.data.elements[0] && 'title' in block.data.elements[0]
							? (block.data.elements[0].title as string)
							: ''
						: '',
				data: ('data' in block && 'elements' in block.data
					? block.data.elements[0]
					: {}) as TDefaultBlock,
			})
			break
		}
		case 'drop_down_list_list': {
			navigation.navigate('ListLink', {
				title: 'title' in block ? block.title : '',
				content_type: 'drop_down_list',
				data:
					'data' in block ? (block.data as typeBlock[]) : ({} as typeBlock[]),
			})
			break
		}
		case 'default_block_list': {
			navigation.navigate('ListLink', {
				icon: 'iconList' in block ? (block.iconList as TIcon) : ('link' as TIcon),
				title: 'title' in block ? block.title : '',
				content_type: 'default_blocks',
				data:
					'data' in block ? (block.data as typeBlock[]) : ({} as typeBlock[]),
			})
			break
		}
		case 'drop_down_list': {
			navigation.navigate('BlockList', {
				title: 'title' in block ? block.title : title ? title : '',

				elements:
					'data' in block && 'elements' in block.data
						? (block.data.elements as typeBlock[])
						: ({} as typeBlock[]),
			})

			if ('data' in block && Array.isArray(block.data)) {
			} /* else if (Array.isArray(block) && 'description' in block[0]) {
				navigation.navigate('BlockList', {
					title: title ? title : '',
					blocks: block,
				})
			} */
			break
		}
		default: {
			navigation.navigate('Section', {
				title: 'title' in block ? block.title : '',
				data: 'data' in block ? (block.data as typeBlock) : ({} as typeBlock),
			})
			break
		}
	}
}
