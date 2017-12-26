import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { white, purple } from '../utils/colors';

export default class AddQuestion extends Component {
      static navigationOptions = ({ navigation }) => {
        // const { title } = navigation.state.params

        return {
            title: 'Add Question',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }

    render() {
        return (
            <View>
                <Text>Add a new Question</Text>
            </View>
        )
    }
}
