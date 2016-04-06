$('.helper').on('click', function() {

    $(this).toggleClass('bg-black');
	// var number = this.innerHTML;

	// $('.helper').each(function(i, el) {
	// 	if ( el.innerHTML == number ) {
	// 		el.classList.add('bg-black');
	// 	}
	// });

});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

$('body').on('keyup', function(event){
    var $el = $(event.target);
    if ( isNumeric( $el.html() ) ) {
        console.log( $el.html() );
        $el.parent().find('[data-num="' + $el.html() + '"]').addClass('bg-black');
    }
});