var global = (function(){

    function init() {

        events();
        lazyLoad();

    }

    function events() {

    }

    function lazyLoad() {

        $('img.lazy').lazyload({
            effect : 'fadeIn'
        });

    }

    init();

})();