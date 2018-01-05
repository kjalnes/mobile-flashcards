import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';
import Card from './Card';
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers';


class Quiz extends Component {
    state = {
        cardCount: 1,
        cardId: 0,
        score: 0,

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Quiz',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }

    calcScore(correct) {
        if(correct) {
            this.setState({score: this.state.score+1})
        }

        this.setState({
            cardId: this.state.cardId+1,
            cardCount: this.state.cardCount+1,
            showAnswer: false
        });

        if (this.state.cardCount === this.state.totalQuestions) {
            clearLocalNotifications()
                .then(setLocalNotification)
        }
    }

    componentDidMount() {
    }

    render() {
        const { deck, title } = this.props;
        const { score, cardCount, cardId } = this.state;
        const totalQuestions = deck.questions.length;

        return (
            <View>
                {cardCount <= totalQuestions
                    ? <View>
                        <Text style={styles.cardCount}>{cardCount } / {totalQuestions}</Text>
                        <Card card={deck.questions[cardId]} title={title} calcScore={this.calcScore.bind(this)} />
                    </View>
                    : <View>
                           <View style={styles.scoreContainer}>
                                <Text style={styles.score}>Your total score is {(score/totalQuestions*100).toFixed()}%</Text>
                                <TouchableOpacity
                                    style={styles.deckBtn}
                                    onPress={() => this.props.navigation.navigate(
                                    'Quiz',
                                    { title })}>
                                    <Text style={styles.btnText}>Do Quiz Again</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.deckBtn}
                                    onPress={() => this.props.navigation.navigate(
                                    'DeckDetails',
                                    { title })}>
                                    <Text style={styles.btnText}>View Deck</Text>
                                </TouchableOpacity>
                            </View>
                    </View>}
            </View>
        )
    }
}


function mapStateToProps (state, { navigation }) {
    const { title } = navigation.state.params
    return {
        title,
        deck: state[title],
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },
    score: {
        fontSize: 34,
        textAlign:'center',
        margin: 20
    },
    cardCount: {
        fontSize: 22
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
});

export default connect(mapStateToProps)(Quiz);
