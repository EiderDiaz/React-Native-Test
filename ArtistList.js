import React from 'react';
import { StyleSheet,
    View,
     Button,
      Alert,
       ListView,
       TouchableOpacity,
      
   } from 'react-native';
import ArtistBox from './ArtistBox'
//import {Actions} from 'react-native-router-flux';

export default class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount(){
    this.updateDataSource(this.props.artists)

  }

componentWillReceiveProps(newProps){
  if (newProps.artists !== this.props.artists) {
  this.updateDataSource(newProps.artists)
  }
}

//metodo declarado modo arrow para que conserve el contexto de this
updateDataSource = (data) => {
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(data)
  })
}
//este es el onclicklistener
handlePress(artist){
  Actions.artistDetail({artist: artist})
}
render() {
  return (
      <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(artist) =>{
              return(
              <TouchableOpacity
                onPress={()=>this.handlePress(artist)}>
                <ArtistBox artist={artist} />
              </TouchableOpacity>
            )}}

          />

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
