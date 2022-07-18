
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let myCard = document.getElementById("cards")
let sumText = document.getElementById("sum")
let msgText = document.getElementById("msg")

let player = {
    name: "Ali",
    chips: 145,
}

let playerText = document.getElementById("player")

playerText.textContent = `${player.name}: $${player.chips}`



let msg = "";


function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1;

    if (random === 1) {
        return 11
    } else if (random >= 11) {
        return 10
    } else {
        return random
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
    myCard.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        myCard.textContent += `${cards[i]}, `;
    }
    sumText.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        msg = "Do you want to draw a new Card?";
    } else if (sum === 21) {
        msg = "Wohoo! You've got BlackJack!";
        hasBlackJack = true;
    } else {
        msg = "You're out of the game!";
        isAlive = false;
        msgText.textContent = msg;

    }
    msgText.textContent = msg;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}


///////////////////////////////////////////////////
// section 3 Lesson 49

// one boolean, one string, one number, one array

let castle = {
    title: "Live like a King in my Castle",
    isSuperHost: true,
    price: 190,
    tags: [
        "4 guests",
        "2 bedrooms"
    ]
}