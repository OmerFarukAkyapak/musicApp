import {
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'



const renderSong = ({ item }) => <SongCard song={item} />
const renderSeparator = () => <View style={styles.separator} />



const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: 'gray'
  }
})