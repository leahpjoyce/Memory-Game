allCards.forEach(function(card) {
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
    
 });
