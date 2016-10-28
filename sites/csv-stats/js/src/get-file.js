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

export { getFile }