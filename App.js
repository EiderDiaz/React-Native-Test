import React from 'react';
import { StyleSheet,
   Text,
    View,
      Alert,
       Image,
       Platform,
   } from 'react-native';
import ArtistBox from './ArtistBox'
import ArtistList from './ArtistList'
import {getArtists } from './api-client'
import { Router, Scene,Stack } from 'react-native-router-flux';
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'
import LoginView from './LoginView'


export default class App extends React.Component {
  //esta linea obtiene si es android o no
//  const isAndroid = Platform.OS === 'android';
render() {
  // esta funcion render retorna la navegacion de las esenas home y artistdetail
      return <Router>
          <Stack key="root">
           <Scene key="login" component={LoginView} />
            <Scene key="home" component={HomeView} />
            <Scene key="artistDetail" component={ArtistDetailView} />
          </Stack>
      </Router>
  }

}
