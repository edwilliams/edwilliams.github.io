import { CSVToArray } from './csv-to-array.js';
import { getFile } from './get-file.js';
import { renderHTML } from './render-html.js';
import { getAllInts } from './get-all-ints.js';
import { mostIntsInArray } from './most-ints-in-array.js';
import { modeAverage } from './mode-average.js';
import { meanValue } from './mean-value.js';

var Global = function() {

    // csv generated with these tools:
    //  https://www.random.org/integer-sets/
    //  http://listofrandomnames.com/
    const CSV = './names-scores.csv';

    function init() {

        events();

    }

    function events() {

        // event listener for all links
        document.addEventListener('click', function(event) {

            let el = event.target;

            if ( el.tagName !== 'A' ) { return false; }

            getFile(CSV, function(data) {

                let arr = CSVToArray(data);

                if ( el.id == 'total-ints' ) {
                    renderHTML( 'The total number of integers in the CSV is: ' + getAllInts(arr).length );
                }

                if ( el.id == 'highest-ints' ) {
                    renderHTML( 'The highest number of integers in a single line of the CSV is: ' + mostIntsInArray(arr) );
                }

                if ( el.id == 'most-common' ) {
                    renderHTML( 'The most common integer in the CSV is: ' + modeAverage( arr ) );
                }

                if ( el.id == 'mean-value' ) {
                    renderHTML( 'The mean value of all the integers in the CSV (to three decimal places) is: ' + meanValue(arr) );
                }

            });

        }, false);

    }

    init();

}();