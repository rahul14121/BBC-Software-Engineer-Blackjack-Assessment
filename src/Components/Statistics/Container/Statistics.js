import Statistics from "../Presentation/Statistics.js"
import {connect} from "react-redux"
import {GetCardTotal} from "../../../Utils/Utils.js"


/**
 * MapStateToProps is a function that takes in the state and ownProps as arguments and returns an
 * object that contains the state and ownProps.
 * @param state - the state of the store
 * @param ownProps - The props passed to the component.
 */
const mapStateToProps = (state, ownProps) => ({
    
    ...ownProps,
    dealerWinCount: state.statistics.dealerWinCount,
    playerWinCount: state.statistics.playerWinCount,
    tieCount: state.statistics.tieCount,
    remainingCards: state.statistics.remainingCards
       
    
})




/**
 * This function takes in a dispatch function and returns an object that contains functions that will
 * dispatch actions to the store.
 * @param dispatch - A function of type (action: Action) => any. You don't need to worry about this,
 * just pass it into connect()
 * @param ownProps - The props passed to the component.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatisticsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics)

export default StatisticsContainer;
