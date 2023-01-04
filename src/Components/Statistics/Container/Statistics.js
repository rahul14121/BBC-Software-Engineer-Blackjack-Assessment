import Statistics from "../Presentation/Statistics.js"
import {connect} from "react-redux"
import {GetCardTotal} from "../../../Utils/Utils.js"

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



const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatisticsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics)

export default StatisticsContainer;
