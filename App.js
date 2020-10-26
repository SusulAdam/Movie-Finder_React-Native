import React from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AppStyles from './styles/AppStyles';
import apiKey from "./constans/apiKey";
import ResultMovies from "./components/ResultMovies";


export default class App extends React.Component {

  constructor ( props ) {
    super( props );
    this.state = {
      searchValue: "",
      results: [],
      selectedMovie: {}

    };
  }

  getResponseFromApi = () => {
    if ( this.state.searchValue.length > 2 ) {
      fetch( apiKey + "&s=" + this.state.searchValue )
        .then( response => response.json() )
        .then( response => {
          let results = response.Search
          this.setState( {
            results
          } )
        } )
    } else {
      Alert.alert( "Text is too short", "Please write at leats 3 characters", [ { text: "Close", style: "negative" } ] )
    }
  }

  getMovieFromApi = ( id, image ) => {
    fetch( apiKey + "&i=" + id )
      .then( response => response.json() )
      .then( ( response ) => {
        let result = response;

        this.setState( prevState => {
          return { ...prevState, selectedMovie: result, image }
        } )
      } )

    console.log( this.state.selectedMovie );
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
              placeholder="Enter a movie name"
              value={ this.state.searchValue }
              onChangeText={ text => this.handleChangeSearchText( text ) }
              onSubmitEditing={ this.getResponseFromApi }
            />
            { this.state.results ? <ResultMovies getMovieFromApi={ this.getMovieFromApi } results={ this.state.results } /> : <Text style={ AppStyles.errorMessage }>Unfortunately no video found</Text> }
          </View>

        </View>
      </TouchableWithoutFeedback>

    );
  }

}

