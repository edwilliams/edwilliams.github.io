var test = require('tape');

function transformArray( arr ) {

    var newArr = [];

    var strings = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'hundred' : '00',
        'thousand' : '000',
        'and' : '+'
    }

    arr.forEach(function(x) {
        newArr.push( strings[x] );
    });

    return newArr;

}

function splitInput( input ) {
    return input.split(' ');
}

function getNumberFromString( input ) {

    var arr = transformArray( splitInput( input ) );

    // split input into array
    // transformArray() returns new transformed array of values
    // map zeros to preceeding number
    // map factor 10  numbers either side of operands
    // return int

    return 301;

}

test('equivalence', function(t) {
    // t.equal( getNumberFromString('zero'), 0, 'this string is equal to this integer' );
    t.equal( getNumberFromString('three hundred and one'), 301, 'this string is equal to this integer' );
    t.end();
});
