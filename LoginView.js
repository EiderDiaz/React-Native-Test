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

export default class LoginView extends React.Component {
authenticaUser(accesTokten){
  auth.signInWithCredential(credential).then(function(user) {
  console.log("Sign In Success", user);
  var currentUser = user;
  // Merge prevUser and currentUser data stored in Firebase.
  // Note: How you handle this is specific to your application

  // After data is migrated delete the duplicate user
  return user.delete().then(function() {
    // Link the OAuth Credential to original account
    return prevUser.link(credential);
  }).then(function() {
    // Sign in with the newly linked credential
    return auth.signInWithCredential(credential);
  });
}).catch(function(error) {
  console.log("Sign In Error", error);
});
}
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome} >Welcome to the Juungle</Text>
        <LoginButton
         readPermissions={['public_profile','email']}
         onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.error("login has error: " + result.error);
                  }
                  else if (result.isCancelled) {
                    console.error("login is cancelled.");
                  }
                  else {
                    AccessToken.getCurrentAccessToken()
                    .then(() => {Actions.home()})
                  }
              }}
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
