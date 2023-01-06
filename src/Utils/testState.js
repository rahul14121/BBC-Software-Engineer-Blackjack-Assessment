import { createSlice } from "@reduxjs/toolkit";

import {cards, dealerCards, playerCards, roundResult, statistics } from "../Reducers/index.js";
import { GetCardTotal } from "./Utils.js";
import { calculateRoundResult } from "../Actions/ActionCreator.js";

const initialState = []

const preloadedState = [{
    "cards": [
        {
            "number": "9",
            "suit": "D"
        },
        {
            "number": "3",
            "suit": "D"
        },
        {
            "number": "A",
            "suit": "H"
        },
        {
            "number": "6",
            "suit": "S"
        },

        {
            "number": "2",
            "suit": "H"
        }
    ],
    "dealerCards": [
        {
            "number": "7",
            "suit": "D"
        }
    ],
    "playerCards": [
        {
            "number": "6",
            "suit": "H"
        },
        {
            "number": "9",
            "suit": "C"
        }
    ],
    "roundResult": {
        "roundEnd": false,
        "result": ""
    },
    "statistics": {
        "dealerWinCount": 0,
        "playerWinCount": 0,
        "tieCount": 0,
        "remainingCards": 0
    }
}]

const preloadedState2 = [{
    "cards": [
        {
            "number": "9",
            "suit": "D"
        },
        {
            "number": "3",
            "suit": "D"
        },
        {
            "number": "A",
            "suit": "H"
        },
        {
            "number": "6",
            "suit": "S"
        },

        {
            "number": "2",
            "suit": "H"
        }
    ],
    "dealerCards": [
        {
            "number": "7",
            "suit": "D"
        }
    ],
    "playerCards": [
        {
            "number": "K",
            "suit": "H"
        },
        {
            "number": "A",
            "suit": "C"
        }
    ],
    "roundResult": {
        "roundEnd": true,
        "dealerScore": 7,
        "playerScore": 21,
        "result": "Player Wins"
    },
    "statistics": {
        "dealerWinCount": 0,
        "playerWinCount": 0,
        "tieCount": 0,
        "remainingCards": 0
    }
}]

const testState = createSlice({
    name: 'App',
    preloadedState,
    reducers: {
        cardsState(state, action){
            state.push({
                cards: preloadedState.cards
            })
        },
        dealerCardsState(state, action){
            console.log(state)
            state.push({
                dealerCards: [
                    {
                        "number": "7",
                        "suit": "D"
                    }
                ]
            })
        },
        playerCardsState(state, action){
            state.push({
                playerCards: [
                    {
                        "number": "6",
                        "suit": "H"
                    },
                    {
                        "number": "9",
                        "suit": "C"
                    }
                ].length,
            })
        },
        roundResultState(state, action){
            state.push({
                roundResult: preloadedState.roundResult
            })
        },
        statisticsState(state, action){
            state.push({
                statistics: preloadedState.statistics
            })
        },

        score21OrBelowValid(state, action){
            state.push({
                playerCards: [
                    {
                        "number": "4",
                        "suit": "C"
                    },
                    {
                        "number": "A",
                        "suit": "D"
                    },
                    {
                        "number": "6",
                        "suit": "D"
                    },
                    {
                        "number": "J",
                        "suit": "S"
                    }
                ],
                "roundResult": {
                    "roundEnd": false,
                    "result": ""
                },
            })
        },

        score22Bust(state, action){
            state.push({
                "dealerCards": [
                    {
                        "number": "7",
                        "suit": "D"
                    }
                ],
                "playerCards": [
                    {
                        "number": "K",
                        "suit": "H"
                    },
                    {
                        "number": "Q",
                        "suit": "C"
                    },
                    {
                        "number": "5",
                        "suit": "C"
                    }
                ],
                "roundResult": calculateRoundResult(7, 25),
                
            })
        },

        kingAceScoreState(state, action){
            state.push({
                playerCards: [
                    {
                        "number": "K",
                        "suit": "H"
                    },
                    {
                        "number": "A",
                        "suit": "C"
                    }
                ],
                roundResult: {
                    "roundEnd": true,
                    "dealerScore": 7,
                    "playerScore": GetCardTotal([
                        {
                            "number": "K",
                            "suit": "H"
                        },
                        {
                            "number": "A",
                            "suit": "C"
                        }
                    ]).sum,
                    "result": "Player Wins"
                }

            })
        },

        kingQueenAceScoreState(state, action){
            state.push({
                playerCards: [
                    {
                        "number": "K",
                        "suit": "H"
                    },
                    {
                        "number": "Q",
                        "suit": "D"
                    },
                    {
                        "number": "A",
                        "suit": "C"
                    }
                ],
                roundResult: {
                    "roundEnd": true,
                    "dealerScore": 7,
                    "playerScore": GetCardTotal([
                        {
                            "number": "K",
                            "suit": "H"
                        },
                        {
                            "number": "Q",
                            "suit": "D"
                        },
                        {
                            "number": "A",
                            "suit": "C"
                        }
                    ]).sum,
                    "result": "Player Wins"
                }

            })
        },

        nineAceAceScoreState(state, action){
            state.push({
                playerCards: [
                    {
                        "number": "9",
                        "suit": "H"
                    },
                    {
                        "number": "A",
                        "suit": "D"
                    },
                    {
                        "number": "A",
                        "suit": "C"
                    }
                ],
                roundResult: {
                    "roundEnd": true,
                    "dealerScore": 7,
                    "playerScore": GetCardTotal([
                        {
                            "number": "9",
                            "suit": "H"
                        },
                        {
                            "number": "A",
                            "suit": "D"
                        },
                        {
                            "number": "A",
                            "suit": "C"
                        }
                    ]).sum,
                    "result": "Player Wins"
                }

            })
        }

        
    }
})

export const {cardsState, dealerCardsState, playerCardsState, roundResultState, statisticsState, kingAceScoreState, kingQueenAceScoreState, nineAceAceScoreState, score21OrBelowValid, score22Bust} = testState.actions

export default testState.reducer

