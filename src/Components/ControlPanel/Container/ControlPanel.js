import ControlPanel from "../Presentation/ControlPanel.js"
import {drawDealerCards, loadCards, resetCards } from '../../../Actions/ActionCreator.js'
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
        startGame: () => {
            
            dispatch(resetCards());
            
            dispatch(drawDealerCards());
            
        }
    }
}

const mapStateToProps = (state, ownProps) => {}


const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer;
