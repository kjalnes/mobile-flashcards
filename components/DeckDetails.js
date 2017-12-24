import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';

class DeckDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params

        return {
            title: deckId
        }
    }

    render() {
        // console.log('this.props', this.props)
        const { deck } = this.props;
        // console.log('deck', deck)
        return (
            <View>
                {deck.questions.map((_question, key) => {
                    const { question, answer } = _question;
                    return (
                        <View key={key}>
                            <Text>{question}</Text>
                            <Text>{answer}</Text>
                        </View>
                    )
                })}
            </View>
      )
    }
}

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  // console.log('state[deckId]', state[deckId])
  return {
    deckId,
    deck: state[deckId],
  }
}


export default connect(mapStateToProps)(DeckDetails)
