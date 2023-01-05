/**
 * It takes an array and returns a shuffled version of the array.
 * @param array - The array of cards that you want to shuffle
 * @returns The array is being returned.
 */
const Shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    //While there are still cards to shuffle
    while (0 !== currentIndex) {

        //Randomly generates a number for picking the card
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //Uses the generated element and picks a card 
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
 * It takes a number of decks, and returns an array of cards.
 * @param decks - The number of decks you want to use.
 * @returns An array of shuffled cards.
 */
const PrepareCards = (decks) => {
    var base = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var cards = [];
    for (var i = 0; i < decks * 4; i++) {
        cards = cards.concat(base)
    }

    return Shuffle(cards)
}


/**
 * It takes an array of cards, and returns the total value of the cards.
 * @param cards - an array of strings representing the cards in the hand.
 * @returns The total value of the cards in the hand.
 */
const GetCardTotal = (cards) => {
    var flipAce = false;
    cards = cards.map((card) => {
        switch (card) {
            case 'A':
                if (flipAce) {
                    return 1;
                }
                flipAce = true;
                return 11;
            case 'J':
            case 'Q':
            case 'K':
                return 10;
            default:
                return parseInt(card, 10);
        }
    });

    var sum = cards.reduce((a, b) => a + b, 0);
    if (flipAce && sum > 21) {
        sum -= 10;
    }

    return sum
}

/**
 * If the player's sum is greater than 21, or the dealer's sum is 21 and the player's sum is not 21,
 * then the dealer wins. Otherwise, if the dealer's sum is greater than 21, or the player's sum is 21
 * and the dealer's sum is not 21, then the player wins. Otherwise, if the player's sum is less than
 * the dealer's sum, then the dealer wins. Otherwise, if the player's sum is greater than the dealer's
 * sum, then the player wins. Otherwise, it's a tie.
 * @param dealerSum - The sum of the dealer's cards
 * @param playerSum - The sum of the player's cards
 * @returns The result of the round.
 */
const GetRoundResults = (dealerSum, playerSum) => {
    var result = '';

    if (playerSum > 21 || (dealerSum === 21 && playerSum != 21)) {
        result = 'Dealer Wins';
    } else if (dealerSum > 21 || (playerSum === 21 && dealerSum != 21)) {
        result = 'Player Wins';
    } else {
        if (playerSum < dealerSum) {
            result = 'Dealer Wins';
        } else if (playerSum > dealerSum) {
            result = 'Player Wins';
        } else {
            result = 'Tie'
        }
    }

    return result;
}



export { PrepareCards, GetCardTotal, GetRoundResults };