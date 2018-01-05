import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';


class Card extends Component {
    state = {
        showAnswer:false
    }

    toggleShowAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    }


    calcScore(answer) {
        this.setState({showAnswer: false});
        this.props.calcScore(answer);
    }



    render() {
        const { card, title, calcScore } = this.props;
        return (
            <View style={styles.container}>
                {!this.state.showAnswer
                 ? <Text style={[styles.item, styles.itemText]}>{card.question}</Text>
                 : <Text style={[styles.item, styles.itemText]}>{card.answer}</Text>
                }
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.toggleShowAnswer()}>
                    <Text style={{textAlign: 'center'}}>{this.state.showAnswer ? 'Question' : 'Answer'}</Text>
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,

    },
    itemText: {
        fontSize: 34,
        textAlign: 'center'
    },
    item: {
        margin: 20,
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


export default Card;

