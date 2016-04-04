// TODO:
// timer
// scoreboard
// reset button
// choose size of table
// rightclick creates a flag
// onclick: if cell's empty, uncover empty neighbours

var body     = document.getElementsByTagName('body')[0]
var table    = document.getElementById('table');
var allCells;

var Core = {

    init: function() {

        this.createGrid(5, 0);

    },

    createGrid: function(rows, cells) {

        for (var i = 0; i < rows; i++) {
            table.innerHTML += '<div class="row">'
                            +     '<div data-row="' + ( i + 1 ) + '" data-cell="1" class="cell covered"></div>'
                            +     '<div data-row="' + ( i + 1 ) + '" data-cell="2" class="cell covered"></div>'
                            +     '<div data-row="' + ( i + 1 ) + '" data-cell="3" class="cell covered"></div>'
                            +     '<div data-row="' + ( i + 1 ) + '" data-cell="4" class="cell covered"></div>'
                            +     '<div data-row="' + ( i + 1 ) + '" data-cell="5" class="cell covered"></div>';
            table.innerHTML += '</div>';
        }

        allCells = document.querySelectorAll('.cell');

        this.plantBombs(bombCount);

    },

    plantBombs: function(bombCount) {

        // BUG: bomb may render on top of another
        // bomb, diminishing bomb count

        var i = bombCount - 1;

        for (i - 1; i >= 0; i--) {

            var randomCell = Math.floor( Math.random() * allCells.length );

            allCells[randomCell].innerHTML = '☀';
            allCells[randomCell].classList.add('bomb');
        };

        this.renderWarnings();

    },

    renderWarnings: function() {

        // console.log([bombCount]);

        var allBombs = document.querySelectorAll('.bomb');

        // loop through cells containing bombs
        Array.prototype.forEach.call(allBombs, function(el, i){

            // get the co-ordinates
            var bombRow  = parseInt(el.dataset.row);
            var bombCell = parseInt(el.dataset.cell);

            // for each bomb, loop through all the cells
            for ( var i = allCells.length - 1; i >= 0; i-- ) {

                // ...and get their co-ordinates
                var currentCell = allCells[i].dataset.cell;
                var currentRow = allCells[i].dataset.row;

                // row: eval true/false
                var rowUp   = currentRow == ( bombRow - 1 );
                var rowDown = currentRow == ( bombRow + 1 );
                var sameRow = currentRow == bombRow;

                // cell: eval true/false
                var cellWest = bombCell       == ( currentCell - - 1 );
                var cellEast = (bombCell + 1) == currentCell;
                var sameCell = currentCell    == bombCell;

                // TODO: this needs refactoring

                // NORTHWEST
                if ( rowUp   && cellWest )  {

                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }

                }
                // NORTH
                if ( rowUp   && sameCell )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // NORTHEAST
                if ( rowUp   && cellEast )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // WEST
                if ( sameRow && cellWest )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // EAST
                if ( sameRow && cellEast )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // SOUTHEAST
                if ( rowDown && cellEast )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // SOUTH
                if ( rowDown && sameCell )  {
                    var html = allCells[i].innerHTML;
                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }
                }
                // SOUTHWEST
                if ( rowDown && cellWest )  {

                    if ( allCells[i].innerHTML == '' ) {
                        allCells[i].innerHTML = 1;
                    } else if ( allCells[i].innerHTML == '☀' ) {
                        // do nothing
                    } else {
                        allCells[i].innerHTML = parseInt( allCells[i].innerHTML ) + 1;
                    }

                }

            }

        });

        this.play();

    },

    play: function() {

        table.addEventListener('click', function(event){
            var clicked = event.target;

            // clicked on a cell
            if ( clicked.classList.contains('cell') ) {
                if ( clicked.classList.contains('bomb') ) {
                    Core.lost();
                } else {
                    clicked.classList.add('uncovered');
                    Core.won();
                }
            };
        }, false);

    },

    won: function() {

        // check all cells for .uncovered
        var uncoveredCells = [];

        for ( var i = allCells.length - 1; i >= 0; i-- ) {

            if ( allCells[i].classList.contains('uncovered') ) {
                uncoveredCells.push(i);
            }

        }

        if ( uncoveredCells.length > ( allCells.length - (bombCount + 1) ) ) {
            body.classList.add('won');
        }

    },

    lost: function() {

        body.classList.add('lost');

    }

};

var bombCount = prompt('How many bombs?');

bombCount = parseInt(bombCount);

Core.init();