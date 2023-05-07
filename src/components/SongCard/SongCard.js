import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({ song }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={song.imageUrl} />
            <View style={styles.info_conteiner}>
                <Text style={styles.titletext}>{song.title}</Text>
                <View style={styles.detail_scontainer}>
                    <Text style={styles.artisttext}>{song.artist}</Text>
                    <Text style={styles.yeartext}>{song.year}</Text>
                </View>
            </View>
        </View>

    )
}

export default SongCard;