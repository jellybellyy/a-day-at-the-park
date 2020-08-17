const cardArray = [
    {
        name: 'sun',
        img: 'images/sun.svg'
    },
    {
        name: 'sun',
        img: 'images/sun.svg'
    },
    {
        name: 'bee',
        img: 'images/bee.svg'
    },
    {
        name: 'bee',
        img: 'images/bee.svg'
    },
    {
        name: 'butterfly',
        img: 'images/butterfly.svg'
    },
    {
        name: 'butterfly',
        img: 'images/butterfly.svg'
    },
    {
        name: 'leaf',
        img: 'images/leaf.svg'
    },
    {
        name: 'leaf',
        img: 'images/leaf.svg'
    },
    {
        name: 'snail',
        img: 'images/snail.svg'
    },
    {
        name: 'snail',
        img: 'images/snail.svg'
    },
    {
        name: 'sunflower',
        img: 'images/sunflower.svg'
    },
    {
        name: 'sunflower',
        img: 'images/sunflower.svg'
    },
    {
        name: 'tree',
        img: 'images/tree.svg'
    },
    {
        name: 'tree',
        img: 'images/tree.svg'
    },
    {
        name: 'tulip',
        img: 'images/tulip.svg'
    },
    {
        name: 'tulip',
        img: 'images/tulip.svg'
    }
];

// Randomise the cards

cardArray.sort( () => 0.5 - Math.random());

// Variables and Selectors

var body = document.querySelector('body');
var gameContainer = document.querySelector('.game-container');

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// Creating all the card elements

var createGameBoard = function () {

    for ( var i = 0 ; i < cardArray.length ; i ++ ) {

        var card = document.createElement('img');
        card.classList.add('card');
        // card.classList.add('visible');
        card.setAttribute('id', i);
        card.setAttribute('src', 'images/green2.png');
        card.style.opacity = '0.6';
        gameContainer.appendChild(card);

        // var cardFront = document.createElement('div');
        // cardFront.classList.add('card-front');
        // card.appendChild(cardFront);

        // var cardFace = document.createElement('img');
        // cardFace.classList.add('card-face');
        // card.appendChild(cardFace);


        // var cardBack = document.createElement('div');
        // cardBack.classList.add('card-back', 'card-face');
        // card.appendChild(cardBack);

        card.addEventListener('click', flipCard);

    }
}

createGameBoard();

// card container

var cards = document.querySelectorAll('.card');

// funtion to match the pairs

function checkForMatch () {

    var cardOneId = cardsChosenId[0];
    var cardTwoId = cardsChosenId[1];
    // var cardThreeId = cardsChosenId[2];


    if ( cardOneId == cardTwoId ) {

        cards[cardOneId].setAttribute('src', 'images/green2.png')
        cards[cardOneId].style.opacity = '0.6';
        cards[cardTwoId].setAttribute('src', 'images/green2.png')
        cards[cardTwoId].style.opacity = '0.6';
        alert('You have clicked the same image!')
    }

    else if ( cardsChosen.length > 2 ) {
        cards[cardOneId].setAttribute('src', 'images/green2.png')
        cards[cardOneId].style.opacity = '0.6';
        cards[cardTwoId].setAttribute('src', 'images/green2.png')
        cards[cardTwoId].style.opacity = '0.6';
        alert('You have clicked more than two images!')
    }

    else if ( cardsChosen[0] == cardsChosen[1] ) {
        // alert("You've found a match!");
        cards[cardOneId].style.visibility = 'hidden';
        cards[cardTwoId].style.visibility = 'hidden';
        cards[cardOneId].removeEventListener('click', flipCard);
        cards[cardTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        console.log(cardsChosen);
    }

    else {
        cards[cardOneId].setAttribute('src', 'images/green2.png');
        cards[cardOneId].style.opacity = '0.6';
        cards[cardTwoId].setAttribute('src', 'images/green2.png');
        cards[cardTwoId].style.opacity = '0.6';
    }

    cardsChosen = [];
    cardsChosenId = [];

    if ( cardsWon.length == cardArray.length / 2 ) {
        setTimeout ( alert("Congratulations! You've finished the game!"), 2000 );
    }

}


// function to call when the card gets clicked

function flipCard () {

    var cardId = this.getAttribute('id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    this.style.opacity = '1';

    if ( cardsChosen.length == 2 ) {
        setTimeout(checkForMatch, 700);
    }

    else if ( cardsChosen.length > 2 ) {
        cardsChosen.splice(2,1);
        checkForMatch();
    }

}









































//hi