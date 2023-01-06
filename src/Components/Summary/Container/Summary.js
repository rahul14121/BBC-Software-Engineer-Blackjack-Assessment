import Summary from "../Presentation/Summary.js"
import {connect} from "react-redux"
import {GetCardTotal} from "../../../Utils/Utils.js"

/**
 * MapStateToProps is a function that takes in the state and ownProps and returns an object that will
 * be merged with the component's props.
 * @param state - the state of the store
 * @param ownProps - The props passed to the component
 * @returns The return statement is returning an object.
 */
const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardTotal(state.playerCards);
    const dealerSum = GetCardTotal(state.dealerCards).sum;
    const roundResult = state.roundResult;
    const playerSumResult = playerSum.containAce ? playerSum.sum - 10 + '/' + playerSum.sum : playerSum.sum
    console.log(state);
    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        roundResult: roundResult,
        dealerTotal: dealerSum,
        playerTotal: playerSumResult
       
    }
}



/**
 * This function takes a dispatch function as an argument and returns an object that maps the dispatch
 * function to the props of the component.
 * @param dispatch - A function of dispatch method from Redux store. You need this to dispatch actions
 * to the Redux store.
 * @param ownProps - The props passed to the component.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
})

const SummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary)

export default SummaryContainer;
