import "./ControlPanel.css";
import { Restore, Check, PlayArrow, Stop } from "@mui/icons-material";
import { Grid } from "@mui/material";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import React, {Component} from 'react';



/* The class is a component that renders a BottomNavigation component from Material-UI. 

The BottomNavigation component has four BottomNavigationAction components as children. 

The BottomNavigationAction components are rendered as buttons. 

The BottomNavigationAction components have onClick props that are bound to functions in the parent
component. 

The BottomNavigationAction components have className props that are bound to a variable in the
parent component. 

The className props are used to disable the buttons when the game is in progress. 

The BottomNavigationAction components have label props that are used to display text on the buttons.


The BottomNavigationAction components have icon props that are used to display icons on the buttons.


The BottomNavigationAction components have classes props that are used to style the text */
class ControlPanel extends Component {
   
    componentDidMount() {
        this.props.loadCards();
    }

    render() {
        const {loadCardsButton, startGameButton, playerHitButton, playerStandButton, roundEnd} = this.props;
        return (
            <Grid item xs={12} className={'dock-bottom' + ' ' + 'control-panel'}>
                <BottomNavigation showLabels>

                    <BottomNavigationAction className={roundEnd ? '' : 'button-disabled'}onClick={startGameButton}label="Start" classes={{label: 'label-font'}} icon={<PlayArrow className={'button-play'} />} />
                    <BottomNavigationAction className={roundEnd ? 'button-disabled' : ''}onClick={playerStandButton}label="Stand" classes={{label: 'label-font'}} icon={<Stop className={'button-stand'} />} />
                    <BottomNavigationAction className={roundEnd ? 'button-disabled' : ''}onClick={playerHitButton}label="Hit" classes={{label: 'label-font'}} icon={<Check className={'button-hit'} />} />
                    <BottomNavigationAction onClick={loadCardsButton} label="Reload" classes={{label: 'label-font'}} icon={<Restore className={'button-reload'} />} />


                    
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;