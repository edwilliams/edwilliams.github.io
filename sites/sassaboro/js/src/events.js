function events() {

    $('.nav-main').on('click', function(e) {
        $('html, body').animate({ scrollTop: $('#' + e.target.dataset.id).offset().top }, 1000)
    })

    $(window).on('scroll', function(e) {
        if ( window.pageYOffset > 82 ) {
            $('#header-fixed').css('top', 0)
        } else {
            $('#header-fixed').css('top', '-65px')
        }

    })

    $(window).on('load', function(e) {
        $('#header-fixed').html( $('#header-inner').html() )
    })

}

export { events }