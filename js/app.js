/*
 * Create a list that holds all of your cards
 */

let arrayCards = [
    'fa-diamond', 'fa-diamond',
    'fa-paper-plane-o', 'fa-paper-plane-o',
    'fa-anchor', 'fa-anchor',
    'fa-bolt', 'fa-bolt',
    'fa-cube','fa-cube',
    'fa-leaf', 'fa-leaf',
    'fa-bicycle', 'fa-bicycle',
    'fa-bomb', 'fa-bomb'
    
];


let allCards = document.querySelectorAll('.card');
let openCards = [];


function generateCard(card) {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}

const deck = document.querySelector('.deck');

function initGame() {
    var getCard = arrayCards.map(function(card) {
        return generateCard(card);
    });
    deck.innerHTML = getCard.join('');
}

initGame();



allCards.forEach(function(card) {  // Test Code
    card.addEventListener('click', function() {
        if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('open')) {
            openCards.push(card);
            card.classList.add('open','show');
        
            if (openCards.length == 2) {
                if(openCards[0].dataset.card == openCards[1].dataset.card){
                        openCards[0].classList.add('match');
                        openCards[0].classList.add('open');
                        openCards[0].classList.add('show');

                        openCards[1].classList.add('match');
                        openCards[1].classList.add('open');
                        openCards[1].classList.add('show');

                        openCards[2].classList.add('match');
                        openCards[2].classList.add('open');
                        openCards[2].classList.add('show');

                        openCards[3].classList.add('match');
                        openCards[3].classList.add('open');
                        openCards[3].classList.add('show');

                        openCards[4].classList.add('match');
                        openCards[4].classList.add('open');
                        openCards[4].classList.add('show');

                        openCards[5].classList.add('match');
                        openCards[5].classList.add('open');
                        openCards[5].classList.add('show');

                        openCards[6].classList.add('match');
                        openCards[6].classList.add('open');
                        openCards[6].classList.add('show');

                        openCards[7].classList.add('match');
                        openCards[7].classList.add('open');
                        openCards[7].classList.add('show');

                        openCards = [];
                  } else {
                        setTimeout(function() {
                            openCards.forEach(function(card) {
                                card.classList.remove('open','show');
                            });
                            openCards = [];
                    }, 100);

                }
            } 
        }
            
    });


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
