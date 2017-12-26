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
                    Decks
                </Text>
                <View>
                    { Object.keys(decks).map((key) => {
                        const deck = decks[key]
                        return (
                            <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate(
                                'DeckDetails',
                                { title: key })}>
                                <Text>{deck.title}</Text>
                                <Text>{deck.questions.length} card{deck.questions.length > 1 ? 's' : ''}</Text>
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
