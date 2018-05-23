import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ArtistBox extends React.Component {

  render() {

    const {image,name,likes,comments} = this.props.artist

    return (

        <View style={styles.artistbox }>

        <Image style={styles.image} source = {{ uri :image }} />

        <View style={styles.info}>
          <Text style={styles.name}> {name} </Text>
            <View style={styles.row}>

            <View style={styles.iconContaniner}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>

              <View style={styles.iconContaniner}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count} >{comments}</Text>
              </View>

            </View>
          </View>
        </View>


    );
  }
}

const styles = StyleSheet.create({

  image :{
    width : 150,
    height : 150
  },

  artistbox:{
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: .8

  },

  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  name : {
    fontSize : 20,
    marginTop: 10,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15
  },
  iconContaniner:{
    flex: 1,
    alignItems: 'center'
  },
  count :{
    color: 'gray'
  }
});
