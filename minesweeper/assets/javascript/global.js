var allCells   = document.getElementsByClassName('cell');
var randomCell = allCells[ Math.floor( Math.random() * allCells.length ) ];
var bomb;
var whereIsTheBomb;

var Cells = {
    row1 : {
        cell1  : document.getElementById('row1cell1'),
        cell2  : document.getElementById('row1cell2'),
        cell3  : document.getElementById('row1cell3'),
        cell4  : document.getElementById('row1cell4'),
        cell5  : document.getElementById('row1cell5'),
        cell6  : document.getElementById('row1cell6'),
        cell7  : document.getElementById('row1cell7'),
        cell8  : document.getElementById('row1cell8'),
        cell9  : document.getElementById('row1cell9'),
        cell10 : document.getElementById('row1cell10')
    },
    row2 : {
        cell1  : document.getElementById('row2cell1'),
        cell2  : document.getElementById('row2cell2'),
        cell3  : document.getElementById('row2cell3'),
        cell4  : document.getElementById('row2cell4'),
        cell5  : document.getElementById('row2cell5'),
        cell6  : document.getElementById('row2cell6'),
        cell7  : document.getElementById('row2cell7'),
        cell8  : document.getElementById('row2cell8'),
        cell9  : document.getElementById('row2cell9'),
        cell10 : document.getElementById('row2cell10')
    },
    row3 : {
        cell1  : document.getElementById('row3cell1'),
        cell2  : document.getElementById('row3cell2'),
        cell3  : document.getElementById('row3cell3'),
        cell4  : document.getElementById('row3cell4'),
        cell5  : document.getElementById('row3cell5'),
        cell6  : document.getElementById('row3cell6'),
        cell7  : document.getElementById('row3cell7'),
        cell8  : document.getElementById('row3cell8'),
        cell9  : document.getElementById('row3cell9'),
        cell10 : document.getElementById('row3cell10')
    },
    row4 : {
        cell1  : document.getElementById('row4cell1'),
        cell2  : document.getElementById('row4cell2'),
        cell3  : document.getElementById('row4cell3'),
        cell4  : document.getElementById('row4cell4'),
        cell5  : document.getElementById('row4cell5'),
        cell6  : document.getElementById('row4cell6'),
        cell7  : document.getElementById('row4cell7'),
        cell8  : document.getElementById('row4cell8'),
        cell9  : document.getElementById('row4cell9'),
        cell10 : document.getElementById('row4cell10')
    },
    row5 : {
        cell1  : document.getElementById('row5cell1'),
        cell2  : document.getElementById('row5cell2'),
        cell3  : document.getElementById('row5cell3'),
        cell4  : document.getElementById('row5cell4'),
        cell5  : document.getElementById('row5cell5'),
        cell6  : document.getElementById('row5cell6'),
        cell7  : document.getElementById('row5cell7'),
        cell8  : document.getElementById('row5cell8'),
        cell9  : document.getElementById('row5cell9'),
        cell10 : document.getElementById('row5cell10')
    },
    row6 : {
        cell1  : document.getElementById('row6cell1'),
        cell2  : document.getElementById('row6cell2'),
        cell3  : document.getElementById('row6cell3'),
        cell4  : document.getElementById('row6cell4'),
        cell5  : document.getElementById('row6cell5'),
        cell6  : document.getElementById('row6cell6'),
        cell7  : document.getElementById('row6cell7'),
        cell8  : document.getElementById('row6cell8'),
        cell9  : document.getElementById('row6cell9'),
        cell10 : document.getElementById('row6cell10')
    },
    row7 : {
        cell1  : document.getElementById('row7cell1'),
        cell2  : document.getElementById('row7cell2'),
        cell3  : document.getElementById('row7cell3'),
        cell4  : document.getElementById('row7cell4'),
        cell5  : document.getElementById('row7cell5'),
        cell6  : document.getElementById('row7cell6'),
        cell7  : document.getElementById('row7cell7'),
        cell8  : document.getElementById('row7cell8'),
        cell9  : document.getElementById('row7cell9'),
        cell10 : document.getElementById('row7cell10')
    },
    row8 : {
        cell1  : document.getElementById('row8cell1'),
        cell2  : document.getElementById('row8cell2'),
        cell3  : document.getElementById('row8cell3'),
        cell4  : document.getElementById('row8cell4'),
        cell5  : document.getElementById('row8cell5'),
        cell6  : document.getElementById('row8cell6'),
        cell7  : document.getElementById('row8cell7'),
        cell8  : document.getElementById('row8cell8'),
        cell9  : document.getElementById('row8cell9'),
        cell10 : document.getElementById('row8cell10')
    },
    row9 : {
        cell1  : document.getElementById('row9cell1'),
        cell2  : document.getElementById('row9cell2'),
        cell3  : document.getElementById('row9cell3'),
        cell4  : document.getElementById('row9cell4'),
        cell5  : document.getElementById('row9cell5'),
        cell6  : document.getElementById('row9cell6'),
        cell7  : document.getElementById('row9cell7'),
        cell8  : document.getElementById('row9cell8'),
        cell9  : document.getElementById('row9cell9'),
        cell10 : document.getElementById('row9cell10')
    },
    row10 : {
        cell1  : document.getElementById('row10cell1'),
        cell2  : document.getElementById('row10cell2'),
        cell3  : document.getElementById('row10cell3'),
        cell4  : document.getElementById('row10cell4'),
        cell5  : document.getElementById('row10cell5'),
        cell6  : document.getElementById('row10cell6'),
        cell7  : document.getElementById('row10cell7'),
        cell8  : document.getElementById('row10cell8'),
        cell9  : document.getElementById('row10cell9'),
        cell10 : document.getElementById('row10cell10')
    }
}

var Core = {

    init: function() {

        //this.renderCells();
        this.placeBombs();

        this.discoverBombs();

        this.play();

    },

    placeBombs: function() {

        // place one bomb randomly in the grid

        bomb = randomCell;

        bomb.innerHTML = '☀';
        bomb.classList.add('bomb');

    },

    discoverBombs: function() {

        if ( bomb.classList.contains('row1')  )  {
            var rowContainingBomb = 1;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row1cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row1cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row1cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row1cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row1cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row1cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row1cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row1cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row1cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row1cell10'; }
        }

        if ( bomb.classList.contains('row2')  )  {
            var rowContainingBomb = 2;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row2cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row2cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row2cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row2cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row2cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row2cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row2cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row2cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row2cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row2cell10'; }
        }

        if ( bomb.classList.contains('row3')  )  {
            var rowContainingBomb = 3;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row3cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row3cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row3cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row3cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row3cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row3cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row3cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row3cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row3cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row3cell10'; }
        }

        if ( bomb.classList.contains('row4')  )  {
            var rowContainingBomb = 4;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row4cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row4cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row4cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row4cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row4cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row4cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row4cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row4cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row4cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row4cell10'; }
        }

        if ( bomb.classList.contains('row5')  )  {
            var rowContainingBomb = 5;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row5cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row5cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row5cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row5cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row5cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row5cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row5cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row5cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row5cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row5cell10'; }
        }

        if ( bomb.classList.contains('row6')  )  {
            var rowContainingBomb = 6;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row6cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row6cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row6cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row6cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row6cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row6cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row6cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row6cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row6cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row6cell10'; }
        }

        if ( bomb.classList.contains('row7')  )  {
            var rowContainingBomb = 7;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row7cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row7cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row7cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row7cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row7cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row7cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row7cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row7cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row7cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row7cell10'; }
        }

        if ( bomb.classList.contains('row8')  )  {
            var rowContainingBomb = 8;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row8cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row8cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row8cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row8cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row8cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row8cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row8cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row8cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row8cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row8cell10'; }
        }

        if ( bomb.classList.contains('row9')  )  {
            var rowContainingBomb = 9;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row9cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row9cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row9cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row9cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row9cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row9cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row9cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row9cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row9cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row9cell10'; }
        }

        if ( bomb.classList.contains('row10')  )  {
            var rowContainingBomb = 10;
            if ( bomb.classList.contains('cell1') )  { whereIsTheBomb = 'row10cell1'; }
            if ( bomb.classList.contains('cell2') )  { whereIsTheBomb = 'row10cell2'; }
            if ( bomb.classList.contains('cell3') )  { whereIsTheBomb = 'row10cell3'; }
            if ( bomb.classList.contains('cell4') )  { whereIsTheBomb = 'row10cell4'; }
            if ( bomb.classList.contains('cell5') )  { whereIsTheBomb = 'row10cell5'; }
            if ( bomb.classList.contains('cell6') )  { whereIsTheBomb = 'row10cell6'; }
            if ( bomb.classList.contains('cell7') )  { whereIsTheBomb = 'row10cell7'; }
            if ( bomb.classList.contains('cell8') )  { whereIsTheBomb = 'row10cell8'; }
            if ( bomb.classList.contains('cell9') )  { whereIsTheBomb = 'row10cell9'; }
            if ( bomb.classList.contains('cell10') ) { whereIsTheBomb = 'row10cell10'; }
        }

        this.markBombNeighbours(rowContainingBomb);

    },

    markBombNeighbours: function(rowContainingBomb) {

        if ( rowContainingBomb == 1 ) {

            if ( whereIsTheBomb == 'row1cell1' ) {

                Cells.row1.cell2.innerHTML = 1;

                Cells.row2.cell1.innerHTML = 1;
                Cells.row2.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell2' ) {

                Cells.row1.cell1.innerHTML = 1;
                Cells.row1.cell3.innerHTML = 1;

                Cells.row2.cell1.innerHTML = 1;
                Cells.row2.cell2.innerHTML = 1;
                Cells.row2.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell3' ) {

                Cells.row1.cell2.innerHTML = 1;
                Cells.row1.cell4.innerHTML = 1;

                Cells.row2.cell2.innerHTML = 1;
                Cells.row2.cell3.innerHTML = 1;
                Cells.row2.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell4' ) {

                Cells.row1.cell3.innerHTML = 1;
                Cells.row1.cell5.innerHTML = 1;

                Cells.row2.cell3.innerHTML = 1;
                Cells.row2.cell4.innerHTML = 1;
                Cells.row2.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell5' ) {

                Cells.row1.cell4.innerHTML = 1;
                Cells.row1.cell6.innerHTML = 1;

                Cells.row2.cell4.innerHTML = 1;
                Cells.row2.cell5.innerHTML = 1;
                Cells.row2.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell6' ) {

                Cells.row1.cell5.innerHTML = 1;
                Cells.row1.cell7.innerHTML = 1;

                Cells.row2.cell5.innerHTML = 1;
                Cells.row2.cell6.innerHTML = 1;
                Cells.row2.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell7' ) {

                Cells.row1.cell6.innerHTML = 1;
                Cells.row1.cell8.innerHTML = 1;

                Cells.row2.cell6.innerHTML = 1;
                Cells.row2.cell7.innerHTML = 1;
                Cells.row2.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell8' ) {

                Cells.row1.cell7.innerHTML = 1;
                Cells.row1.cell9.innerHTML = 1;

                Cells.row2.cell7.innerHTML = 1;
                Cells.row2.cell8.innerHTML = 1;
                Cells.row2.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell9' ) {

                Cells.row1.cell8.innerHTML = 1;
                Cells.row1.cell10.innerHTML = 1;

                Cells.row2.cell8.innerHTML = 1;
                Cells.row2.cell9.innerHTML = 1;
                Cells.row2.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row1cell10' ) {

                Cells.row1.cell9.innerHTML = 1;

                Cells.row2.cell9.innerHTML = 1;
                Cells.row2.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 2 ) {

            if ( whereIsTheBomb == 'row2cell1' ) {
                Cells.row1.cell1.innerHTML = 1;
                Cells.row1.cell2.innerHTML = 1;

                Cells.row2.cell2.innerHTML = 1;

                Cells.row3.cell1.innerHTML = 1;
                Cells.row3.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell2' ) {
                Cells.row1.cell1.innerHTML = 1;
                Cells.row1.cell2.innerHTML = 1;
                Cells.row1.cell3.innerHTML = 1;

                Cells.row2.cell1.innerHTML = 1;
                Cells.row2.cell3.innerHTML = 1;

                Cells.row3.cell1.innerHTML = 1;
                Cells.row3.cell2.innerHTML = 1;
                Cells.row3.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell3' ) {
                Cells.row1.cell2.innerHTML = 1;
                Cells.row1.cell3.innerHTML = 1;
                Cells.row1.cell4.innerHTML = 1;

                Cells.row2.cell2.innerHTML = 1;
                Cells.row2.cell4.innerHTML = 1;

                Cells.row3.cell2.innerHTML = 1;
                Cells.row3.cell3.innerHTML = 1;
                Cells.row3.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell4' ) {
                Cells.row1.cell3.innerHTML = 1;
                Cells.row1.cell4.innerHTML = 1;
                Cells.row1.cell5.innerHTML = 1;

                Cells.row2.cell3.innerHTML = 1;
                Cells.row2.cell5.innerHTML = 1;

                Cells.row3.cell3.innerHTML = 1;
                Cells.row3.cell4.innerHTML = 1;
                Cells.row3.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell5' ) {
                Cells.row1.cell4.innerHTML = 1;
                Cells.row1.cell5.innerHTML = 1;
                Cells.row1.cell6.innerHTML = 1;

                Cells.row2.cell4.innerHTML = 1;
                Cells.row2.cell6.innerHTML = 1;

                Cells.row3.cell4.innerHTML = 1;
                Cells.row3.cell5.innerHTML = 1;
                Cells.row3.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell6' ) {
                Cells.row1.cell5.innerHTML = 1;
                Cells.row1.cell6.innerHTML = 1;
                Cells.row1.cell7.innerHTML = 1;

                Cells.row2.cell5.innerHTML = 1;
                Cells.row2.cell7.innerHTML = 1;

                Cells.row3.cell5.innerHTML = 1;
                Cells.row3.cell6.innerHTML = 1;
                Cells.row3.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell7' ) {
                Cells.row1.cell6.innerHTML = 1;
                Cells.row1.cell7.innerHTML = 1;
                Cells.row1.cell8.innerHTML = 1;

                Cells.row2.cell6.innerHTML = 1;
                Cells.row2.cell8.innerHTML = 1;

                Cells.row3.cell6.innerHTML = 1;
                Cells.row3.cell7.innerHTML = 1;
                Cells.row3.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell8' ) {
                Cells.row1.cell7.innerHTML = 1;
                Cells.row1.cell8.innerHTML = 1;
                Cells.row1.cell9.innerHTML = 1;

                Cells.row2.cell7.innerHTML = 1;
                Cells.row2.cell9.innerHTML = 1;

                Cells.row3.cell7.innerHTML = 1;
                Cells.row3.cell8.innerHTML = 1;
                Cells.row3.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell9' ) {
                Cells.row1.cell8.innerHTML = 1;
                Cells.row1.cell9.innerHTML = 1;
                Cells.row1.cell10.innerHTML = 1;

                Cells.row2.cell8.innerHTML = 1;
                Cells.row2.cell10.innerHTML = 1;

                Cells.row3.cell8.innerHTML = 1;
                Cells.row3.cell9.innerHTML = 1;
                Cells.row3.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row2cell10' ) {
                Cells.row1.cell9.innerHTML = 1;
                Cells.row1.cell10.innerHTML = 1;

                Cells.row2.cell9.innerHTML = 1;

                Cells.row3.cell9.innerHTML = 1;
                Cells.row3.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 3 ) {

            if ( whereIsTheBomb == 'row3cell1' ) {
                Cells.row2.cell1.innerHTML = 1;
                Cells.row2.cell2.innerHTML = 1;

                Cells.row3.cell2.innerHTML = 1;

                Cells.row4.cell1.innerHTML = 1;
                Cells.row4.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell2' ) {
                Cells.row2.cell1.innerHTML = 1;
                Cells.row2.cell2.innerHTML = 1;
                Cells.row2.cell3.innerHTML = 1;

                Cells.row3.cell1.innerHTML = 1;
                Cells.row3.cell3.innerHTML = 1;

                Cells.row4.cell1.innerHTML = 1;
                Cells.row4.cell2.innerHTML = 1;
                Cells.row4.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell3' ) {
                Cells.row2.cell2.innerHTML = 1;
                Cells.row2.cell3.innerHTML = 1;
                Cells.row2.cell4.innerHTML = 1;

                Cells.row3.cell2.innerHTML = 1;
                Cells.row3.cell4.innerHTML = 1;

                Cells.row4.cell2.innerHTML = 1;
                Cells.row4.cell3.innerHTML = 1;
                Cells.row4.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell4' ) {
                Cells.row2.cell3.innerHTML = 1;
                Cells.row2.cell4.innerHTML = 1;
                Cells.row2.cell5.innerHTML = 1;

                Cells.row3.cell3.innerHTML = 1;
                Cells.row3.cell5.innerHTML = 1;

                Cells.row4.cell3.innerHTML = 1;
                Cells.row4.cell4.innerHTML = 1;
                Cells.row4.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell5' ) {
                Cells.row2.cell4.innerHTML = 1;
                Cells.row2.cell5.innerHTML = 1;
                Cells.row2.cell6.innerHTML = 1;

                Cells.row3.cell4.innerHTML = 1;
                Cells.row3.cell6.innerHTML = 1;

                Cells.row4.cell4.innerHTML = 1;
                Cells.row4.cell5.innerHTML = 1;
                Cells.row4.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell6' ) {
                Cells.row2.cell5.innerHTML = 1;
                Cells.row2.cell6.innerHTML = 1;
                Cells.row2.cell7.innerHTML = 1;

                Cells.row3.cell5.innerHTML = 1;
                Cells.row3.cell7.innerHTML = 1;

                Cells.row4.cell5.innerHTML = 1;
                Cells.row4.cell6.innerHTML = 1;
                Cells.row4.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell7' ) {
                Cells.row2.cell6.innerHTML = 1;
                Cells.row2.cell7.innerHTML = 1;
                Cells.row2.cell8.innerHTML = 1;

                Cells.row3.cell6.innerHTML = 1;
                Cells.row3.cell8.innerHTML = 1;

                Cells.row4.cell6.innerHTML = 1;
                Cells.row4.cell7.innerHTML = 1;
                Cells.row4.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell8' ) {
                Cells.row2.cell7.innerHTML = 1;
                Cells.row2.cell8.innerHTML = 1;
                Cells.row2.cell9.innerHTML = 1;

                Cells.row3.cell7.innerHTML = 1;
                Cells.row3.cell9.innerHTML = 1;

                Cells.row4.cell7.innerHTML = 1;
                Cells.row4.cell8.innerHTML = 1;
                Cells.row4.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell9' ) {
                Cells.row2.cell8.innerHTML = 1;
                Cells.row2.cell9.innerHTML = 1;
                Cells.row2.cell10.innerHTML = 1;

                Cells.row3.cell8.innerHTML = 1;
                Cells.row3.cell10.innerHTML = 1;

                Cells.row4.cell8.innerHTML = 1;
                Cells.row4.cell9.innerHTML = 1;
                Cells.row4.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row3cell10' ) {
                Cells.row2.cell9.innerHTML = 1;
                Cells.row2.cell10.innerHTML = 1;

                Cells.row3.cell9.innerHTML = 1;

                Cells.row4.cell9.innerHTML = 1;
                Cells.row4.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 4 ) {

            if ( whereIsTheBomb == 'row4cell1' ) {
                Cells.row3.cell1.innerHTML = 1;
                Cells.row3.cell2.innerHTML = 1;

                Cells.row4.cell2.innerHTML = 1;

                Cells.row5.cell1.innerHTML = 1;
                Cells.row5.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell2' ) {
                Cells.row3.cell1.innerHTML = 1;
                Cells.row3.cell2.innerHTML = 1;
                Cells.row3.cell3.innerHTML = 1;

                Cells.row4.cell1.innerHTML = 1;
                Cells.row4.cell3.innerHTML = 1;

                Cells.row5.cell1.innerHTML = 1;
                Cells.row5.cell2.innerHTML = 1;
                Cells.row5.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell3' ) {
                Cells.row3.cell2.innerHTML = 1;
                Cells.row3.cell3.innerHTML = 1;
                Cells.row3.cell4.innerHTML = 1;

                Cells.row4.cell2.innerHTML = 1;
                Cells.row4.cell4.innerHTML = 1;

                Cells.row5.cell2.innerHTML = 1;
                Cells.row5.cell3.innerHTML = 1;
                Cells.row5.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell4' ) {
                Cells.row3.cell3.innerHTML = 1;
                Cells.row3.cell4.innerHTML = 1;
                Cells.row3.cell5.innerHTML = 1;

                Cells.row4.cell3.innerHTML = 1;
                Cells.row4.cell5.innerHTML = 1;

                Cells.row5.cell3.innerHTML = 1;
                Cells.row5.cell4.innerHTML = 1;
                Cells.row5.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell5' ) {
                Cells.row3.cell4.innerHTML = 1;
                Cells.row3.cell5.innerHTML = 1;
                Cells.row3.cell6.innerHTML = 1;

                Cells.row4.cell4.innerHTML = 1;
                Cells.row4.cell6.innerHTML = 1;

                Cells.row5.cell4.innerHTML = 1;
                Cells.row5.cell5.innerHTML = 1;
                Cells.row5.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell6' ) {
                Cells.row3.cell5.innerHTML = 1;
                Cells.row3.cell6.innerHTML = 1;
                Cells.row3.cell7.innerHTML = 1;

                Cells.row4.cell5.innerHTML = 1;
                Cells.row4.cell7.innerHTML = 1;

                Cells.row5.cell5.innerHTML = 1;
                Cells.row5.cell6.innerHTML = 1;
                Cells.row5.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell7' ) {
                Cells.row3.cell6.innerHTML = 1;
                Cells.row3.cell7.innerHTML = 1;
                Cells.row3.cell8.innerHTML = 1;

                Cells.row4.cell6.innerHTML = 1;
                Cells.row4.cell8.innerHTML = 1;

                Cells.row5.cell6.innerHTML = 1;
                Cells.row5.cell7.innerHTML = 1;
                Cells.row5.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell8' ) {
                Cells.row3.cell7.innerHTML = 1;
                Cells.row3.cell8.innerHTML = 1;
                Cells.row3.cell9.innerHTML = 1;

                Cells.row4.cell7.innerHTML = 1;
                Cells.row4.cell9.innerHTML = 1;

                Cells.row5.cell7.innerHTML = 1;
                Cells.row5.cell8.innerHTML = 1;
                Cells.row5.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell9' ) {
                Cells.row3.cell8.innerHTML = 1;
                Cells.row3.cell9.innerHTML = 1;
                Cells.row3.cell10.innerHTML = 1;

                Cells.row4.cell8.innerHTML = 1;
                Cells.row4.cell10.innerHTML = 1;

                Cells.row5.cell8.innerHTML = 1;
                Cells.row5.cell9.innerHTML = 1;
                Cells.row5.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row4cell10' ) {
                Cells.row3.cell9.innerHTML = 1;
                Cells.row3.cell10.innerHTML = 1;

                Cells.row4.cell9.innerHTML = 1;

                Cells.row5.cell9.innerHTML = 1;
                Cells.row5.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 5 ) {

            if ( whereIsTheBomb == 'row5cell1' ) {
                Cells.row4.cell1.innerHTML = 1;
                Cells.row4.cell2.innerHTML = 1;

                Cells.row5.cell2.innerHTML = 1;

                Cells.row6.cell1.innerHTML = 1;
                Cells.row6.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell2' ) {
                Cells.row4.cell1.innerHTML = 1;
                Cells.row4.cell2.innerHTML = 1;
                Cells.row4.cell3.innerHTML = 1;

                Cells.row5.cell1.innerHTML = 1;
                Cells.row5.cell3.innerHTML = 1;

                Cells.row6.cell1.innerHTML = 1;
                Cells.row6.cell2.innerHTML = 1;
                Cells.row6.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell3' ) {
                Cells.row4.cell2.innerHTML = 1;
                Cells.row4.cell3.innerHTML = 1;
                Cells.row4.cell4.innerHTML = 1;

                Cells.row5.cell2.innerHTML = 1;
                Cells.row5.cell4.innerHTML = 1;

                Cells.row6.cell2.innerHTML = 1;
                Cells.row6.cell3.innerHTML = 1;
                Cells.row6.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell4' ) {
                Cells.row4.cell3.innerHTML = 1;
                Cells.row4.cell4.innerHTML = 1;
                Cells.row4.cell5.innerHTML = 1;

                Cells.row5.cell3.innerHTML = 1;
                Cells.row5.cell5.innerHTML = 1;

                Cells.row6.cell3.innerHTML = 1;
                Cells.row6.cell4.innerHTML = 1;
                Cells.row6.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell5' ) {
                Cells.row4.cell4.innerHTML = 1;
                Cells.row4.cell5.innerHTML = 1;
                Cells.row4.cell6.innerHTML = 1;

                Cells.row5.cell4.innerHTML = 1;
                Cells.row5.cell6.innerHTML = 1;

                Cells.row6.cell4.innerHTML = 1;
                Cells.row6.cell5.innerHTML = 1;
                Cells.row6.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell6' ) {
                Cells.row4.cell5.innerHTML = 1;
                Cells.row4.cell6.innerHTML = 1;
                Cells.row4.cell7.innerHTML = 1;

                Cells.row5.cell5.innerHTML = 1;
                Cells.row5.cell7.innerHTML = 1;

                Cells.row6.cell5.innerHTML = 1;
                Cells.row6.cell6.innerHTML = 1;
                Cells.row6.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell7' ) {
                Cells.row4.cell6.innerHTML = 1;
                Cells.row4.cell7.innerHTML = 1;
                Cells.row4.cell8.innerHTML = 1;

                Cells.row5.cell6.innerHTML = 1;
                Cells.row5.cell8.innerHTML = 1;

                Cells.row6.cell6.innerHTML = 1;
                Cells.row6.cell7.innerHTML = 1;
                Cells.row6.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell8' ) {
                Cells.row4.cell7.innerHTML = 1;
                Cells.row4.cell8.innerHTML = 1;
                Cells.row4.cell9.innerHTML = 1;

                Cells.row5.cell7.innerHTML = 1;
                Cells.row5.cell9.innerHTML = 1;

                Cells.row6.cell7.innerHTML = 1;
                Cells.row6.cell8.innerHTML = 1;
                Cells.row6.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell9' ) {
                Cells.row4.cell8.innerHTML = 1;
                Cells.row4.cell9.innerHTML = 1;
                Cells.row4.cell10.innerHTML = 1;

                Cells.row5.cell8.innerHTML = 1;
                Cells.row5.cell10.innerHTML = 1;

                Cells.row6.cell8.innerHTML = 1;
                Cells.row6.cell9.innerHTML = 1;
                Cells.row6.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row5cell10' ) {
                Cells.row4.cell9.innerHTML = 1;
                Cells.row4.cell10.innerHTML = 1;

                Cells.row5.cell9.innerHTML = 1;

                Cells.row6.cell9.innerHTML = 1;
                Cells.row6.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 6 ) {

            if ( whereIsTheBomb == 'row6cell1' ) {
                Cells.row5.cell1.innerHTML = 1;
                Cells.row5.cell2.innerHTML = 1;

                Cells.row6.cell2.innerHTML = 1;

                Cells.row7.cell1.innerHTML = 1;
                Cells.row7.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell2' ) {
                Cells.row5.cell1.innerHTML = 1;
                Cells.row5.cell2.innerHTML = 1;
                Cells.row5.cell3.innerHTML = 1;

                Cells.row6.cell1.innerHTML = 1;
                Cells.row6.cell3.innerHTML = 1;

                Cells.row7.cell1.innerHTML = 1;
                Cells.row7.cell2.innerHTML = 1;
                Cells.row7.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell3' ) {
                Cells.row5.cell2.innerHTML = 1;
                Cells.row5.cell3.innerHTML = 1;
                Cells.row5.cell4.innerHTML = 1;

                Cells.row6.cell2.innerHTML = 1;
                Cells.row6.cell4.innerHTML = 1;

                Cells.row7.cell2.innerHTML = 1;
                Cells.row7.cell3.innerHTML = 1;
                Cells.row7.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell4' ) {
                Cells.row5.cell3.innerHTML = 1;
                Cells.row5.cell4.innerHTML = 1;
                Cells.row5.cell5.innerHTML = 1;

                Cells.row6.cell3.innerHTML = 1;
                Cells.row6.cell5.innerHTML = 1;

                Cells.row7.cell3.innerHTML = 1;
                Cells.row7.cell4.innerHTML = 1;
                Cells.row7.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell5' ) {
                Cells.row5.cell4.innerHTML = 1;
                Cells.row5.cell5.innerHTML = 1;
                Cells.row5.cell6.innerHTML = 1;

                Cells.row6.cell4.innerHTML = 1;
                Cells.row6.cell6.innerHTML = 1;

                Cells.row7.cell4.innerHTML = 1;
                Cells.row7.cell5.innerHTML = 1;
                Cells.row7.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell6' ) {
                Cells.row5.cell5.innerHTML = 1;
                Cells.row5.cell6.innerHTML = 1;
                Cells.row5.cell7.innerHTML = 1;

                Cells.row6.cell5.innerHTML = 1;
                Cells.row6.cell7.innerHTML = 1;

                Cells.row7.cell5.innerHTML = 1;
                Cells.row7.cell6.innerHTML = 1;
                Cells.row7.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell7' ) {
                Cells.row5.cell6.innerHTML = 1;
                Cells.row5.cell7.innerHTML = 1;
                Cells.row5.cell8.innerHTML = 1;

                Cells.row6.cell6.innerHTML = 1;
                Cells.row6.cell8.innerHTML = 1;

                Cells.row7.cell6.innerHTML = 1;
                Cells.row7.cell7.innerHTML = 1;
                Cells.row7.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell8' ) {
                Cells.row5.cell7.innerHTML = 1;
                Cells.row5.cell8.innerHTML = 1;
                Cells.row5.cell9.innerHTML = 1;

                Cells.row6.cell7.innerHTML = 1;
                Cells.row6.cell9.innerHTML = 1;

                Cells.row7.cell7.innerHTML = 1;
                Cells.row7.cell8.innerHTML = 1;
                Cells.row7.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell9' ) {
                Cells.row5.cell8.innerHTML = 1;
                Cells.row5.cell9.innerHTML = 1;
                Cells.row5.cell10.innerHTML = 1;

                Cells.row6.cell8.innerHTML = 1;
                Cells.row6.cell10.innerHTML = 1;

                Cells.row7.cell8.innerHTML = 1;
                Cells.row7.cell9.innerHTML = 1;
                Cells.row7.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row6cell10' ) {
                Cells.row5.cell9.innerHTML = 1;
                Cells.row5.cell10.innerHTML = 1;

                Cells.row6.cell9.innerHTML = 1;

                Cells.row7.cell9.innerHTML = 1;
                Cells.row7.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 7 ) {

            if ( whereIsTheBomb == 'row7cell1' ) {
                Cells.row6.cell1.innerHTML = 1;
                Cells.row6.cell2.innerHTML = 1;

                Cells.row7.cell2.innerHTML = 1;

                Cells.row8.cell1.innerHTML = 1;
                Cells.row8.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell2' ) {
                Cells.row6.cell1.innerHTML = 1;
                Cells.row6.cell2.innerHTML = 1;
                Cells.row6.cell3.innerHTML = 1;

                Cells.row7.cell1.innerHTML = 1;
                Cells.row7.cell3.innerHTML = 1;

                Cells.row8.cell1.innerHTML = 1;
                Cells.row8.cell2.innerHTML = 1;
                Cells.row8.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell3' ) {
                Cells.row6.cell2.innerHTML = 1;
                Cells.row6.cell3.innerHTML = 1;
                Cells.row6.cell4.innerHTML = 1;

                Cells.row7.cell2.innerHTML = 1;
                Cells.row7.cell4.innerHTML = 1;

                Cells.row8.cell2.innerHTML = 1;
                Cells.row8.cell3.innerHTML = 1;
                Cells.row8.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell4' ) {
                Cells.row6.cell3.innerHTML = 1;
                Cells.row6.cell4.innerHTML = 1;
                Cells.row6.cell5.innerHTML = 1;

                Cells.row7.cell3.innerHTML = 1;
                Cells.row7.cell5.innerHTML = 1;

                Cells.row8.cell3.innerHTML = 1;
                Cells.row8.cell4.innerHTML = 1;
                Cells.row8.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell5' ) {
                Cells.row6.cell4.innerHTML = 1;
                Cells.row6.cell5.innerHTML = 1;
                Cells.row6.cell6.innerHTML = 1;

                Cells.row7.cell4.innerHTML = 1;
                Cells.row7.cell6.innerHTML = 1;

                Cells.row8.cell4.innerHTML = 1;
                Cells.row8.cell5.innerHTML = 1;
                Cells.row8.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell6' ) {
                Cells.row6.cell5.innerHTML = 1;
                Cells.row6.cell6.innerHTML = 1;
                Cells.row6.cell7.innerHTML = 1;

                Cells.row7.cell5.innerHTML = 1;
                Cells.row7.cell7.innerHTML = 1;

                Cells.row8.cell5.innerHTML = 1;
                Cells.row8.cell6.innerHTML = 1;
                Cells.row8.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell7' ) {
                Cells.row6.cell6.innerHTML = 1;
                Cells.row6.cell7.innerHTML = 1;
                Cells.row6.cell8.innerHTML = 1;

                Cells.row7.cell6.innerHTML = 1;
                Cells.row7.cell8.innerHTML = 1;

                Cells.row8.cell6.innerHTML = 1;
                Cells.row8.cell7.innerHTML = 1;
                Cells.row8.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell8' ) {
                Cells.row6.cell7.innerHTML = 1;
                Cells.row6.cell8.innerHTML = 1;
                Cells.row6.cell9.innerHTML = 1;

                Cells.row7.cell7.innerHTML = 1;
                Cells.row7.cell9.innerHTML = 1;

                Cells.row8.cell7.innerHTML = 1;
                Cells.row8.cell8.innerHTML = 1;
                Cells.row8.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell9' ) {
                Cells.row6.cell8.innerHTML = 1;
                Cells.row6.cell9.innerHTML = 1;
                Cells.row6.cell10.innerHTML = 1;

                Cells.row7.cell8.innerHTML = 1;
                Cells.row7.cell10.innerHTML = 1;

                Cells.row8.cell8.innerHTML = 1;
                Cells.row8.cell9.innerHTML = 1;
                Cells.row8.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row7cell10' ) {
                Cells.row6.cell9.innerHTML = 1;
                Cells.row6.cell10.innerHTML = 1;

                Cells.row7.cell9.innerHTML = 1;

                Cells.row8.cell9.innerHTML = 1;
                Cells.row8.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 8 ) {

            if ( whereIsTheBomb == 'row8cell1' ) {
                Cells.row7.cell1.innerHTML = 1;
                Cells.row7.cell2.innerHTML = 1;

                Cells.row8.cell2.innerHTML = 1;

                Cells.row9.cell1.innerHTML = 1;
                Cells.row9.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell2' ) {
                Cells.row7.cell1.innerHTML = 1;
                Cells.row7.cell2.innerHTML = 1;
                Cells.row7.cell3.innerHTML = 1;

                Cells.row8.cell1.innerHTML = 1;
                Cells.row8.cell3.innerHTML = 1;

                Cells.row9.cell1.innerHTML = 1;
                Cells.row9.cell2.innerHTML = 1;
                Cells.row9.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell3' ) {
                Cells.row7.cell2.innerHTML = 1;
                Cells.row7.cell3.innerHTML = 1;
                Cells.row7.cell4.innerHTML = 1;

                Cells.row8.cell2.innerHTML = 1;
                Cells.row8.cell4.innerHTML = 1;

                Cells.row9.cell2.innerHTML = 1;
                Cells.row9.cell3.innerHTML = 1;
                Cells.row9.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell4' ) {
                Cells.row7.cell3.innerHTML = 1;
                Cells.row7.cell4.innerHTML = 1;
                Cells.row7.cell5.innerHTML = 1;

                Cells.row8.cell3.innerHTML = 1;
                Cells.row8.cell5.innerHTML = 1;

                Cells.row9.cell3.innerHTML = 1;
                Cells.row9.cell4.innerHTML = 1;
                Cells.row9.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell5' ) {
                Cells.row7.cell4.innerHTML = 1;
                Cells.row7.cell5.innerHTML = 1;
                Cells.row7.cell6.innerHTML = 1;

                Cells.row8.cell4.innerHTML = 1;
                Cells.row8.cell6.innerHTML = 1;

                Cells.row9.cell4.innerHTML = 1;
                Cells.row9.cell5.innerHTML = 1;
                Cells.row9.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell6' ) {
                Cells.row7.cell5.innerHTML = 1;
                Cells.row7.cell6.innerHTML = 1;
                Cells.row7.cell7.innerHTML = 1;

                Cells.row8.cell5.innerHTML = 1;
                Cells.row8.cell7.innerHTML = 1;

                Cells.row9.cell5.innerHTML = 1;
                Cells.row9.cell6.innerHTML = 1;
                Cells.row9.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell7' ) {
                Cells.row7.cell6.innerHTML = 1;
                Cells.row7.cell7.innerHTML = 1;
                Cells.row7.cell8.innerHTML = 1;

                Cells.row8.cell6.innerHTML = 1;
                Cells.row8.cell8.innerHTML = 1;

                Cells.row9.cell6.innerHTML = 1;
                Cells.row9.cell7.innerHTML = 1;
                Cells.row9.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell8' ) {
                Cells.row7.cell7.innerHTML = 1;
                Cells.row7.cell8.innerHTML = 1;
                Cells.row7.cell9.innerHTML = 1;

                Cells.row8.cell7.innerHTML = 1;
                Cells.row8.cell9.innerHTML = 1;

                Cells.row9.cell7.innerHTML = 1;
                Cells.row9.cell8.innerHTML = 1;
                Cells.row9.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell9' ) {
                Cells.row7.cell8.innerHTML = 1;
                Cells.row7.cell9.innerHTML = 1;
                Cells.row7.cell10.innerHTML = 1;

                Cells.row8.cell8.innerHTML = 1;
                Cells.row8.cell10.innerHTML = 1;

                Cells.row9.cell8.innerHTML = 1;
                Cells.row9.cell9.innerHTML = 1;
                Cells.row9.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row8cell10' ) {
                Cells.row7.cell9.innerHTML = 1;
                Cells.row7.cell10.innerHTML = 1;

                Cells.row8.cell9.innerHTML = 1;

                Cells.row9.cell9.innerHTML = 1;
                Cells.row9.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 9 ) {

            if ( whereIsTheBomb == 'row9cell1' ) {
                Cells.row8.cell1.innerHTML = 1;
                Cells.row8.cell2.innerHTML = 1;

                Cells.row9.cell2.innerHTML = 1;

                Cells.row10.cell1.innerHTML = 1;
                Cells.row10.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell2' ) {
                Cells.row8.cell1.innerHTML = 1;
                Cells.row8.cell2.innerHTML = 1;
                Cells.row8.cell3.innerHTML = 1;

                Cells.row9.cell1.innerHTML = 1;
                Cells.row9.cell3.innerHTML = 1;

                Cells.row10.cell1.innerHTML = 1;
                Cells.row10.cell2.innerHTML = 1;
                Cells.row10.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell3' ) {
                Cells.row8.cell2.innerHTML = 1;
                Cells.row8.cell3.innerHTML = 1;
                Cells.row8.cell4.innerHTML = 1;

                Cells.row9.cell2.innerHTML = 1;
                Cells.row9.cell4.innerHTML = 1;

                Cells.row10.cell2.innerHTML = 1;
                Cells.row10.cell3.innerHTML = 1;
                Cells.row10.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell4' ) {
                Cells.row8.cell3.innerHTML = 1;
                Cells.row8.cell4.innerHTML = 1;
                Cells.row8.cell5.innerHTML = 1;

                Cells.row9.cell3.innerHTML = 1;
                Cells.row9.cell5.innerHTML = 1;

                Cells.row10.cell3.innerHTML = 1;
                Cells.row10.cell4.innerHTML = 1;
                Cells.row10.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell5' ) {
                Cells.row8.cell4.innerHTML = 1;
                Cells.row8.cell5.innerHTML = 1;
                Cells.row8.cell6.innerHTML = 1;

                Cells.row9.cell4.innerHTML = 1;
                Cells.row9.cell6.innerHTML = 1;

                Cells.row10.cell4.innerHTML = 1;
                Cells.row10.cell5.innerHTML = 1;
                Cells.row10.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell6' ) {
                Cells.row8.cell5.innerHTML = 1;
                Cells.row8.cell6.innerHTML = 1;
                Cells.row8.cell7.innerHTML = 1;

                Cells.row9.cell5.innerHTML = 1;
                Cells.row9.cell7.innerHTML = 1;

                Cells.row10.cell5.innerHTML = 1;
                Cells.row10.cell6.innerHTML = 1;
                Cells.row10.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell7' ) {
                Cells.row8.cell6.innerHTML = 1;
                Cells.row8.cell7.innerHTML = 1;
                Cells.row8.cell8.innerHTML = 1;

                Cells.row9.cell6.innerHTML = 1;
                Cells.row9.cell8.innerHTML = 1;

                Cells.row10.cell6.innerHTML = 1;
                Cells.row10.cell7.innerHTML = 1;
                Cells.row10.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell8' ) {
                Cells.row8.cell7.innerHTML = 1;
                Cells.row8.cell8.innerHTML = 1;
                Cells.row8.cell9.innerHTML = 1;

                Cells.row9.cell7.innerHTML = 1;
                Cells.row9.cell9.innerHTML = 1;

                Cells.row10.cell7.innerHTML = 1;
                Cells.row10.cell8.innerHTML = 1;
                Cells.row10.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell9' ) {
                Cells.row8.cell8.innerHTML = 1;
                Cells.row8.cell9.innerHTML = 1;
                Cells.row8.cell10.innerHTML = 1;

                Cells.row9.cell8.innerHTML = 1;
                Cells.row9.cell10.innerHTML = 1;

                Cells.row10.cell8.innerHTML = 1;
                Cells.row10.cell9.innerHTML = 1;
                Cells.row10.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row9cell10' ) {
                Cells.row8.cell9.innerHTML = 1;
                Cells.row8.cell10.innerHTML = 1;

                Cells.row9.cell9.innerHTML = 1;

                Cells.row10.cell9.innerHTML = 1;
                Cells.row10.cell10.innerHTML = 1;
            }

        }

        if ( rowContainingBomb == 10 ) {

            if ( whereIsTheBomb == 'row10cell1' ) {
                Cells.row9.cell1.innerHTML = 1;
                Cells.row9.cell2.innerHTML = 1;

                Cells.row10.cell2.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell2' ) {
                Cells.row9.cell1.innerHTML = 1;
                Cells.row9.cell2.innerHTML = 1;
                Cells.row9.cell3.innerHTML = 1;

                Cells.row10.cell1.innerHTML = 1;
                Cells.row10.cell3.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell3' ) {
                Cells.row9.cell2.innerHTML = 1;
                Cells.row9.cell3.innerHTML = 1;
                Cells.row9.cell4.innerHTML = 1;

                Cells.row10.cell2.innerHTML = 1;
                Cells.row10.cell4.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell4' ) {
                Cells.row9.cell3.innerHTML = 1;
                Cells.row9.cell4.innerHTML = 1;
                Cells.row9.cell5.innerHTML = 1;

                Cells.row10.cell3.innerHTML = 1;
                Cells.row10.cell5.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell5' ) {
                Cells.row9.cell4.innerHTML = 1;
                Cells.row9.cell5.innerHTML = 1;
                Cells.row9.cell6.innerHTML = 1;

                Cells.row10.cell4.innerHTML = 1;
                Cells.row10.cell6.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell6' ) {
                Cells.row9.cell5.innerHTML = 1;
                Cells.row9.cell6.innerHTML = 1;
                Cells.row9.cell7.innerHTML = 1;

                Cells.row10.cell5.innerHTML = 1;
                Cells.row10.cell7.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell7' ) {
                Cells.row9.cell6.innerHTML = 1;
                Cells.row9.cell7.innerHTML = 1;
                Cells.row9.cell8.innerHTML = 1;

                Cells.row10.cell6.innerHTML = 1;
                Cells.row10.cell8.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell8' ) {
                Cells.row9.cell7.innerHTML = 1;
                Cells.row9.cell8.innerHTML = 1;
                Cells.row9.cell9.innerHTML = 1;

                Cells.row10.cell7.innerHTML = 1;
                Cells.row10.cell9.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell9' ) {
                Cells.row9.cell8.innerHTML = 1;
                Cells.row9.cell9.innerHTML = 1;
                Cells.row9.cell10.innerHTML = 1;

                Cells.row10.cell8.innerHTML = 1;
                Cells.row10.cell10.innerHTML = 1;
            }

            if ( whereIsTheBomb == 'row10cell10' ) {
                Cells.row9.cell9.innerHTML = 1;
                Cells.row9.cell10.innerHTML = 1;

                Cells.row10.cell9.innerHTML = 1;
            }

        }

    },

    play: function() {

        document.getElementById('table').addEventListener('click', function(event){
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
            console.log();
            if ( allCells[i].classList.contains('uncovered') ) {
                uncoveredCells.push(i);
            };
        };
        console.log(uncoveredCells);
        if ( uncoveredCells.length > 98 ) {
            document.getElementsByTagName('body')[0].classList.add('won');
        };
    },

    lost: function() {
        document.getElementsByTagName('body')[0].classList.add('lost');
    }

};

Core.init();