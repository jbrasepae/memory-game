const cards = document.querySelectorAll('.card');

let flippedCard = true;
let firstCard;
let secondCard;

 function flipCard(){
    this.classList.add('flip');

    if(flippedCard){
        flippedCard = false;
        firstCard = this;
    }
    else{
        flippedCard = true;
        secondCard = this;

        checkForMatch();    
    }
    // if (flippedCard == cards.length)
    // document.getElementById("board").innerHTML =
    //   '<h1>🥇<u>Well done! you won</u>🥇</h1></br><button onclick="startGame()">Start New Game...</button>';
}

function checkForMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        alert('you have found match')
        freezeCards();
    }
    else{ 
        alert('sorry, try again')
        unflipCards();
    }

}

function freezeCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}

(function shuffle(){
    cards.forEach(card => {
        let randPosition = Math.floor(Math.random() * 12);
        card.style.order = randPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))

