import Statistics from "../Presentation/Statistics.js"
import {connect} from "react-redux"
import {GetCardTotal} from "../../../Utils/Utils.js"

const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardTotal(state.playerCards);
    const dealerSum = GetCardTotal(state.dealerCards);

    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        roundWinner: 'Not Decided Yet',
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
