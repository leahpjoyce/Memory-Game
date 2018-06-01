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


let moveCounter = document.querySelector('.moves');
let moves = 0;
let second, minute, hour, interval;
let currentTimer;
let stars = document.querySelectorAll('.fa-star');
const timer = document.querySelector(".timer");


// Shuffle function from http://stackoverflow.com/a/2450976
const shuffle = (array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
});

// Create <li> element in HMTL
const generateCard = (card => {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
});


const initGame = () => {
    let deck = document.querySelector('.deck');
    
    var getCard = shuffle(arrayCards).map(function(card) {
        return generateCard(card);
    });
    moves = 0;
    
    deck.innerHTML = getCard.join('');

}

initGame();


let openCards = [];
let allCards = document.querySelectorAll('.card'); // store card class to allCards 
let reset = document.querySelector('.fa-repeat');



const game = () => {    
const cardGame = allCards.forEach(event => {
    event.addEventListener('click', function(e) {
        if(!event.classList.contains('open') && !event.classList.contains('show') && !event.classList.contains('match')) {
           event.classList.add('open', 'show'); //add class open and show
           openCards.push(event); // add all events with open and show card
         
             if (openCards.length >= 2) {
                moveCardCounter();
             if(openCards[0].dataset.card == openCards[1].dataset.card ){
                        openCards[0].classList.add('match');
                        openCards[0].classList.toggle('open');
                        openCards[0].classList.toggle('show');

                        openCards[1].classList.add('match');
                        openCards[1].classList.add('open');
                        openCards[1].classList.add('show');
                        
                 openCards = []; //empty card after removing open andh show
                  } else {
                    setTimeout(function() {
                    openCards.forEach(function(card) {
                        card.classList.remove('open', 'show');              
                });
                  openCards = []; //empty card after removing open andh show
                }, 200);
                
                  }     
            }
            moveCard();
          
        }
    });
    
});

}
                            
game();

const moveCard = () => {
 moves++;
 moveCounter.innerHTML = moves; 
    
}


const resetClickCards = () => { 
	allCards.forEach(function(card) {
		card.classList.remove("match", "show", "open");
		openCards = [];

	});
}

reset.addEventListener("click", function() {
    minute = 0;
    second = 0;
    moves = 0;
    moveCounter.innerHTML = moves;
    starsCard();
    resetTimer();
	resetClickCards();
    stopTimer();
    timer.innerHTML = minute + ' : ' + second;
});


const starsCard = () => {
        for (var i= 0; i < stars.length; i++){
            stars[i].style.color = '#02ccba';
         
        }
    
}

starsCard();


const moveCardCounter = () => {
      
    if(moves == 1){
        second = 0;
        minute = 0; 
        startTimer();
    }
   else if (moves < 15){
        for( let i= 0; i < stars.length; i++){
            if(i > 1){
                stars[i].style.color = 'black';
            }
        }
    }
    else if (moves > 25){
        for( let i= 0; i < stars.length; i++){
            if(i > 0){
                 stars[i].style.color = 'black';
            }
        }
    }
 
}


const setTimer = () => {
  timer.innerHTML = minute + ' : ' + second;
  second++;

  if (second <= 9) {
    second = '0' + second;
  }
  if (second === 60) {
    minute++;
    second = 0;
  } else {
    minute = minute;
  }
}

const startTimer = () => {
 currentTimer = setInterval(setTimer, 1000);
}

const resetTimer = () => {
   second = 0;
   minute = 0; 
   clearInterval(interval);
}

// function to stop the timer
function stopTimer() {
  clearInterval(currentTimer);
}


















