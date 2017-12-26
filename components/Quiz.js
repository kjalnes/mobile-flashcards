import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';
import Card from './Card';


/* may not need a connected component here
instead potentially send the whole deck down with navigation */

class Quiz extends Component {
    state = {
        cardCount: 1,
        cardId: 0,
        score: 0
    }

    static navigationOptions = ({ navigation }) => {
        // const { title } = navigation.state.params
        return {
            title: 'Quiz',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }

    render() {
        const { deck } = this.props;
        return (
            <View>
                <Text>{deck.questions.length} card{deck.questions.length > 1 || deck.questions.length < 1 ? 's' : ''}</Text>
                {deck.questions.map((card, key) => {                    return (
                        <View key={key}>
                            <Text>{this.state.cardCount} / {deck.questions.length}</Text>
                            <Card card={card} />
                        </View>
                    )
                })}
            </View>
        )
    }
}


function mapStateToProps (state, { navigation }) {
    const { title } = navigation.state.params
    return {
        deck: state[title],
    }
}

export default connect(mapStateToProps)(Quiz);
