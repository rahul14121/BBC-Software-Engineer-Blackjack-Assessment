import Store from '../Store/Store.js';
import { PrepareCards } from '../Utils/Utils.js';
import ActionType from './ActionTypes.js';


/**
 * This function is activated when the user resets the deck. The function will reshuffle the cards.
 * @returns An object with two properties: type and payload.
 */
const loadCards = () => {
    const decks = 6;

    return {
        type: ActionType.loadCards,
        payload: PrepareCards(decks)
    }
}

const resetCards = () => {
    return {
        type: ActionType.resetCards,
        payload: []
    }
}

const drawDealerCards = () => {
    console.log("card log bug")
    const cards = Store.getState().cards;
    console.log(cards)
    const dealerCard = cards[Math.floor(Math.random() * cards.length)];
    
    return {
        type: ActionType.addDealerCards,
        payload: [dealerCard]
        
    }
}

const drawPlayerCards = () => {
    const cards = Store.getState().cards;
    const playerCard = cards[Math.floor(Math.random() * cards.length)];
    return {
        type: ActionType.addPlayerCards,
        payload: [playerCard]
    }
}

export {  resetCards, drawDealerCards, loadCards, drawPlayerCards}
