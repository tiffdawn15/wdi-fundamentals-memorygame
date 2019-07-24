

//creating arrays 

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//function checkForMatch
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1])
{
	console.log("You found a match!");
} else {
	console.log("Sorry, Try again!")
}
}

//function to flip card
function flipCard(cardId){
checkForMatch
console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId]);

if(cards.length === 2) {
	checkForMatch();
}
}


flipCard(0);
flipCard(2);
checkForMatch();