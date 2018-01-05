import { AsyncStorage } from 'react-native';
import { formatResults, DECK_STORAGE_KEY } from './_decks'

export function getDecks () {
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(formatResults)
}

// export function getDeck (title) {
//      return AsyncStorage.getItem(DECK_STORAGE_KEY)
//         .then(formatResults)
//         .then( decks => decks[title])
// }

export function submitDeck(deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[deck]: { title: deck, questions: [] }}))
}


export function submitCard(title, deck, card) {
    const questions = deck.questions.concat(card);
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]: { questions }}))
}



// AsyncStorage.clear();

// export function submitDeck(deck) {
//     console.log('submitDeck being called', deck)
//     return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({
//         [deck]: { title: deck, questions: []}
//     }))
// }


// export function submitEntry({ entry, key }) {
//     return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//         [key] : entry
//     }))
// }

// export function removeEntry(key) {
//     return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//         .then( res => {
//             const data = JSON.parse(res);
//             data[key] = undefined
//             delete data[key]
//             AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//         })
// }




/*To manage your AsyncStorage database, you'll want to create four different helper methods.

getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. */
