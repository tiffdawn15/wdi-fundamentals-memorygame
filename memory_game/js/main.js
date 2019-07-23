console.log("Up and Running");

//console.log("User flipped" + cardFour);
//console.log("User flipped" + cardThree);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0]
cardsInPlay.push('cardOne')

var cardTwo = cards[1]
cardsInPlay.push('cardTwo')

//console.log(cardsinplay)

console.log("User flipped queen")
console.log("User flipped king")

if (cardsInPlay[0] === cardsInPlay[1])
{
	alert("You found a match!");
} else {
	alert("Try again!")
}


console.log('User flipped' + cardOne);
console.log('User flipped' + cardTwo);