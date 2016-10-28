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

export { mostIntsInArray }