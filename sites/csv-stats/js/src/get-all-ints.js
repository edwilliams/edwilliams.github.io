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

export { getAllInts }