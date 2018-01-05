export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}
