import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = () => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search Here'
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

export default SearchBar;