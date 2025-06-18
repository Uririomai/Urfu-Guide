import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

type ImageProps = {
	src: string
}

const ImageBlock = ({ src }: ImageProps) => {
	return <Image style={styles.image} source={{ uri: src }} />
}

const styles = StyleSheet.create({
	imageWrapper: {
		width: '100%',
		height: '100%',
	},
	image: {
		width: '100%',
		minHeight: 300,
		resizeMode: 'contain',
	},
})

export default ImageBlock
