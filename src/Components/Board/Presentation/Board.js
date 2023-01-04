import "./Board.css";
import React, {Component} from 'react';
import Card from "../../Card/Presentation/Card.js";
import { GetCardTotal } from "../../../Utils/Utils";



class Board extends Component {

  componentDidUpdate() {
    const { dealerCards, playerCards, onCalculationRoundResult } = this.props;
    const playerSum = GetCardTotal(playerCards);
    const dealerSum = GetCardTotal(dealerCards);

    if (dealerCards.length !== 1 || playerSum > 21 || (playerSum === 21 && playerCards.length === 2)) {
        onCalculationRoundResult(dealerSum, playerSum);
    }
}

  CreateDealerCards() {
    const { dealerCards } = this.props;
    
    return dealerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
  }

  CreatePlayerCards() {
    const { playerCards } = this.props;
    return playerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
    }



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