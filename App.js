import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
            <View style={styles.container}>
            <Text style={styles.mainTitle}>Udaci Mobile Flashcards</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <DeckList />
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        color: 'red',
        fontSize: 20
    }
});


// export default class App extends React.Component {
//     render() {
//         return (

//         <View style={styles.container}>
//             <DeckList />
//         </View>
//         )
//     }
// }
