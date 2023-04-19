let hands = ["rock", "paper", "scissors"];
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}
let player1 = {
  name: "Player 1",
  getHand: getHand,
};
let player2 = {
  name: "Player 2",
  getHand: getHand,
};
let player3 = {
  name: "Player 3",
  getHand: getHand,
};
let player4 = {
  name: "Player 4",
  getHand: getHand,
};
function playRound(player1, player2) {
  let player1Hand = player1.getHand();
  if (player1.hand) {
    player1Hand = player1.hand
  };
  let player2Hand = player2.getHand();
  if (player2.hand){
    player2Hand = player2.hand
  };

  console.log(player1.name + " hand = " + player1Hand);
  console.log(player2.name + " hand = " + player2Hand);

  if (player1Hand == player2Hand) {
    console.log("it's a tie");
    return null;
  } else if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "scissors" && player2Hand === "paper") ||
    (player1Hand === "paper" && player2Hand === "rock")
  ) {
    console.log(player1.name + " Wins");
    return player1;
  } else if (
    (player2Hand === "rock" && player1Hand === "scissors") ||
    (player2Hand === "scissors" && player1Hand === "paper") ||
    (player2Hand === "paper" && player1Hand === "rock")
  ) {
    console.log(player2.name + " Wins");
    return player2;
  }
}
function playGame(player1, player2, playUntil) {
  player1.p1Win = 0;
  player2.p2Win = 0;
  while (player1.p1Win < playUntil && player2.p2Win < playUntil) {
    console.log(
      player1.name +
        " Wins: " +
        player1.p1Win +
        " | " +
        player2.name +
        " Wins: " +
        player2.p2Win
    );
    let roundWinner = playRound(player1, player2);
    if (roundWinner === null) {
    } else if (roundWinner.name === player1.name) {
      player1.p1Win += 1;
    } else if (roundWinner.name === player2.name) {
      player2.p2Win += 1;
    }
  }
  if (player1.p1Win == playUntil) {
    return player1;
  } else if (player2.p2Win == playUntil) {
    return player2;
  }
}

function playTournament(player1, player2, player3, player4, playUntil) {
  let group1Winner = playGame(player1, player2, playUntil);
  let group2Winner = playGame(player3, player4, playUntil);
  let tournamentWinner = playGame(group1Winner, group2Winner, playUntil);
  return tournamentWinner;
}
// playRound(player1,player2);
console.log("Winner is " + playGame(player1, player2, 3).name);
// playGame (player1, player2, 5);
console.log();
console.log();
console.log(
  playTournament(player1, player2, player3, player4, 3).name +
    " is the world champion!"
);
// added the player name and score to the html lines 23-24-32-33
document.getElementById("player0Name").textContent = player1.name
document.getElementById("player1Name").textContent = player2.name
document.getElementById("player0Score").textContent = player1.p1Win
document.getElementById("player1Score").textContent = player2.p2Win
document.getElementById("submitSelected").addEventListener("submit", function (event) {
  event.preventDefault();
  const submitted = new FormData(event.target);
  player1.hand = submitted.get("inputGroupSelect0");
  player2.hand = submitted.get("inputGroupSelect1");
  let Winner = playRound(player1, player2);
  if (Winner?.name === player1.name) {
    document.getElementById("player0Score").textContent = 1
    document.getElementById("player1Score").textContent = 0
  } else if (Winner.name === player2.name) {
    document.getElementById("player1Score").textContent = 1
    document.getElementById("player0Score").textContent = 0
  } else {
    document.getElementById("player1Score").textContent = 0
    document.getElementById("player0Score").textContent = 0
  };
})