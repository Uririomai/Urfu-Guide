import React from 'react'
import { Image, StyleSheet } from 'react-native'

type ImageProps = {
	src: string
}

const ImageBlock = ({ src }: ImageProps) => {
	return (
		<>
			<Image style={styles.image} source={{ uri: src }} />
		</>
	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		
		objectFit: 'cover',
		minHeight: 400,
		maxHeight: 400,
	},
})

export default ImageBlock
