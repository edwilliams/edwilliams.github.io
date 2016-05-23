var Global = (function() {

    function init() {

        events();
        controller();

    }

    function events() {

        document.addEventListener('click', function(event) {
            var el = event.target;
            if ( el.classList.contains('btn', 'submit') ) {
                submit();
            }
        }, false);

    }

    function controller() {

        var app = angular.module('birthdayCardApp', []);
        app.controller('controller', function($scope) {

            $scope.title = "Happy Birthday!";

            $scope.placeholderName = "Name";
            $scope.placeholderEmail = "Email";
            $scope.placeholderBirthday = "Birthday";
            $scope.placeholderMessage = "Message";

            $scope.placeholderSubmit = "Submit";

        });

    }

    function submit() {
        var json = queryStringToJSON( serialize( document.querySelector('form') ) );
        alert( JSON.stringify(json) );
    }

    init();

})();
