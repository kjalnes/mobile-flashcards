import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

class DeckList extends Component {

    state = {
        ready: false,
    }

    componentDidMount () {
        const { dispatch } = this.props;

        getDecks()
            .then( decks => {
                // console.log('decks', decks)
                return dispatch(receiveDecks(decks))
            })
            .then(() => this.setState(() => ({ready: true})))

    }

    renderItem = (item) => {
        return (
            <Text>{item.title}</Text>
        )
    }

    render () {
        // console.log('this.props.navigation.navigate', this.props.navigation.navigate)
        const { decks } = this.props;
        return (
            <View>
                <Text>
                    All Decks
                </Text>
                <View>
                    { Object.keys(decks).map((key) => {
                        const deck = decks[key]
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(
                                'DeckDetails',
                                { deckId: key }
                                )} key={key}>
                                <Text>{deck.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

            </View>
        )
    }
}

const mapStateToProps = (decks) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)


/*            onPress={() => this.props.navigation.navigate(
              'EntryDetail',
              { entryId: key }
            )}*/
