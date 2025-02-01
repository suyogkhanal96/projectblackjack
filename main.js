let player ={
  name : "PlayerName",
  Credits : "$69"
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name +" : "+ player.Credits

function startgame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  rendergame();
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}
function rendergame() {
  cardsEl.textContent = "Cards :";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card :)";
    hasBlackJack = false;
    isAlive = true;
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo youve got the black jack";
  } else {
    isAlive = false;
    message = "You're out of the game  ";
  }
  messageEl.textContent = message;
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(card);
    rendergame();
  }
}
