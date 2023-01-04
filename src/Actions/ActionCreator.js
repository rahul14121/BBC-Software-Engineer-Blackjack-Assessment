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

const resetCards = () => {
    return {
        type: ActionType.resetCards,
        payload: []
    }
}

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

const calculateRoundResult = (dealerSum, playerSum, ) => {
    return {
        type: ActionType.calculateRoundResult,
        payload: {
            roundEnd: true,
            result: GetRoundResults(dealerSum, playerSum)
        }
    }
}

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
