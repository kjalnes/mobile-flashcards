import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { submitDeck, getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class AddDeck extends Component {
    state = {
        text: ''
    }

    onSubmitDeck = (deck) => {
        const { dispatch, navigation } = this.props;
        submitDeck(deck)
            .then( () => getDecks())
            .then( decks => dispatch(receiveDecks(decks)))
            .then( () => navigation.navigate('DeckDetails', { title: deck }))
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={() => this.onSubmitDeck(this.state.text)}
                    title='Add deck'
                    color="#841584"
                    accessibilityLabel='Add a new deck'
                />
            </View>
        )
    }
}


export default connect()(AddDeck);
