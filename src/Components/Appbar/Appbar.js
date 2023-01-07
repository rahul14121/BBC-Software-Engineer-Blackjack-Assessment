import { AppBar, Dialog } from "@mui/material";
import "./Appbar.css";
import React, {Component} from 'react';
import {Typography} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Button} from "@mui/material";
import { Leaderboard } from "@mui/icons-material";
import WelcomeMessage from "../WelcomeMessage/Presentation/WelcomeMessage";
import LeaderboardWindow from "./Leaderboard";

/* This class is a React component that renders an AppBar component from the Material-UI library. */
class Appbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        };
    }

    isClosed = () => {
        this.setState(prevState => ({
          ...prevState,
          isOpen: !prevState.isOpen
        }));
      }
    

    

    render() {

        


        return (
            <AppBar className="app-header" position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Blackjack Game
                    </Typography>
                    <Button onClick={ () => this.isClosed() } variant="contained" color="primary">
                        View Leaderboard
                    <Leaderboard></Leaderboard>
                    </Button>
                    <LeaderboardWindow isOpen={this.state.isOpen} isClosed={this.isClosed}/>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar;