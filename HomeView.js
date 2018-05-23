import React from 'react';
import { StyleSheet,
   Text,
    View,
     Button,
      Alert,
       Image,
   } from 'react-native';
import ArtistBox from './ArtistBox'
import ArtistList from './ArtistList'
import {getArtists } from './api-client'

export default class HomeView extends React.Component {

state={
  artists:[]
}
componentDidMount(){
  getArtists()
  .then(data => this.setState({artists:data}))
}

  render() {

    const artists =   this.state.artists;
    return (

      <View style={styles.container}>
    <ArtistList artists={artists}/>
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
