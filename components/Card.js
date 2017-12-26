import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';


class Card extends Component {
    render() {
        const { card } = this.props;
        return (
            <View>
                <Text>{card.question}</Text>
                <Text>{card.answer}</Text>
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => console.log('clicked')}>
                    <Text style={styles.btnText}>Answer</Text>
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

