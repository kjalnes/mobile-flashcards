import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'Mobile-Flashcards:decks'


function setDummyData () {

    let dummyData = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        Node: {
            title: 'Node',
            questions: [
                {
                    question: 'What is Node?',
                    answer: 'Node.js is an open source server framework.'
                },
                {
                    question: 'What Can Node.js Do?',
                    answer: 'Node.js can generate dynamic page content, can create, open, read, write, delete, and close files on the server, can collect form data, can add, delete, modify data in your database.'
                }
           ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
           ]
        },
        Redux: {
            title: 'Redux',
            questions: [
                {
                    question: 'What is a redux store?',
                    answer: 'A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.'
                }
           ]
        },
    }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}



export function formatResults (results) {
  // console.log('results', results)
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}



