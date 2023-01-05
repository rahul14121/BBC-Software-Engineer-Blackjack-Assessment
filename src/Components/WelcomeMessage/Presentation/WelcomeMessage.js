import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Fab, Link } from "@mui/material";
import "./WelcomeMessage.css";
import React, {Component} from 'react';

const linkToGuide = 'https://playingcarddecks.com/blogs/how-to-play/blackjack-game-rules'
/* This class is a React component that renders a dialog box that contains a welcome message and
instructions on how to play the game. */
class WelcomeMessage extends Component {
    render() {
        const {open, onStartClick} = this.props;

        return (
            <div>
                <Dialog
                    onClose={onStartClick}
                    
                    open={open}
                    className={'message'}>
                    <DialogTitle className={'title'}>
                        Welcome to Blackjack!
                    </DialogTitle>
                    <DialogContent className={'content'}>
                        <Typography variant="subheading" className={"sub-header"}gutterBottom>
                            How to Play:
                        </Typography>
                        <Typography gutterBottom>
                            Step 1: Click "Next Game" to start a new game
                        </Typography>
                        <Typography gutterBottom>
                            Step 2: Click "Hit" if you want another card
                        </Typography>
                        <Typography gutterBottom>
                            Step 3: Click "Stand" if you don't want another card
                        </Typography>
                        <Typography gutterBottom>
                            Step 4: Click "Reload" if you want to start a new deck (this will reset the stats)
                        </Typography>
                        <Typography variant="subheading" className={'how-to-play-section'} gutterBottom>
                            If you require further instructions, please click <Link variant="subheading" inline="true" href={linkToGuide}>here</Link>
                        </Typography>
                    </DialogContent>
                    <DialogActions className={'start-button'}>
                        <Fab variant="extended" onClick={onStartClick} color="primary">
                            Start Playing Blackjack!
                        </Fab>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default WelcomeMessage;