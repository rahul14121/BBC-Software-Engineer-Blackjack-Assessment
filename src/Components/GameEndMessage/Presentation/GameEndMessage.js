import { Fab, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from "@mui/material";
import "./GameEndMessage.css";
import React, {Component, createRef} from 'react';
import StatisticsContainer from "../../Statistics/Container/Statistics";
import uploadDataLeaderboard from "../uploadDataLeaderboard.js";

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

    constructor(props) {
        super(props)
        this.usernameInput = createRef();
        this.state = {
            username: ""
        };

    }

    showRefContent = () => {
        this.setState({
            username: this.usernameInput.current.value
        });
        
      };
    
      handleChange = (e) =>
        this.setState({
            username: e.target.value
        });
    

    render() {
        const {open, onReloadCardsButton} = this.props;
        const onClickFunctions = (state) => {
            this.showRefContent();
            setTimeout(() => {
                console.log(this.state.username)
                console.log(window.playerWinCount)
                uploadDataLeaderboard(this.state.username, window.playerWinCount)
            }, 0);
        };
            
        

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
                    <TextField className={'username-inputbox'}
                        required
                        inputRef={this.usernameInput}
                        id="usernameInput"
                        label="Required"
                        defaultValue="Anonymous"
                        
                        margin="normal"
        />

                    <DialogActions className={'submit-button'}>
                    <Fab variant="extended" color="primary" onClick={onClickFunctions}>
                    Submit your score
                    </Fab>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default GameEndMessage;