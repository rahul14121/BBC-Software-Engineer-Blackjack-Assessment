/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent} from '@testing-library/react';
import React from 'react'
import App from './App';
import { renderWithProviders } from './Utils/testUtils';
import reducer, {cardsState, dealerCardsState, testState, kingAceScoreState, kingQueenAceScoreState, nineAceAceScoreState, playerCardsState, score21OrBelowValid, score22Bust} from './Utils/testState.js'
import '@testing-library/jest-dom'

test('Welcome message appears and game is rendered after clicking button', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()
});

test('Verify data is being set for testing correctly', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, dealerCardsState())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {"dealerCards": [
      {
          "number": "7",
          "suit": "D"
      }
  ],
  
}


  ])
  
})


test('When the game begins, the player has two cards', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, playerCardsState())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {"playerCards": [
      {
                        "number": "6",
                        "suit": "H"
                    },
                    {
                        "number": "9",
                        "suit": "C"
                    }
                ].length,
  
}


  ])
  
})


test('When my score is 21 or less, the hand is still valid', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, score21OrBelowValid())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {"playerCards": [
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
            }


  ])
  
})

test('When my score is 22 or above, the hand is not valid', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, score22Bust())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {"dealerCards": [
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
                "roundResult": {
                  "payload": {
                  "dealerScore": 7,
                  "playerScore": 25,
                  "result": "Dealer Wins",
                  "roundEnd": true,
                },
                "type": "CALCULATE_ROUND_RESULT",
            },
          },



  ])
  
})


test('When I have a king and an ace, my score should be 21', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, kingAceScoreState())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {
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
                    "playerScore": 21,
                    "result": "Player Wins"
                }

            }


  ])
  
})

test('When I have a king, queen and an ace, my score should be 21', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, kingQueenAceScoreState())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {
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
                    "playerScore": 21,
                    "result": "Player Wins"
                }

            }


  ])
  
})


test('When I have a nine, and two aces my score should be 21', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Welcome to Blackjack!/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', {name: /Start Playing Blackjack/i}))
  expect(screen.getByText(/----- Blackjack Game Stats -----/i)).toBeInTheDocument()

  const previousState = [{cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}}]

  expect(reducer(previousState, nineAceAceScoreState())).toEqual([
    {cards: [], dealerCards: [], playerCards: [], roundResult: {"roundEnd": false,
  "result": ""}, statistics: {"dealerWinCount": 0,
  "playerWinCount": 0,
  "tieCount": 0,
  "remainingCards": 0}},
    {
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
                    "playerScore": 21,
                    "result": "Player Wins"
                }

            }


  ])
  
})
