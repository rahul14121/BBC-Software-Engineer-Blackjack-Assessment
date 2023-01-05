import ControlPanel from "../Presentation/ControlPanel.js"
import {drawDealerCards, loadCards, resetCards, drawPlayerCards, dealerDrawsSeventeen, resetRoundSummary } from '../../../Actions/ActionCreator.js'
import {connect} from 'react-redux';


/**
 * When the player hits, the player draws a card, and when the player stands, the dealer draws until he
 * has 17 or more.
 * @param dispatch - A function of the Redux store. You call store.dispatch to dispatch an action. This
 * is the only way to trigger a state change.
 * @param ownProps - The props passed to the component
 * @returns An object with functions that dispatch actions to the store.
 */
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

/**
 * MapStateToProps is a function that takes in the state and ownProps and returns an object with the
 * state and ownProps.
 * @param state - the state of the store
 * @param ownProps - the props passed to the component
 */
const mapStateToProps = (state, ownProps) => ({...ownProps,
    cards: state.cards,
    dealerCards: state.dealerCards,
    playerCards: state.playerCards,
    roundEnd: state.roundResult.roundEnd})

/**
 * MergeProps takes the stateProps, dispatchProps, and ownProps and returns an object with the
 * stateProps, dispatchProps, and ownProps, plus the startGameButton, playerHitButton, loadCardsButton,
 * and playerStandButton functions.
 * @param stateProps - The state of the store
 * @param dispatchProps - The dispatchProps object is the result of calling dispatch() on the
 * store.dispatch() function.
 * @param ownProps - The props passed to the component
 * @returns An object with the stateProps, dispatchProps, startGameButton, playerHitButton,
 * loadCardsButton, and playerStandButton.
 */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    /**
     * When the start game button is clicked, dispatch the startGame action with the cards as the
     * payload.
     */
    const startGameButton = () => {
        dispatchProps.startGame(stateProps.cards);
    }
    
    /**
     * When the player hits, the playerHit function is called and the cards are passed in as an
     * argument.
     */
    const playerHitButton = () => {
        dispatchProps.playerHit(stateProps.cards);
    }
    
    /**
     * When the load cards button is clicked, dispatch the loadCards action.
     */
    const loadCardsButton = () => {
        dispatchProps.loadCards();
    }
    
    /**
     * When the playerStandButton is clicked, the playerStand function is called, which takes the cards
     * and dealerCards from the state and passes them to the playerStand function in the actions file.
     */
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




/* Connecting the ControlPanel component to the Redux store. */
const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ControlPanel)

export default ControlPanelContainer;
