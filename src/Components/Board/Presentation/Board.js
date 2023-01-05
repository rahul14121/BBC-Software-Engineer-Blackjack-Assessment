import "./Board.css";
import React, {Component} from 'react';
import Card from "../../Card/Presentation/Card.js";
import { GetCardTotal } from "../../../Utils/Utils";



class Board extends Component {

 /**
  * If the dealer has more than one card, or the player has more than 21 points, or the player has 21
  * points and two cards, then calculate the round result.
  */
  componentDidUpdate() {
    const { dealerCards, playerCards, onCalculationRoundResult } = this.props;
    const playerSum = GetCardTotal(playerCards);
    const dealerSum = GetCardTotal(dealerCards);

    if (dealerCards.length !== 1 || playerSum > 21 || (playerSum === 21 && playerCards.length === 2)) {
        onCalculationRoundResult(dealerSum, playerSum);
    }
}

  /**
   * CreateDealerCards() returns a list of Card components, where each Card component is given a key
   * and a number prop.
   * @returns An array of Card components.
   */
  CreateDealerCards() {
    const { dealerCards } = this.props;
    
    return dealerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
  }

  /**
   * CreatePlayerCards() is a function that returns a map of the playerCards array, which is a prop,
   * and returns a Card component for each item in the array, with a key of the card number plus a
   * random number, and a prop of the card number.
   * @returns An array of Card components.
   */
  CreatePlayerCards() {
    const { playerCards } = this.props;
    return playerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
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