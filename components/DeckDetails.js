import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Animated } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';
import Quiz from './Quiz';



class DeckDetails extends Component {
    state = {
        width: new Animated.Value(0),
        height: new Animated.Value(0)
    }

    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title: title
        }
    }

    componentDidMount() {
        const { width, height } = this.state;

        Animated.spring(width, { toValue: 370, speed: 5 }).start();
        Animated.spring(height, { toValue: 370, speed: 5 }).start();
    }

    render() {
        const { deck } = this.props;
        const { height, width } = this.state;
        return (
            <Animated.View style={[styles.container, { height, width }]}>
                <Text style={styles.cardText}>
                    {deck.questions.length} card{deck.questions.length > 1 || deck.questions.length === 0 ? 's' : ''}
                </Text>
                {deck.questions.length
                    ? <TouchableOpacity
                        style={styles.deckBtn}
                        onPress={() => this.props.navigation.navigate(
                        'Quiz',
                        { title: deck.title })}>
                        <Text style={styles.btnText}>START QUIZ</Text>
                    </TouchableOpacity>
                    : null }
                <TouchableOpacity
                    style={styles.deckBtn}
                    onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    { title: deck.title })}>
                    <Text style={styles.btnText}>ADD CARD</Text>
                </TouchableOpacity>
            </Animated.View>
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
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    cardText: {
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 20
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
