import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { white, purple } from '../utils/colors';
import { submitCard, getDecks } from '../utils/api';
import { receiveDecks } from '../actions';


class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Question',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }

    onSubmitCard = () => {
        const { deck, title, dispatch, navigation } = this.props;
        const card = this.state;

        submitCard(title, deck, card)
            .then( () => getDecks())
            .then( decks => dispatch(receiveDecks(decks)))
            .then( () => navigation.navigate('DeckDetails', { title }))
    }


    render() {
        const { question, answer } = this.state;

        return (
            <View>
                <Text style={styles.subtitle}>Add question</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text style={styles.subtitle}>Add answer</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <Button
                    onPress={() => this.onSubmitCard()}
                    title='Add question'
                    color="#841584"
                    accessibilityLabel='Add a new question'
                />
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        title: props.navigation.state.params.title,
        deck: state[props.navigation.state.params.title]
    }
}


const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        padding: 10
    }
});

export default connect(mapStateToProps)(AddCard);
