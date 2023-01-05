import { Fab, Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import "./GameEndMessage.css";
import React, {Component} from 'react';
import StatisticsContainer from "../../Statistics/Container/Statistics";


/* React component that renders a Dialog component from MaterialUI. 

The Dialog component has a title, content, and actions. 

The content is a StatisticsContainer component. 

The actions is a button that calls the onReloadCardsButton function. 

The onReloadCardsButton function is passed in as a prop. 

The onReloadCardsButton function is defined in the parent component. 

The onReloadCardsButton function is called when the button is clicked. 

The onReloadCardsButton function calls the reloadCards function. 

The reloadCards function reloads the cards. */
class GameEndMessage extends Component {

    render() {
        const {open, onReloadCardsButton} = this.props;

        return (
            <div>
                <Dialog
                    onClose={onReloadCardsButton}
                    open={open}
                    className={'dialog'}
                    >
                    <DialogTitle className={'title'}>
                        No more cards!
                    </DialogTitle>
                    <DialogContent className={'content'}>
                        <StatisticsContainer endGameSummary={true}></StatisticsContainer>
                    </DialogContent>
                    <DialogActions className={'start-button'}>
                    <Fab variant="extended" onClick={onReloadCardsButton} color="primary">
                    Start a new game
                    </Fab>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default GameEndMessage;