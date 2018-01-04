import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, purple } from '../utils/colors';
import Card from './Card';


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
                <View style={styles.container}>
                    {cardCount <= totalQuestions
                        ?   <View>
                                <Text>{cardCount } / {totalQuestions}</Text>
                                <Card card={deck.questions[cardId]} title={title} calcScore={this.calcScore.bind(this)} />
                            </View>

                        :   <View>
                                <Text style={styles.score}>Your total score is {score/totalQuestions*100}%</Text>
                            </View>}
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    score: {
        fontSize: 34,
        textAlign:'center'
    }
})
export default connect(mapStateToProps)(Quiz);
