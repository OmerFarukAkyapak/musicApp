import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import React from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'

const renderSong = ({ item }) => <Text>{item.title}</Text>

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'

  }
})