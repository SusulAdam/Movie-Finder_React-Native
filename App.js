import React from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppStyles from './styles/AppStyles'
import apiKey from "./constans/apiKey"


export default class App extends React.Component {

  constructor ( props ) {
    super( props );
    this.state = {
      searchValue: "",
      results: [],

    };
  }

  getResponseFromApi = () => {
    fetch( apiKey + "&s=" + this.state.searchValue )
      .then( response => response.json() )
      .then( response => {
        console.log( response );
      } )
  }


  handleChangeSearchText = ( text ) => {
    this.setState( prevState => {
      return ( { ...prevState, searchValue: text } )
    } )
  }

  combinedTouchableFunctions = () => {
    this.getResponseFromApi()
    Keyboard.dismiss()
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={ this.combinedTouchableFunctions }>
        <View style={ AppStyles.container }>
          <View style={ AppStyles.header }>
            <Text style={ AppStyles.title }>ComarMovie</Text>
            <TextInput
              style={ AppStyles.searchMovie }
              placeholder="Enter a name for the movie"
              value={ this.state.searchValue }
              onChangeText={ text => this.handleChangeSearchText( text ) }
              onSubmitEditing={ this.getResponseFromApi }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

