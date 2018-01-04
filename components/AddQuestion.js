import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { white, purple } from '../utils/colors';

export default class AddQuestion extends Component {
    state = {
        text: ''
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



    render() {
        console.log('text', this.state.text)
        return (
            <View>
                <Text>Add a new question</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={() => console.log('butoon clicked')}
                    title='Add question'
                    color="#841584"
                    accessibilityLabel='Add a new question'
                />
            </View>
        )
    }
}
