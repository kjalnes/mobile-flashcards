import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';


class Card extends Component {
    state = {
        showAnswer:false
    }

    toggleShowAnswer = () => {
        console.log(this.state)
        this.setState({showAnswer: !this.state.showAnswer});
    }


    calcScore(answer) {
        this.setState({showAnswer: false});
        this.props.calcScore(answer);
    }



    render() {
        const { card, title, calcScore } = this.props;
        return (
            <View>
                {!this.state.showAnswer
                 ?  <View>
                        <Text>{card.question}</Text>
                    </View>
                 : <Text>{card.answer}</Text>
                }
                <TouchableOpacity
                    onPress={() => this.toggleShowAnswer()}>
                    <Text>{this.state.showAnswer ? 'Question' : 'Answer'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => this.calcScore(true)}>
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => this.calcScore(false)}>
                    <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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


export default Card;

