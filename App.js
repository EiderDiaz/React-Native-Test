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
//import {Scene, Router} from 'react-native-router-flux';
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'


export default class App extends React.Component {
render() {
  // esta funcion render retorna la navegacion de las esenas home y artistdetail
      return <HomeView></HomeView>
  }

}
