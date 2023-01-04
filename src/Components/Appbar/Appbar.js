import { AppBar } from "@mui/material";
import "./Appbar.css";
import React, {Component} from 'react';
import {Typography} from "@mui/material";
import {Toolbar} from "@mui/material";

class Appbar extends Component {

    render() {
        return (
            <AppBar className="AppHeadingBar" position="static">
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