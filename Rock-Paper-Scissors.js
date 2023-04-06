let hands = ["rock", "paper", "scissors"];
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}
let player1 = {
    name: "Player 1",
    getHand: getHand
};
let player2 = {
    name: "Player 2",
    getHand: getHand
};
function playRound(player1, player2) {
    let player1Hand = player1.getHand();
    let player2Hand = player2.getHand();

    console.log("Player 1 hand = " + player1Hand);
    console.log("Player 2 hand = " + player2Hand);

    if (player1Hand == player2Hand) {
        console.log("it's a tie");
        return null
    } else if (player1Hand ==="rock" && player2Hand === "scissors" || player1Hand === "scissors" && player2Hand === "paper" || player1Hand === "paper" && player2Hand === "rock")  
        {
        console.log("Player 1 Wins");
        return player1;
    } else if (player2Hand === "rock" && player1Hand === "scissors" || player2Hand === "scissors" && player1Hand === "paper" || player2Hand === "paper" && player1Hand === "rock")
    {
        console.log("Player 2 Wins");
        return player2; 
    }
}
playRound(player1,player2);