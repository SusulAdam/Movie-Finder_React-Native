import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import ResultsStyles from '../styles/ResultMoviesStyles';
import apiKey from "../constans/apiKey"

const ResultMovies = ( props ) => {


    return (

        <ScrollView >
            {props.results.map( result => (
                <TouchableHighlight
                    key={ result.imdbID }
                    onPress={ () => props.getMovieFromApi( result.imdbID, result.Poster ) }
                >
                    <View style={ ResultsStyles.results }>
                        { result.Poster !== "N/A" ? (
                            <View>
                                <Image
                                    source={ { uri: result.Poster } }
                                    style={ ResultsStyles.image }
                                    resizeMode="cover"
                                />
                            </View>
                        ) :
                            <Text style={ ResultsStyles.lackOfImage }>We couldn't find any image for this movie</Text> }
                        <Text style={ ResultsStyles.movieName } >{ result.Title }</Text>
                    </View>
                </TouchableHighlight>

            ) ) }
        </ScrollView>
    )
}

export default ResultMovies