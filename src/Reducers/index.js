import { combineReducers } from "redux";
import ActionType from "../Actions/ActionTypes.js";

/**
 * If the action type is loadCards, return the payload, if the action type is addDealerCards or
 * addPlayerCards, remove the card from the array, if the action type is dealerDrawsSeventeen, remove
 * the cards from the array.
 * @param [state] - [], action: {type: "loadCards", payload: Array(52)}
 * @param action - {
 * @returns The state of the cards.
 */
const cards = (state = [], action) => {
    switch (action.type) {
        case ActionType.loadCards:
            return action.payload
        case ActionType.addDealerCards:
        case ActionType.addPlayerCards:    
            var cards = state;
            const index = action.payload.position;
            if (index > -1) {
                cards.splice(index, 1);
            }
            return cards
        case ActionType.dealerDrawsSeventeen:
            cards = state;
            const indexes = action.payload.position;
            indexes.forEach((index) => {
                if (index > -1) {
                    cards.splice(index, 1);
                }
            });
            return cards
        default:
            return state
    }
}

/**
 * If the action type is addDealerCards, then return the state concatenated with the action payload
 * card. If the action type is resetCards, then return the action payload. If the action type is
 * loadCards, then return an empty array. If the action type is dealerDrawsSeventeen, then return the
 * action payload cards. Otherwise, return the state.
 * @param [state] - the current state of the reducer
 * @param action - {type: "addDealerCards", payload: {card: {suit: "Spades", value: "Ace"}}}
 * @returns The dealerCards array is being returned.
 */
const dealerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addDealerCards:
            return state.concat(action.payload.card)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        case ActionType.dealerDrawsSeventeen:
            return action.payload.cards
        default:
            return state
    }
}

/**
 * If the action type is addPlayerCards, then add the card to the state. If the action type is
 * resetCards, then reset the state to the payload. If the action type is loadCards, then return an
 * empty array. Otherwise, return the state.
 * @param [state] - the current state of the store
 * @param action - {
 * @returns The state is being returned.
 */
const playerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addPlayerCards:
            return state.concat(action.payload.card)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        default:
            return state
    }
}

/**
 * It returns a new object with the same properties as the previous state, but with the value of the
 * property "result" set to the value of the property "result" of the action.payload object.
 * @param [state] - { roundEnd: false, result: '' }
 * @param action - {type: "calculateRoundResult", payload: {roundEnd: true, result: "You win!"}}
 * @returns The reducer is returning the state.
 */
const roundResult = (state = { roundEnd: false, result: '' }, action) => {
    switch (action.type) {
        case ActionType.calculateRoundResult:
            return Object.assign({}, action.payload)
        case ActionType.resetRoundSummary:
            return Object.assign({}, action.payload)
        default:
            return state
    }
}

/**
 * If the action type is updateStatistics, then return a new state object with the dealerWinCount,
 * playerWinCount, tieCount, and remainingCards properties updated based on the roundResult and
 * remainingCards properties of the action payload
 * @param [state] - the current state of the store
 * @param action - {
 * @returns The state is being returned.
 */
const statistics = (state = { dealerWinCount: 0, playerWinCount: 0, tieCount: 0, remainingCards: 0 }, action) => {
    switch (action.type) {
        case ActionType.updateStatistics:
            var { roundResult, remainingCards } = action.payload;
            return {
                dealerWinCount: roundResult === 'Dealer Wins' ? ++state.dealerWinCount : state.dealerWinCount,
                playerWinCount: roundResult === 'Player Wins' ? ++state.playerWinCount : state.playerWinCount,
                tieCount: roundResult === 'Tie' ? ++state.tieCount : state.tieCount,
                remainingCards: remainingCards
            };
        case ActionType.resetStatistics:
            return {
                dealerWinCount: 0,
                playerWinCount: 0,
                tieCount: 0,
                remainingCards: action.payload.remainingCards
            }
        default:
            return state
    }
}

/* Combining the reducers into one reducer. */
const Reducers = combineReducers({
    cards,
    dealerCards,
    playerCards,
    roundResult,
    statistics
});

export {cards,
dealerCards,
playerCards,
roundResult,
statistics,
Reducers};