const Shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    //While there is still cards to shuffle
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



export { PrepareCards };