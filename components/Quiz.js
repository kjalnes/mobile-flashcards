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
    }

    componentDidMount() {
    }

    render() {
        const { deck, title } = this.props;
        const { score, cardCount, cardId } = this.state;
        const totalQuestions = deck.questions.length;

        return (
            <View>
                <Text>{totalQuestions} card{totalQuestions > 1 || totalQuestions < 1 ? 's' : ''}</Text>
                <View>
                    {cardCount <= totalQuestions
                        ?   <View>
                                <Text>{cardCount } / {totalQuestions}</Text>
                                <Card card={deck.questions[cardId]} title={title} calcScore={this.calcScore.bind(this)} />
                            </View>
                        :   <Text>You're total score is {score/totalQuestions*100}%</Text>}
                </View>
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

export default connect(mapStateToProps)(Quiz);
