import "./Board.css";
import React, {Component} from 'react';
import Card from "../../Card/Presentation/Card.js";
import { GetCardTotal } from "../../../Utils/Utils";
import GameEndMessage from "../../GameEndMessage/Presentation/GameEndMessage";



class Board extends Component {

 
/**
 * "If the dealer has no cards, start the game. Based on the conditions of both hands, calculate the round result and update the statistics."
 * 
 * @returns The return value of the function is the return value of the last statement in the function.
 */
  componentDidUpdate() {
    const { dealerCards, playerCards, onCalculationRoundResult, cards, onUpdateStatistics, startGame } = this.props;
    
    if(dealerCards.length===0 && playerCards.length === 0){
      return startGame(cards);
    }
    const playerSum = GetCardTotal(playerCards).sum;
    const dealerSum = GetCardTotal(dealerCards).sum;

    if (dealerCards.length !== 1 || playerSum > 21 || (playerSum === 21 && playerCards.length === 2)) {
        onCalculationRoundResult(dealerSum, playerSum);
        onUpdateStatistics(dealerSum, playerSum, cards)
    }
}

  /**
   * CreateDealerCards() returns a list of Card components, where each Card component is given a key
   * and a number prop.
   * @returns An array of Card components.
   */
  CreateDealerCards() {
    const { dealerCards } = this.props;
    
    return dealerCards.map((card) => <Card key={card.number + Math.random()} card={card}></Card>)
  }

  /**
   * CreatePlayerCards() is a function that returns a map of the playerCards array, which is a prop,
   * and returns a Card component for each item in the array, with a key of the card number plus a
   * random number, and a prop of the card number.
   * @returns An array of Card components.
   */
  CreatePlayerCards() {
    const { playerCards } = this.props;
    return playerCards.map((card) => <Card key={card.number + Math.random()} card={card}></Card>)
    }

 /**
  * ReloadGame() is a function that reloads the game by calling the reloadCards() function from the
  * props.
  */
  ReloadGame() {
    const { reloadCards, cards} = this.props;
    reloadCards(cards);
  }



    /**
     * "CreateDealerCards()" and "CreatePlayerCards()" are two functions that return an array of divs. 
     * 
     * 
     * The divs are created by mapping over the "dealerCards" and "playerCards" arrays. 
     * 
     * The divs are created by using the "Card" component. 
     * 
     * The "Card" component takes in a "card" prop, which is an object that contains the card's suit
     * and value. 
     * 
     * The "Card" component returns a div with the card's suit and value. 
     * 
     * The "Card" component is imported from the "Card" file. 
     * 
     * The "Card" file is located in the "components" folder. 
     * 
     * The "Card" file is a React component and 
     * the dealer and player cards are being returned.
     * 
     */
    render() {
      const {gameEnd} = this.props;
      if (gameEnd) {
        return <GameEndMessage open={true} onReloadCardsButton={this.ReloadGame.bind(this)}></GameEndMessage>
      }
      return (
        <div className='board-wrapper'>
          <div className='dealer-panel'>
                    {this.CreateDealerCards()}

                </div>
                <div className='player-panel'>
                    {this.CreatePlayerCards()}
                </div>
        </div>
      );
    }
  }
  
  export default Board;