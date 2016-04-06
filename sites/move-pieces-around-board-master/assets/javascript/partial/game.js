var Mancala = (function() {

    'use strict';

    var remaining = 0;

    function init() {

        events();

    }

    function events() {

        $('li').on('click', function( event ) {

            var pot = event.target;
            var stones = parseInt(pot.innerHTML);

            addStoneToNextPot( pot, stones );

            pot.innerHTML = 0;

        });

        $(window).on('load', function() {

        });

    }

    function addStoneToNextPot( el, amount ) {

        remaining = 0;

        for (let i = 0; i < amount; i++) {

            if ( $(el).nextAll().eq(i).is('li') ) {

                var stones = parseInt($(el).nextAll().eq(i).html());
                $(el).nextAll().eq(i).html( stones + 1 );

            } else {

                if (i) { remaining += 1 }

            }

        }

        if ( remaining ) {

            // start again from beginning
            console.log( 'perform addStoneToNextPot() on the first ' + remaining + ' list items');

        }

    }

    function playersTurn() {}

    function captureStones() {}

    function getAnotherGo() {}

    function cantMove() {}

    init();

})();