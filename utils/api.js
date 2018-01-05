import { AsyncStorage } from 'react-native';
import { formatResults, DECK_STORAGE_KEY } from './_decks'

export function getDecks () {
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(formatResults)
}

export function submitDeck(deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[deck]: { title: deck, questions: [] }}))
}


export function submitCard(title, deck, card) {
    const questions = deck.questions.concat(card);
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]: { questions }}))
}



// AsyncStorage.clear();
