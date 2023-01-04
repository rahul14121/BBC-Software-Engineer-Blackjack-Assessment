import Board from '../Presentation/Board.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;