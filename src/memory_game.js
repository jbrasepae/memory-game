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
}

function checkForMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        freezeCards();
    }

    else{ 
        flipBackCards();
    }

}

function freezeCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function flipBackCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

(function shuffle(){
    cards.forEach(card => {
        let randPosition = Math.floor(Math.random() * 12);
        card.style.order = randPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))

