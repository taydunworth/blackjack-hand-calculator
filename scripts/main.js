/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let handNumber = 0
  for (i = 0; i < hand.length; i++) {
    let value = hand[i]
    if ((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")) {
      handNumber = 10
    } else {
      handNumber = handNumber + value
    }
    if (hand.includes("A") && (handNumber + 11 > 21)) {
        handNumber = handNumber + 1
    } else if (hand.includes("A") && (handNumber + 11 <= 21)) {
        handNumber = handNumber + 1
    }
  } return handNumber;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
