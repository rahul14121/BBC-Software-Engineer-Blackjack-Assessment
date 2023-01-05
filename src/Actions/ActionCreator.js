import Store from '../Store/Store.js';
import { PrepareCards, GetCardTotal, GetRoundResults } from '../Utils/Utils.js';
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

/**
 * This function returns an object with a type property and a payload property.
 * @returns An object with a type and a payload.
 */
const resetCards = () => {
    return {
        type: ActionType.resetCards,
        payload: []
    }
}

/**
 * It takes an array of cards, picks one at random, and returns an object with the card and its
 * position in the array.
 * @param cards - [{id: 1, name: "Ace of Spades", value: 11, image:
 * "https://deckofcardsapi.com/static/img/AS.png"},
 * @returns An object with a type and a payload.
 */
const drawDealerCards = (cards) => {
    console.log("card log bug")
    const index = Math.floor(Math.random() * cards.length);
    //console.log(cards)
    const dealerCard = cards[index];
    
    return {
        type: ActionType.addDealerCards,
        payload: {
            card: [dealerCard],
            position: index
        }
        
    }
}

/**
 * It takes an array of cards, picks one at random, and returns an object with the card and its
 * position in the array.
 * @param cards - an array of objects
 * @returns An object with a type and a payload.
 */
const drawPlayerCards = (cards) => {
    const index = Math.floor(Math.random() * cards.length);
    const playerCard = cards[index];
    return {
        type: ActionType.addPlayerCards,
        payload: {
            card: [playerCard],
            position: index
        }
    }
}


/**
 * The dealer draws cards until the total is 17 or greater.
 * @param cards - the deck of cards
 * @param dealerCards - [{value: "A", suit: "Spades"}, {value: "A", suit: "Hearts"}]
 * @returns An object with a type and a payload.
 */
const dealerDrawsSeventeen = (cards, dealerCards) => {
    var total = 0;
    var indexes = [];

    while (total < 17) {
        const index = Math.floor(Math.random() * cards.length);
        const nextDealerCard = cards[index];
        indexes.push(index);
        dealerCards = dealerCards.concat([nextDealerCard]);
        total = GetCardTotal(dealerCards);
    }

    return {
        type: ActionType.dealerDrawsSeventeen,
        payload: {
            cards: dealerCards,
            position: indexes
        }
    }
}

/**
 * It returns an object with a type and a payload, where the payload is an object with two properties,
 * roundEnd and result, where roundEnd is a boolean and result is a string.
 * @param dealerSum - the sum of the dealer's cards
 * @param playerSum - the sum of the player's cards
 * @returns An object with a type and a payload.
 */
const calculateRoundResult = (dealerSum, playerSum, ) => {
    return {
        type: ActionType.calculateRoundResult,
        payload: {
            roundEnd: true,
            result: GetRoundResults(dealerSum, playerSum)
        }
    }
}

/**
 * It returns an object with a type and a payload. 
 * 
 * The type is a string that is a constant. 
 * 
 * The payload is an object with two properties. 
 * 
 * The first property is a boolean. 
 * 
 * The second property is a string.
 * @returns An object with a type and a payload.
 */
const resetRoundSummary = () => {
    return {
        type: ActionType.resetRoundSummary,
        payload: {
            roundEnd: false,
            result: ''
        }
    }
}

export {  resetCards, drawDealerCards, loadCards, drawPlayerCards, dealerDrawsSeventeen, calculateRoundResult, resetRoundSummary}
