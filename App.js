import React from 'react';
import { StyleSheet,
   Text,
    View,
      Alert,
       Image,
   } from 'react-native';
import ArtistBox from './ArtistBox'
import ArtistList from './ArtistList'
import {getArtists } from './api-client'
import { Router, Scene } from 'react-native-router-flux';
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'


export default class App extends React.Component {
render() {
  // esta funcion render retorna la navegacion de las esenas home y artistdetail
      return <Router>
          <Scene key="root">
            <Scene key="home" component={HomeView} />
            <Scene key="artistDetail" component={ArtistDetailView} />
          </Scene>
      </Router>
  }

}
