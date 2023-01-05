import Statistics from "../Presentation/Statistics.js"
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
    const dealerSum = GetCardTotal(state.dealerCards);
    const roundResult = state.roundResult;

    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        roundResult: roundResult,
        dealerTotal: dealerSum,
        playerTotal: playerSum
       
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

const StatisticsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics)

export default StatisticsContainer;
