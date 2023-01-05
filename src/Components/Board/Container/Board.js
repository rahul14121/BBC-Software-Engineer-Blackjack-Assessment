import Board from '../Presentation/Board.js';
import {connect} from 'react-redux';
import { calculateRoundResult } from '../../../Actions/ActionCreator.js';

/**
 * MapStateToProps is a function that takes in the state and returns an object that will be merged into
 * the component's props.
 * @param state - the state of the store
 * @param ownProps - The props passed to the component
 * @returns The state of the store.
 */
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards

    }
}

/**
 * This function takes a dispatch function and returns an object with a function that takes two
 * arguments and dispatches an action with those arguments.
 * @param dispatch - A dispatch function. You can call it directly to dispatch actions
 * to the store.
 * @param ownProps - The props passed to the component.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    onCalculationRoundResult: (dealerCards, playerCards) => dispatch(calculateRoundResult(dealerCards, playerCards))
})

/* Creating a new component called BoardBody that is connected to the store. */
const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;