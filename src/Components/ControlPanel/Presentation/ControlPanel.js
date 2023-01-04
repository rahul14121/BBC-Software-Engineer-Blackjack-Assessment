import "./ControlPanel.css";
import { Restore, Check, PlayArrow } from "@mui/icons-material";
import { Grid } from "@mui/material";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import React, {Component} from 'react';



class ControlPanel extends Component {
   
    componentDidMount() {
        this.props.loadCards();
    }

    render() {
        const {loadCards, startGame, playerHit} = this.props;
        return (
            <Grid item xs={12} className={'dock-bottom'}>
                <BottomNavigation showLabels>
                    
                    <BottomNavigationAction onClick={startGame} label="Start" icon={<PlayArrow style={{ fontSize: 44 }} />} />
                    <BottomNavigationAction onClick={playerHit} label="Hit" icon={<Check style={{ fontSize: 44 }} />} />
                    <BottomNavigationAction onClick={loadCards} label="Reload" icon={<Restore style={{ fontSize: 44 }} />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;