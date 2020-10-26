import React from 'react';
import MovieStyles from "../styles/MovieDescriptionStyles";
import { Text, Modal, Image, View, TouchableHighlight } from "react-native"

const MovieDescription = ( props ) => {
    const { description, modalVisible, closeMovieDecription } = props

    return (
        <Modal
            animationType="fade"
            transparent={ false }
            visible={ modalVisible }
            onRequestClose={ closeMovieDecription }>
            <View style={ MovieStyles.modalUp }>
                <View>
                    <Text style={ MovieStyles.title }>{ description.Title }</Text>
                    <Text style={ MovieStyles.rating }> &#10026;Rating: { description.imdbRating }</Text>
                    <Text style={ MovieStyles.plot }>{ description.Plot }</Text>
                    <Image
                        source={ { uri: description.Poster } }
                        style={ MovieStyles.imageMovie }
                        resizeMode="cover"
                    />
                </View>
            </View>
            <TouchableHighlight onPress={ closeMovieDecription }>
                <Text style={ MovieStyles.closeBtn }>Close</Text>
            </TouchableHighlight>
        </Modal>
    )
}

export default MovieDescription
