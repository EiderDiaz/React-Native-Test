import React from 'react';
import { StyleSheet,
   Text,
    View,
     Button,
      Alert,
       Image,
   } from 'react-native';
import ArtistBox from './ArtistBox'
import {getArtists } from './api-client'

export default class ArtistDetailView extends React.Component {

  render() {
    const artist =   this.props.artist

    return (
      <View style={styles.container}>
    <ArtistBox artist={artist}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'lightgray'
  },

});
