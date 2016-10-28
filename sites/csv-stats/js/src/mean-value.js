import { getAllInts } from './get-all-ints.js';

function meanValue( arr ) {

    let ints = getAllInts( arr );

    let total = 0, length = ints.length;

    ints.forEach(function(val, key) {
        total += val;
    });

    return Math.round( total / length * 1000 ) / 1000;

}

export { meanValue }