import Board from '../Presentation/Board.js';
import {connect} from 'react-redux';
import { calculateRoundResult, updateStatistics, drawDealerCards, drawPlayerCards, loadCards, resetStatistics, resetRoundEnd } from '../../../Actions/ActionCreator.js';


/**
 * MapStateToProps is a function that takes in the state and ownProps as arguments and returns an
 * object that contains the state and ownProps.
 * @param state - the state of the store
 * @param ownProps - The props that were passed to the component
 * @returns The state of the store.
 */
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards,
        cards: state.cards,
        gameEnd: state.cards.length === 0 ? true : false

    }
}



/**
 * MapDispatchToProps is a function that returns an object with functions that dispatch actions to the
 * store.
 * @param dispatch - A function of dispatch method from the Redux store. You call it with an action
 * object. This is the only way to trigger a state change.
 * @param ownProps - The props passed to the component
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    onCalculationRoundResult: (dealerCards, playerCards) => dispatch(calculateRoundResult(dealerCards, playerCards)),
    onUpdateStatistics: (dealerCards, playerCards, cards) => dispatch(updateStatistics(dealerCards, playerCards, cards)),
    startGame: (cards) => {
        dispatch(drawDealerCards(cards));

        dispatch(drawPlayerCards(cards));
        dispatch(drawPlayerCards(cards));
    },

    reloadCards: (cards) => {
        dispatch(loadCards());
        dispatch(resetStatistics(cards));
        dispatch(resetRoundEnd());
    }
})

/* Creating a new component called BoardBody that is connected to the store. */
const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;