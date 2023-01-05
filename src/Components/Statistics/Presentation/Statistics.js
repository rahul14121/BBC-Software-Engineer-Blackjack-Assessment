import "./Statistics.css";
import React, { Component } from 'react';
import { Paper } from "@mui/material";

/* The class is a component that renders a paper component with a div inside of it. The div contains
three p tags. The first two p tags display the dealer and player scores. The third p tag displays
the winner of the round. The winner is displayed if the round has ended. */
class Statistics extends Component {

    render() {
        const { display, playerTotal, dealerTotal, roundResult } = this.props;
        const { roundEnd, result} = roundResult;

        return (
            <div>
                <Paper style={{ display: display }} className={'statistics-body'} elevation={1}>
                    <div className={'statistics-section'}>
                        <p>Dealer score: {dealerTotal}</p>
                        <p>Player score: {playerTotal}</p>
                        <p>Winner: <b>{roundEnd ? result + '': ''}</b></p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Statistics;