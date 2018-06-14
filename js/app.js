/**
* list of arrayCards
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

/**
* store elements to variable 
* call elements
*/
let moveCounter = document.querySelector('.moves');
moveCounter.textContent = 0;
let moves = 0;
let second = 0;
let stars = document.querySelectorAll('.fa-star');
let timer = document.querySelector(".timer");
let currentTimer = 0;
let popUp = document.querySelector('.pop');
let matchCounter = 0;
let starsUl = document.querySelector('.stars');


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

/**
* create element li's to HTML 
*/
const generateCard = (card => {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
});


const initGame = (() => {
    let deck = document.querySelector('.deck');
    
    var getCard = shuffle(arrayCards).map(function(card) {
        return generateCard(card);
    });
    moves = 0;
    
    deck.innerHTML = getCard.join('');
  
});

initGame();


let openCards = [];
let allCards = document.querySelectorAll('.card'); // store card class to allCards 
let reset = document.querySelector('.fa-repeat');



const game = (() => {    
const cardGame = allCards.forEach(event => {
    event.addEventListener('click', e => {
        if(!event.classList.contains('open') && !event.classList.contains('show') && !event.classList.contains('match')) {
           event.classList.add('open', 'show'); //add class open and show
           openCards.push(event); // add all events with open and show card
 
                
             if (moves === 1) {
                 currentTimer = setInterval(setTimer, 1000);
                }
         
                 if(openCards.length >= 2) {
                    moveCardCounter();
                     if(openCards[0].dataset.card == openCards[1].dataset.card ){
                         lockMatch();
                                openCards[0].classList.add('match');
                                openCards[0].classList.add('animated', 'shake');
                                openCards[1].classList.add('match');  
                                openCards[1].classList.add('animated', 'shake');
                         
                         openCards = []; //empty card after removing open andh show
                                
                            if( matchCounter === 16) {
                                  setTimeout(() => {
                                    buildDivModal();
                                    innerModalContext();
                                     
                                  }, 500);
                              }

                         }   
                     else {
                            setTimeout(() => {
                            openCards.forEach((card) => {
                                card.classList.remove('open', 'show');              
                        });
                          openCards = []; //empty card after removing open andh show
                        }, 200);

                          }     
                }
                moveCard(); // call moveCard function
               
            }
        
    });
    
});

});

game();

const moveCard = (() => {
 moves++;
 moveCounter.innerHTML = moves; 
    
});

const resetClickCards = (() => { 
	allCards.forEach((card) => {
		card.classList.remove("match", "show", "open");
		openCards = [];

	});
});

const resetGame = (() => { 
    second = 0;
    moves = 0;
    moveCounter.innerHTML = moves;
    moveCardCounter();
    starsCard();
    resetTimer();
    resetClickCards();
    timer.innerHTML = 0;
    for( let i= 0; i < stars.length; i++){
         stars[i].style.color = 'black';         
        }
    

});
                     

reset.addEventListener("click", () => {
        second = 0;
        moves = 0;
        moveCounter.innerHTML = moves;
        moveCardCounter();
        starsCard();
        resetTimer();
        resetClickCards();
        timer.innerHTML = 0;
        for( let i= 0; i < stars.length; i++){
             stars[i].style.color = 'black';         
            }
        game();
});




const starsCard = (() => {
        for (var i= 0; i < stars.length; i++){
            stars[i].style.color = '#02ccba';  
        }  
});


const moveCardCounter = (() => { 
    if(moves == 1){
        starsCard();
        setTimer();
    }
   else if (moves == 15){
        for( let i= 0; i < stars.length; i++){
            if(i > 1){
                stars[i].style.color = 'black';
            }
        }
    }
    else if (moves == 25){
        for( let i= 0; i < stars.length; i++){
            if(i > 0){
                 stars[i].style.color = 'black';
            }
        }
    }

});

const setTimer = (() => {
  second++;
  timer.innerHTML = second;  
   
});


/**
* @description resetTimer function
*/
const resetTimer = (() => {
   second = 0;
   clearInterval(currentTimer);
});


const buildDivModal = (() => {
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    container.appendChild(div);
    
    div.className = 'modal';
    div.id = 'myModal';

});


const innerModalContext = (() => {
    let myModal = document.getElementById('myModal');
     starsUl.style.listStyleType = "none";
       myModal.innerHTML = 
            `<div class="context">
               <h2 class="title">Congratulations !</h2>
               <p id="message">You won !</p>
               <p id="time">${timer.innerHTML} second</p>
               <p id="moves">${moves} moves</p>
               <p id="stars">${starsUl.innerHTML}</p> 
               <span class="close">Play Again</p> 
            </div>`;
   
    
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', function() {
        resetClickCards();
        resetGame();
        myModal.style.display = "none"; 
    });
   
});



const lockMatch = (() => {
    let faSymbol = `${openCards[0]}`;
    let collection = document.getElementsByClassName(`${faSymbol}`);

    for(let i=0; i<collection.length; i++){
        collection[i].parentElement.className = `card match`;
    }
    matchCounter += 2;
});


