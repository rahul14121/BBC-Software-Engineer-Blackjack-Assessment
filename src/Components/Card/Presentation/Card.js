import "./Card.css";

import {Card} from "@mui/material";

import React, {Component} from 'react';

class CardBody extends Component {
    render(){
        const { number } = this.props;
        return (
            <Card className='card-body'>
                <div className='card-number'>
                    <span className='card-content'>
                        {number}
                    </span>
                </div>
            </Card>
        );
    }
}

export default CardBody;