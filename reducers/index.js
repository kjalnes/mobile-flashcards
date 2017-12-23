import { ADD_DECK, RECEIVE_DECKS } from '../actions';

function decks(state={}, action) {
    console.log('action:', action)
    switch (action.type) {
        case RECEIVE_DECKS :
            console.log('decks in reducer', action.decks)
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.deck
            }
        default :
            return state
    }
}

export default decks;
