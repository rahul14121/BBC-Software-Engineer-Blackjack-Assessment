import Board from '../Presentation/Board.js';
import {connect} from 'react-redux';
import { calculateRoundResult } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCalculationRoundResult: (dealerCards, playerCards) => dispatch(calculateRoundResult(dealerCards, playerCards))
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;