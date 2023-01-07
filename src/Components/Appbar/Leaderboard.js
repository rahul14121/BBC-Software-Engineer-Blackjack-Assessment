import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Fab, Link, ListItem, List, Divider, ListItemText} from "@mui/material";
import React, {Component, Frag} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import getDataLeaderboard from "../GameEndMessage/getDataLeaderboard";

const linkToGuide = 'https://playingcarddecks.com/blogs/how-to-play/blackjack-game-rules'

const gridColumns = [
    {field: "username", headerName: "Username", width: 200},
    {field: "score", headerName: "Score", width: 200}
]

var gridRows = [
    {
      id: 1,
      username: "Test",
      score: "20"

    }
]



/* This class is a React component that renders a leaderboard of player scores */
class LeaderboardWindow extends Component {
    render() {
        
        let scoreData = getDataLeaderboard()
        const scoreDataCapture = () => { scoreData.then(result => {
            gridRows = result
            console.log(gridRows)
        });    
    }

    scoreDataCapture()
        
    

        return (
            <div>
                <Dialog
                    open={this.props.isOpen}
                    onClose={this.props.isClosed}
                    maxWidth="md"
                    fullWidth
                    >
                    
                    <DialogTitle className={'title'}>
                       Blackjack Leaderboard
                    </DialogTitle>
                    <DialogContent className={'content'}>
                    <DataGrid
                        rows={gridRows}
                        columns={gridColumns}
                        pageSize={10}
                        autoHeight
                        
                    />
                    </DialogContent>
                    
                </Dialog>
            </div>
        );
    }
}

export default LeaderboardWindow;