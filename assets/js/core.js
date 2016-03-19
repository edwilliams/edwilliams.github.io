var Core = (function() {

    var height = $(window).height();

    function init() {

        // show front page on start
        showWindow();

        // clicks and scrolls that show / hide the front page
        animationTriggers();

        // menu link click function
        scrollToPages();

        // asdasd
        shrinkMenu(true);

        lazyLoad();

    }

    function showWindow() {

        if (window.innerWidth > 800) {
            initialized = true;
        } else {
            initialized = false;
            shrinkMenu(true);
        };

        // $('#main-menu').removeClass('menu_icon');
        // hide everything but the home page
        $('#inside-pages').css('display', 'none');

        // display as block before transisiotns below
        $('#new-home').css('display', 'block');

        // toggle title/menu/strapline state
        $('#window_info').removeClass('opened');
        $('#window_info').css('border-right', 'none');

        $('#social_media_container').css('display', 'none');

        setTimeout(function() {

            $('#window_left').css({
                'border-top-width'    : height + 'px',
                'left'                : '-' + (height/2 - 25) + 'px'
            });

            $('#window_right').css({
                'border-left-width'   : height + 'px',
                'border-bottom-width' : height + 'px',
                'margin-left'         : '-' + (height/2 - 25) + 'px',
                'left'                : '50%'
            });

            $('html').css('overflow', 'hidden');

        }, 500);

    }

    function hideWindow() {

        // $('#main-menu').addClass('menu_icon');

        $('#window_left').css('left', '-100%');
        $('#window_right').css('left', '130%');
        $('#window_info').addClass('opened');

        $('#inside-pages').css('display', 'block');

        $('html').css('overflow', 'auto');

        $('#social_media_container').css('display', 'inline-block');

        setTimeout(function() {
            $('#new-home').css('display', 'none');
            $('#window_info').css('border-right', '1px solid #EEE2E2');
        }, 1000);

        // resize email address
        fitText();

    }

    function animationTriggers() {

        $('#main-menu a').on('click', function() {
            hideWindow();
        });

        $('#main-menu.mobile_icon a').on('click', function() {
            showWindow();
        });

        // overlay - to make 3 nav links function as 1 icon
        $('#display_menu').on('click', function() {

            shrinkMenu(false);

            // $(this).css('display', 'none');
            // $('#main-menu').removeClass('menu_icon');
        })

        window.onscroll = function() {

            if (pageYOffset <= 0) {
                // showWindow();

                if (window.innerWidth > 800) {
                    shrinkMenu(true);
                }

            };

        };

        $(window).on('resize', function() {

            // change to when finished resizing?
            fitText();

        });

    }

    function scrollToPages() {

        $('.main-menu-links a').on('click', function(event){

            var destination = $(this).attr('href');

            if (initialized == true) {

                $('html,body').delay(1000).animate({scrollTop: $(destination).offset().top}, 800);
                initialized = false;
                return false;

            } else {

                $('html,body').delay(0).animate({scrollTop: $(destination).offset().top}, 800);
                return false;

            };

        });

    }

    function shrinkMenu(shrink) {

        if (shrink) {

            $('#main-menu').addClass('menu_icon');
            $('#display_menu').css('display', 'block');

        } else {

            $('#main-menu').removeClass('menu_icon');
            $('#display_menu').css('display', 'none');

        }

    }

    function fitText() {

        var contactContainer = $('#contact'),
            contactEmail = $('#contact_email'),
            contactContainer_width = contactContainer.width(),
            newFontSize = contactContainer_width / 15;

        contactEmail.css('font-size', newFontSize + 'px');

    }

    function lazyLoad() {

        $('img.lazy').lazyload({
            effect : 'fadeIn'
        });

    }

    init();

})();