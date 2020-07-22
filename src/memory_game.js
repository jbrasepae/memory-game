const cards = document.querySelectorAll('.card');

let flippedCard = true;
let firstCard;
let secondCard;

 function flipCard(){
    this.classList.toggle('turn');

    if(flippedCard){
        flippedCard = false;
        firstCard = this;

    }

    else{
        flippedCard = true;
        secondCard = this;

        matching();    
    }
}

function matching(){
    if(firstCard.dataset.name !== secondCard.dataset.name){
        flipBackCards();
    }

    else{ 
        freezeCards();
    }

}

function freezeCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function flipBackCards(){
    setTimeout(() => {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
    }, 900);
}



(function shuffle(){
    cards.forEach(card => {
        let randPosition = Math.floor(Math.random() * 12);
        card.style.order = randPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))

