var telegram = (function($) {

    var $telegram = $('#telegram');

    function initialize() {

        eventListeners();

    }

    function eventListeners() {

        $(window).on('keyup', function(event) {

            appendImg( key[event.keyCode] );

        });

        $('button').on('click', function(event) {
            telegram.screenShot();
        });

    }

    function appendImg( letter ) {

        // $telegram.append('<img src="/img/' + letter + '.png">');
        $telegram.append('<img src="/img/a.png">');

    }

    function screenShot() {

        html2canvas(document.body, {
            onrendered: function(canvas) {
                document.body.appendChild(canvas);
                var png = document.querySelector('canvas').toDataURL();
                $('body').append('<img src="' + png + '">');
            }
        });

    }

    initialize();

    return {
        screenShot : screenShot
    }

})(jQuery);