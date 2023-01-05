import "./Statistics.css";
import React, { Component } from 'react';
import { Paper } from "@mui/material";
import {Typography} from "@mui/material";


/* This class is a component that renders the statistics of the game, both during and after the game */
class Statistics extends Component {

    render() {
        const {dealerWinCount, playerWinCount, tieCount, remainingCards, endGameSummary} = this.props;

        const panelContent = (
            <div>
                <Typography className={'statistics-title'} variant="title" color="inherit">
                ----- Blackjack Game Stats -----
                </Typography>
                <Typography className={'statistics-title'} variant="caption" color="inherit">
                    (Data will be updated at the end of each round.)
                </Typography>
            </div>
        );
        const endGamePanelContent = (
            <div>
                <Typography className={'statistics-title'} variant="title" color="inherit">
                    Final Statistics:
                </Typography>
            </div>
        );

        return (
            <div>
                <Paper className={endGameSummary ? 'end-game-statistics-body' : 'statistics-body'} elevation={1}>
                    <div>
                        {endGameSummary ? endGamePanelContent : panelContent}
                        <p>Dealer win count: {dealerWinCount}</p>
                        <p>Player win count: {playerWinCount}</p>
                        <p>Tie count: {tieCount}</p>
                        {endGameSummary ? '' : (<p>Remaining cards: {remainingCards}</p>)}
                    </div>
                    

                </Paper>
            </div>
        );
    }
}

export default Statistics;