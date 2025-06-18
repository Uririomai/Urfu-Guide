import { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video, { ReactVideoSourceProperties, VideoRef } from 'react-native-video'

type VideoProps = {
	path: string
}

export const VideoPlayer = ({ path }: VideoProps) => {
	const videoRef = useRef<VideoRef>(null)

	return (
		<View style={styles.backgroundVideo}>
			<Video source={{ uri: path }} style={styles.video} controls />
		</View>
	)
}
export default VideoPlayer

const styles = StyleSheet.create({
	backgroundVideo: {
		width: '90%',
		height: 'auto',
		backgroundColor: 'red',
		margin: 'auto',
		marginRight: 23,
		marginBottom: 15,
	},
	video: {
		width: '100%',
		aspectRatio: 16 / 9,
	},
})
