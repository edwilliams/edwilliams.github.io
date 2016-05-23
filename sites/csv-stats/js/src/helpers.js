// http://stackoverflow.com/a/1293163/2102042
function CSVToArray( strData, strDelimiter ) {

    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    var arrData = [[]];

    var arrMatches = null;


    while (arrMatches = objPattern.exec( strData )){

        var strMatchedDelimiter = arrMatches[ 1 ];

        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            arrData.push( [] );

        }

        var strMatchedValue;

        if (arrMatches[ 2 ]){

            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            strMatchedValue = arrMatches[ 3 ];

        }


        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    return( arrData );

}

function getFile( file, callback ) {

    var request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            callback( this.response );
        } else {
            console.log('error');
        }
    };

    request.onerror = function() {
        console.log('error');
    };

    request.send();

}

function renderHTML( html ) {

    document.getElementById('container').innerHTML = html;

}
