import "./ControlPanel.css";
import { Restore, LocationOn, PlayArrow } from "@mui/icons-material";
import { Grid } from "@mui/material";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import React, {Component} from 'react';



class ControlPanel extends Component {
   

    render() {
        const {loadCards, startGame} = this.props;
        return (
            <Grid item xs={12} className={'dock-bottom'}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction onClick={loadCards} label="Reload" icon={<Restore style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction onClick={startGame} label="Start" icon={<PlayArrow style={{ fontSize: 30 }} />} />
                    
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;