import ControlPanel from "../Presentation/ControlPanel.js"
import {drawDealerCards, loadCards, resetCards, drawPlayerCards } from '../../../Actions/ActionCreator.js'
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
        startGame: () => {
            
            dispatch(resetCards());
            
            //For when the dealer draws a card
            dispatch(drawDealerCards());

            //For when the player draws multiple cards
            dispatch(drawPlayerCards())
            dispatch(drawPlayerCards())
        },
        playerHit: () => dispatch(drawPlayerCards())
            
        }
    }


const mapStateToProps = (state, ownProps) => {}


const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer;
