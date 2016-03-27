var Core = (function() {

    function init() {

        events();
        lazyLoad();

    }

    function events() {

        $(window).on('load scroll resize', function() {

            var newFontSize = $('#contact').width() / 15;
            $('#contact-email').css('font-size', newFontSize + 'px');

        });

        $('#main-menu a').on('click', function() {

            $('html').addClass('site-open');

        });

        // overlay - to make 3 nav links function as 1 icon
        $('#display_menu').on('click', function() {

            $('html').addClass('site-open');

        });

    }

    function lazyLoad() {

        $('img.lazy').lazyload({
            effect : 'fadeIn'
        });

    }

    init();

})();