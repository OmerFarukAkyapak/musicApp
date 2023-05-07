import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


const App = () => {
  const [searchList, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.separator} />
  const onSearch = (text) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.top}>Basic Music App</Text>
      <SearchBar onSearch={onSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={searchList}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
      <Text style={styles.text}>Created by Faruk Akyapak</Text>
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
  },
  text: {
    textAlign: 'center'
  },
  top: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#29202b',
    textAlign: 'center'
  }
})