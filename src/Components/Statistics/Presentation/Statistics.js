import "./Statistics.css";
import React, { Component } from 'react';
import { Paper } from "@mui/material";

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