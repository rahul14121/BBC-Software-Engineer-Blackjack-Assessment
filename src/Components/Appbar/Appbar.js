import { AppBar } from "@mui/material";
import "./Appbar.css";
import React, {Component} from 'react';
import {Typography} from "@mui/material";
import {Toolbar} from "@mui/material";

/* This class is a React component that renders an AppBar component from the Material-UI library. */
class Appbar extends Component {

    render() {
        return (
            <AppBar className="app-header" position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Blackjack Game
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar;