// cache all the elements

var cells = document.querySelectorAll('.cell');

var cell1 = document.querySelectorAll('.cell-1')[0];
var cell2 = document.querySelectorAll('.cell-2')[0];
var cell3 = document.querySelectorAll('.cell-3')[0];
var cell4 = document.querySelectorAll('.cell-4')[0];
var cell5 = document.querySelectorAll('.cell-5')[0];
var cell6 = document.querySelectorAll('.cell-6')[0];
var cell7 = document.querySelectorAll('.cell-7')[0];
var cell8 = document.querySelectorAll('.cell-8')[0];
var cell9 = document.querySelectorAll('.cell-9')[0];

// naughts start first
var player = 'naught';

// observe a click on any element
document.addEventListener('click', function() {

    // cache the clicked element
    var el = event.target;

    // if it's a cell
    if ( el.classList.contains('cell') ) {

        // ...and it's naughts go
        if ( player == 'naught' ) {

            // add a naught to the cell
            el.classList.add('naught');

            // and check whether there's a winner
            winLooseOrDraw(player);
        }

        // ...and it's crosses go
        if ( player == 'cross' ) {

            // add a cross to the cell
            el.classList.add('cross');

            // and check whether there's a winner
            winLooseOrDraw(player);
        }

        // if this was naughts go
        if ( player == 'naught' ) {

            // switch player to cross
            player = 'cross';

        // else it was crosses go
        } else if ( player == 'cross' ) {

            // so switch player to naught
            player = 'naught';
        }

    }

});

function winLooseOrDraw(player) {

    // each of these variable evaluates to true or false

    // the three possible horizontal winning combinations
    var horzOne   = cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player);
    var horzTwo   = cell4.classList.contains(player) && cell5.classList.contains(player) && cell6.classList.contains(player);
    var horzThree = cell7.classList.contains(player) && cell8.classList.contains(player) && cell9.classList.contains(player);

    // the three possible vertical winning combinations
    var vertOne   = cell1.classList.contains(player) && cell4.classList.contains(player) && cell7.classList.contains(player);
    var vertTwo   = cell2.classList.contains(player) && cell5.classList.contains(player) && cell8.classList.contains(player);
    var vertThree = cell3.classList.contains(player) && cell6.classList.contains(player) && cell9.classList.contains(player);

    // the two possible diagonal winning combinations
    var diagOne   = cell1.classList.contains(player) && cell5.classList.contains(player) && cell9.classList.contains(player);
    var diagTwo   = cell3.classList.contains(player) && cell5.classList.contains(player) && cell7.classList.contains(player);

    // if any of the winning combinations occur
    if ( horzOne || horzTwo || horzThree ||
         vertOne || vertTwo || vertThree ||
         diagOne || diagTwo ) {

        // alert the winner
        alert(player + ' won');

        // and restart the game
        location.reload();

    // else it might be a draw?
    } else {

        // so create an array to indicate how many cells are filled
        var allCelledFilled = [];

        // and loop through all cells
        for (var i = cells.length - 1; i >= 0; i--) {

            // if current cell contains either naught or cross
            if ( cells[i].classList.contains('naught') || cells[i].classList.contains('cross') ) {

                // add integer to array
                allCelledFilled.push(1);

            }

        }

        // if all celled are filled (and we know no-one has won)
        if ( allCelledFilled.length == 9 ) {

            // it's a draw!
            alert('draw');

            // and restart the game
            location.reload();

        }

    }

}