import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import ResultsStyles from '../styles/ResultMoviesStyles';

const ResultMovies = ( props ) => {
    return (

        <ScrollView >
            {props.results.map( result => (
                <View style={ ResultsStyles.results }>
                    {result.Poster !== "N/A" ? (
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
            ) ) }
        </ScrollView>
    )
}

export default ResultMovies