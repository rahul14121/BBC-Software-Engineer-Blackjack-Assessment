import "./Board.css";
import React, {Component} from 'react';
import Card from "../../Card/Presentation/Card.js";



class Board extends Component {

  CreateDealerCards() {
    const { dealerCards } = this.props;
    
    return dealerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
}



    render() {
      return (
        <div className='board-wrapper'>
          <div className='dealer-panel'>
                    {this.CreateDealerCards()}

                </div>
                <div className='player-panel'>
                    {this.CreateDealerCards()}
                </div>
        </div>
      );
    }
  }
  
  export default Board;