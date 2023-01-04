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

const PrepareCards = (decks) => {
    var base = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var cards = [];
    for (var i = 0; i < decks * 4; i++) {
        cards = cards.concat(base)
    }

    return Shuffle(cards)
}


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

    return cards.reduce((a, b) => a + b, 0);
}



export { PrepareCards, GetCardTotal };