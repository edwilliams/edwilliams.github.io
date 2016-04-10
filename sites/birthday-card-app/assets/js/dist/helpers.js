function queryStringToJSON(qs) {
    qs = qs || location.search.slice(1);

    var pairs = qs.split('&');
    var result = {};
    pairs.forEach(function(pair) {
        var pair = pair.split('=');
        var key = pair[0];
        var value = decodeURIComponent(pair[1] || '');

        if( result[key] ) {
            if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                result[key].push( value );
            } else {
                result[key] = [ result[key], value ];
            }
        } else {
            result[key] = value;
        }
    });

    return JSON.parse(JSON.stringify(result));
}

function validateEmail( x ) {
    var atpos = x.indexOf('@');
    var dotpos = x.lastIndexOf('.');
    if ( atpos < 1 || dotpos < atpos+2 || dotpos + 2 >= x.length ) {
        return false;
    } else {
        return true;
    }
}