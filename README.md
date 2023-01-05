# BBC-Software-Engineer-Blackjack-Assessment

My repo for the Blackjack game, part of the technical assessment of the BBC Software Engineer Graduate Scheme.

## Project description

A Blackjack game created using React, with the ability for the user to stand (let the dealer take cards) or hit (take cards for yourself). The game starts when the user clicks the 'start' button, and gives the user two cards. They can then hit or stand. If either the player or the dealer go over 21, they are bust and lose the game. The user can then restart the game, and play again.

## Assumptions made about the problem

- 6 decks of cards are in play (total card amount is 304 before restarting).
- An ace is counted as 11 when this would not make the total more than 21.
- If there are two aces, only one can be counted as 11, and the rest as 1.
- Double down, insurance, surrender, and split are not available for the player.

## Installation

First, from your node terminal, run ```npm install requirements.txt``` to install all necessary packages. Afterwards, run ```npm start```. This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

## Testing

Todo
