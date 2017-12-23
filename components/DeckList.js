import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

class DeckList extends Component {

    state = {
        ready: false,
    }

    componentDidMount () {
        const { dispatch } = this.props;

        getDecks()
            .then( decks => {
                // console.log('decks', decks)
                return dispatch(receiveDecks(decks))
            })
            .then(() => this.setState(() => ({ready: true})))

    }

    render () {
        console.log('this.props', this.props)
        return (
            <View>
                <Text>
                    All Decks
                    {JSON.stringify(this.props.decks)}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (decks) => {
    console.log('decks in mapStateToProps', decks)
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)
// export default DeckList

  // componentDidMount () {
  //   const { dispatch } = this.props

  //   fetchCalendarResults()
  //     .then((entries) => dispatch(receiveEntries(entries)))
  //     .then(({ entries }) => {
  //       if (!entries[timeToString()]) {
  //         dispatch(addEntry({
  //           [timeToString()]: getDailyReminderValue()
  //         }))
  //       }
  //     })
  //     .then(() => this.setState(() => ({ready: true})))
  // }
