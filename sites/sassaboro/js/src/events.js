function events() {

    $('.nav-main').on('click', function(e) {
        $('html, body').animate({ scrollTop: $('#' + e.target.dataset.id).offset().top }, 1000)
    })

}

export { events }