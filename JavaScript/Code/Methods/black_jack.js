/***********************************************************
************************************************************
    Count Change	Cards
    +1	2, 3, 4, 5, 6
    0	7, 8, 9
    -1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a
string, and increment or decrement the global count variable according to the card's value (see table).
The function will then return a string with the current count and the string Bet if the count is
positive, or Hold if the count is zero or negative. The current count and the
player's decision (Bet or Hold) should be separated by a single space.
************************************************************
*************************************************************/

var global_count=0;

function black_jack(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            global_count++;
            break;
        case 10:
        case "Q":
        case "K":
        case "J":
        case "A":
            global_count--;
            break;

    }

    var bet_Holder = "Hold";

    if(global_count>0){
        bet_Holder="Bet";
    }

    return global_count+" "+bet_Holder;
 }

console.log(black_jack(2));
console.log(black_jack(3));
console.log(black_jack(4));
console.log(black_jack(5));
console.log(black_jack(6));
console.log(black_jack(7));
console.log(black_jack(8));
console.log(black_jack(9));
console.log(black_jack(10));
console.log(black_jack("A"));
console.log(black_jack("Q"));
console.log(black_jack("K"));
console.log(black_jack("J"));