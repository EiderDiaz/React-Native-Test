import React from 'react';
import { StyleSheet,
   Text,
    View,
     Button,
      Alert,
       Image,
   } from 'react-native';

import FBSDK, {LoginButton,AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDAi0k1u4rv4Dqm3DtA4xrDebdAw6WQgHs",
  authDomain: "platzimusic-c7b96.firebaseapp.com",
  databaseURL: "https://platzimusic-c7b96.firebaseio.com",
  projectId: "platzimusic-c7b96",
  storageBucket: "",
  messagingSenderId: "285985287046"
};
firebase.initializeApp(config);
const {FacebookAuthProvider} = firebase.auth
const firebaseAuth = firebase.auth()
//const provider = new firebase.auth.FacebookAuthProvider();


export default class LoginView extends React.Component {

  constructor(props){
     super(props);

     this.state = {
       credentials : "Hello World"
     }
  }
  componentWillMount(){
    AccessToken.getCurrentAccessToken()
    .then((data) => {
      this.authenticaUser(data.accessToken.toString())
      console.warn("si que si", this.state.credentials)

        })

  }

authenticaUser = (accesToken) => {
  const credential = FacebookAuthProvider.credential(accesToken)
 firebaseAuth.signInAndRetrieveDataWithCredential(credential)
 .then((credentials) => {
   this.setState({ credentials: credentials })
  console.warn("Sign In Success", credentials.displayName);
}).catch(function(error) {
  console.warn("Sign In Error", error);
});

}

handleLoginFinished = (error, result) => {
  if (error) {
    console.error("login has error: " + result.error);
  }
  else if (result.isCancelled) {
    console.error("login is cancelled.");
  }
  else {
    AccessToken.getCurrentAccessToken().then((data) => {
      this.authenticaUser(data.accessToken.toString())

      //Actions.home()
        })
  }
}
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome} >Welcome to the Juungle</Text>
          <Text style={styles.welcome}>{this.state.credentials && this.state.credentials.displayName}</Text>
        <LoginButton
         readPermissions={['public_profile','email']}
         onLoginFinished= {this.handleLoginFinished }
         onLogoutFinished={() => alert("logout.")}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcome:{
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  }

});
