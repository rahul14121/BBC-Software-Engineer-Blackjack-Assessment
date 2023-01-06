import "./Card.css";

import {Card} from "@mui/material";

import React, {Component} from 'react';

/* The CardBody class is a React component that renders a Card component from the Material-UI library.
The CardBody component takes a number prop and renders it inside a span element. */
class CardBody extends Component {

    getCard() {
        const {card} = this.props
        return ('card' + ' ' + card.suit + card.number);
    }
    render(){
        const { number } = this.props;
        return (
            <Card className='card-body'>
                <div className={this.getCard()}></div>
            </Card>
        );
    }
}

export default CardBody;