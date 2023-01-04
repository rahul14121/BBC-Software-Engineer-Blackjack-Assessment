import ControlPanel from "../Presentation/ControlPanel.js"
import {drawDealerCards, loadCards, resetCards, drawPlayerCards, dealerDrawsSeventeen, resetRoundSummary } from '../../../Actions/ActionCreator.js'
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
        startGame: (cards) => {
            
            dispatch(resetCards());
            
            //For when the dealer draws a card
            dispatch(drawDealerCards(cards));

            //For when the player draws multiple cards
            dispatch(drawPlayerCards(cards))
            dispatch(drawPlayerCards(cards))

            dispatch(resetRoundSummary())
        },
        playerHit: (cards) => dispatch(drawPlayerCards(cards)),
        
        playerStand: (cards, dealerCards) => {dispatch(dealerDrawsSeventeen(cards, dealerCards));}
            
        }
    }

const mapStateToProps = (state, ownProps) => ({...ownProps,
    cards: state.cards,
    dealerCards: state.dealerCards,
    playerCards: state.playerCards,
    roundEnd: state.roundResult.roundEnd})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const startGameButton = () => {
        dispatchProps.startGame(stateProps.cards);
    }
    
    const playerHitButton = () => {
        dispatchProps.playerHit(stateProps.cards);
    }
    
    const loadCardsButton = () => {
        dispatchProps.loadCards();
    }
    
    const playerStandButton = () => {
        dispatchProps.playerStand(stateProps.cards, stateProps.dealerCards);
    }
    
    return ({
        ...stateProps,
        ...dispatchProps,
        startGameButton,
        playerHitButton,
        loadCardsButton,
        playerStandButton
        })
    }




const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ControlPanel)

export default ControlPanelContainer;
