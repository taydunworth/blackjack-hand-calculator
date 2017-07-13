/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  // start at total of 0
  let total = 0

  // iterate through hand
  for (i = 0; i < hand.length; i++) {
    // if not an ace or face card, add the value of the card
    if ((hand[i] != "K") && (hand[i] != "Q") && (hand[i] != "J") && (hand[i] != "A")) {
      total += parseInt(hand[i], 10)
    }
  }

  for (i = 0; i < hand.length; i++) {
    // if face card exists, add 10 to the total
    if ((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")) {
      total += 10
    }
  }

  for (i = 0; i < hand.length; i++) {
    // if ace exists and the total of the cards plus 11 will be over 21, add 1 to the total
    if ((hand[i] === "A") && (total + 11 > 21)) {
      total += 1
    // if ace exists and the total of the cards plus 11 will be less than or equal to 21, add 11 to the total
    } else if ((hand[i] === "A") && (total + 11 <= 21)) {
      total += 11
    }
  }
  // return the total
  return total;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
