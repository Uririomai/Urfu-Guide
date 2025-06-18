import React, { JSX } from 'react'
import { TDefaultBlock, typeBlock } from '../../../utils/types'
import { Alert, Image, StyleSheet, View } from 'react-native'
import IconText from '../../ConstructorElements/IconText'
import ImageBlock from '../../ConstructorElements/Image'
import { FlatList } from 'react-native-gesture-handler'
import { VideoPlayer } from '../../ConstructorElements/Video'
import Video, { ReactVideoSourceProperties } from 'react-native-video'

type ConstructorBlockProps = {
	data: TDefaultBlock
}

const ConstructorBlock = ({ data }: ConstructorBlockProps) => {
	const keys = Object.keys(data)
	const arr: React.ReactElement[] = []
	keys.forEach(key => {
		switch (key) {
			case 'image': {
				const imgSrc = data[key] as string
				arr[0] = <ImageBlock key={imgSrc} src={imgSrc} />
				break
			}
			case 'address': {
				arr[1] = (
					<IconText key={data[key]} icon='compass' text={data[key] as string} />
				)
				break
			}
			case 'timetable': {
				arr[2] = (
					<IconText
						key={data[key]}
						icon='time'
						time
						text={data[key] as string}
					/>
				)
				break
			}
			case 'phone': {
				arr[3] = (
					<IconText
						key={data[key]}
						icon='call'
						link={`tel:${data[key] as string}`}
						text={data[key] as string}
					/>
				)
				break
			}
			case 'link': {
				arr[4] = (
					<IconText
						key={data[key]}
						icon='globe'
						link={data[key] as string}
						text={data[key] as string}
					/>
				)
				break
			}
			case 'description': {
				arr[5] = (
					<IconText
						key={data[key]}
						icon='information-circle'
						text={data[key] as string}
					/>
				)
				break
			}
			case 'video': {
				arr[6] = <VideoPlayer path={data[key] as string} />
				break
			}
		}
	})

	return <FlatList data={arr} renderItem={({ item }) => item} />
}

export default ConstructorBlock
