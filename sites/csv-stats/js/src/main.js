var Global = function() {

    // csv generated with these tools: https://www.random.org/integer-sets/ & http://listofrandomnames.com/
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

                if ( el.id == 'mean-value' ) {
                    renderHTML( 'The mean value of all the integers in the CSV (to three decimal places) is: ' + meanValue(arr) );
                }

                if ( el.id == 'highest-ints' ) {
                    renderHTML( 'The highest number of integers in a single line of the CSV is: ' + mostIntsInArray(arr) );
                }

                if ( el.id == 'most-common' ) {
                    renderHTML( 'The most common integer in the CSV is: ' + modeAverage( arr ) );
                }

            });

        }, false);

    }

    function getAllInts( arr ) {

        let allInts = [];

        arr.map(function(x) {
            x.map(function(y) {
                y = parseInt(y);
                if ( !isNaN(y) ) {
                    allInts.push( y );
                }
            });
        });

        return allInts;

    }

    function meanValue( arr ) {

        let ints = getAllInts( arr );

        let total = 0, length = ints.length;

        ints.forEach(function(val, key) {
            total += val;
        });

        return Math.round( total / length * 1000 ) / 1000;

    }

    function mostIntsInArray( arr ) {

        let largest = [], arrPos = 0, highest = 0;

        arr.map(function(x, i) {
            if ( x.length > highest ) {
                highest = x.length;
                arrPos = i;
            }
        });

        arr[arrPos].map(function(x) {
            if ( !isNaN(x) ) {
                largest.push( x );
            }
        });

        return largest.length;

    }

    // https://gist.github.com/Daniel-Hug/7273430
    function modeAverage( arr ) {

        var ints = getAllInts( arr );

		if (ints.length === 0) return null;

		var modeMap = {},
			maxCount = 1,
			modes = [ints[0]];

		ints.forEach(function(val) {

			if ( modeMap[val] === undefined ) {
                modeMap[val] = 1;
            } else {
                modeMap[val]++;
            }

			if ( modeMap[val] > maxCount ) {
				modes = [val];
				maxCount = modeMap[val];
			} else if (modeMap[val] == maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}

		});

		return modes;

    }

    init();

}();