import { combineReducers } from "redux";
import ActionType from "../Actions/ActionTypes.js";

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

const Reducers = combineReducers({
    cards,
    dealerCards,
    playerCards,
    roundResult
});

export default Reducers;