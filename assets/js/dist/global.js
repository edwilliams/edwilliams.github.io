var global = (function(){

    function init() {

        events();
        lazyLoad();

    }

    function events() {

        $(window).on('load', function() {
            setTimeout(function() {
                window.scrollTo(0,0);
            }, 0);
        });

        $('.name, .title').on('click', function() {
            $('html').removeClass('closed');
        })

    }

    function lazyLoad() {

        $('img.lazy').lazyload({
            effect : 'fadeIn'
        });

    }

    init();

})();