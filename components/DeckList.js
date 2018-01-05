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
            .then( decks => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))

    }

    renderItem = (item) => {
        return (
            <Text>{item.title}</Text>
        )
    }

    render () {
        const { decks } = this.props;

        return (
            <View style={styles.content}>
                <Text style={styles.title}>All Decks</Text>
                <View style={styles.deckContainer}>
                    { Object.keys(decks).map((key) => {
                        const deck = decks[key]
                        return (
                            <TouchableOpacity style={styles.deck} key={key} onPress={() => this.props.navigation.navigate(
                                'DeckDetails',
                                { title: key })}>
                                <Text style={[styles.deckText, {color: 'red'}]}>{deck.title}</Text>
                                { deck && deck.questions
                                    ? <Text style={styles.deckText}>{deck.questions.length} card{deck.questions.length > 1 ? 's' : ''}</Text>
                                    : null }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 10
    },
    deckContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    deck: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        padding: 10,
    },
    deckText: {
        fontSize: 18,
        padding: 20
    }
})


export default connect(mapStateToProps)(DeckList)
