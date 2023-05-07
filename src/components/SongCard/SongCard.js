import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({ song }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.imageUrl }} />
            <View style={styles.info_conteiner}>
                <Text style={styles.titletext}>{song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.details_container}>
                        <Text style={styles.artisttext}>{song.artist}</Text>
                        <Text style={styles.yeartext}>{song.year}</Text>
                    </View>

                    {song.isSoldOut && (
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_text}>Sold Out!</Text>
                        </View>)}
                </View>
            </View>
        </View>

    )
}

export default SongCard;