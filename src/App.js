import React, { useState } from "react";
import { Button, FlatList, Switch, Text, View,StyleSheet } from "react-native";
import music_data from './music-data.json';
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar";

function App() {

    const [list, setList] = useState(music_data)
    
    const renderSong =({item}) => <SongCard song = {item}/>;

    const renderSeperator = () => <View style = {styles.seperator}/>

    const handleChange = (text) => {
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList)
    };

    return(

        
            <View style = {styles.container}>
                <SearchBar onChange = {handleChange}/>
                <FlatList
                keyExtractor = {item => item.id}
                data = {list}
                renderItem = {renderSong}
                ItemSeparatorComponent = {renderSeperator}
                />

            </View>
       
    )
    

}

export default App;

const styles = StyleSheet.create ({
    container : {flex :1},
    seperator: {
        borderWidth : 1,
        borderColor: '#e0e0e0',
    }
})