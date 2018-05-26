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
export default class LoginView extends React.Component {
//handleLoginFinished =
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome} >welcome to the jungle</Text>
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
