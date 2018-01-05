import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';
import Quiz from './Quiz';



class DeckDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title: title
        }
    }

    render() {
        const { deck } = this.props;

        return (
            <View>
                <Text style={styles.cardText}>{deck.questions.length} card{deck.questions.length > 1 ? 's' : ''}</Text>
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => this.props.navigation.navigate(
                    'Quiz',
                    { title: deck.title })}>
                    <Text style={styles.btnText}>START QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    { title: deck.title })}>
                    <Text style={styles.btnText}>ADD CARD</Text>
                </TouchableOpacity>
            </View>
      )
    }
}

function mapStateToProps (state, { navigation }) {
    const { title } = navigation.state.params;
    return {
        deck: state[title],
    }
}

const styles = StyleSheet.create({
    cardText: {
        fontSize: 18,
        textAlign: 'center',
        padding: 20
    },
    deckBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})

export default connect(mapStateToProps)(DeckDetails)
