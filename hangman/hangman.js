var Hangman = (function() {

    var values = {
        gameAnswer: [],
        gameAlphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        letterChoice: '',
        gameChances: 0,
    };

    var el = {};

    function init() {

        renderRandomWord(function( data ) {

            var json = JSON.parse(data),
                word = json.word.toLowerCase().split('');

            values.gameAnswer = word;

            // cache all elements
            cacheDOM();

            // loop through all letters in the alphabet
            renderAlphabet();

            // render empty span's to the page, each with a class
            // name that correspondes with the answer
            renderAnswerLetterSpans();

            // assign a listener to each letter in the alphabet
            // onclick, redirect to answerCorrect() or answerInCorrect()
            chooseAnswer();

        });

    }

    function cacheDOM() {

        el.container         = document.getElementById('container');
        el.title             = document.getElementById('title');
        el.alphabetContainer = document.getElementById('alphabet_container');
        el.alphabetTitle     = document.getElementById('answer_title');
        el.alphabetLetter    = document.getElementsByClassName('alphabet_letter');
        el.answerContainer   = document.getElementById('answer_container');
        el.hangmanGraphic    = document.getElementById('hangman_graphic');
        el.answerLetters     = document.getElementsByClassName('game_answer_letter');

    }

    function renderAlphabet() {

        // since letters get removed, reset the container before re-rendering
        el.alphabetContainer.innerHTML = "";

        for (var i=0; i<values.gameAlphabet.length; i++) {

            el.alphabetContainer.innerHTML += '<a href="#" class="alphabet_letter letter_' + values.gameAlphabet[i] + '">' + values.gameAlphabet[i] + '</a>';

        }

    }

    function chooseAnswer() {

        var assignListenerToAllLetters = function() {

            var currentLetter = this.innerHTML;

            // set the global variable values.letterChoice to the current choice
            values.letterChoice = currentLetter;

            // does the chosen letter feature in the answer?
            if (values.gameAnswer.indexOf(currentLetter) != -1) {
                answerCorrect();
            } else {
                answerInCorrect();
            }

            removeLetter();

        };

        // addEventListener only works on one single element at a time, hence the loop
        for (var i = 0; i < el.alphabetLetter.length; i++) {
            el.alphabetLetter[i].addEventListener('click', assignListenerToAllLetters, false);
        }

    }

    function renderAnswerLetterSpans() {

        el.answerContainer.innerHTML = "";

        var answerContainerHTML = '';

        for (var i=0; i<values.gameAnswer.length; i++) {

            answerContainerHTML += '<span class="game_answer_letter letter_' + values.gameAnswer[i] + '"></span>';

            el.answerContainer.innerHTML = answerContainerHTML;

        }

    }

    function answerCorrect() {

        // el.answerLetters = the correct letters
        var correctLetterClass = 'letter_' + values.letterChoice;

        // loop through all the span containers for the correct elements
        for (var i = 0; i < el.answerLetters.length; i++) {

            // is the container has the class that corresponds with the letterChoice
            if ( el.answerLetters[i].classList.contains(correctLetterClass) ) {

                // put the correct letter inside this span
                el.answerLetters[i].innerHTML = values.letterChoice;

            }

        }

        var unansweredLetters = [];

        // loop through each of the answered letters
        for (var i = 0; i < el.answerLetters.length; i++) {

            // for every empty one...
            if (el.answerLetters[i].innerHTML === '') {

                // push a number to an array
                unansweredLetters.push(1);

            }

        }

        // when that array contains nothing i.e. all answerLetters contain a letter
        if (unansweredLetters.length === 0) {

            alert('Horray, you have won!');
            location.reload();

        }

    }

    function answerInCorrect() {

        // values.gameChances is set to 0; there are 11 chances in the game
        // for each wrong answer, increase values.gameChances
        if ( values.gameChances <= 11 ) {

            values.gameChances++;

            el.hangmanGraphic.innerHTML = '<img src="img/' + values.gameChances + '.png">';

        }

        // when game has been lost...
        if ( values.gameChances >= 11 ) {

            gameLost();

        }

    }

    function gameLost() {

        el.container.style.backgroundColor = 'red';
        el.container.style.pointerEvents = 'none';

        el.alphabetTitle.innerHTML = 'The answer was...';

        el.title.innerHTML = 'HANGMAN: Sorry, you have lost. <a href="#" onclick="location.reload();" style="pointer-events: all;">PLAY AGAIN</a>';

        console.log(el.alphabetLetter);

        // loop through all the span containers for the answer letters
        for (var i = 0; i < el.answerLetters.length; i++) {

            var letterFromClass = el.answerLetters[i].classList[1].substring(8, 7);

            el.answerLetters[i].innerHTML = letterFromClass;

        }

    }

    function removeLetter() {

        // index of values.letterChoice, or -1
        var index = values.gameAlphabet.indexOf(values.letterChoice);

        // if the current choice is an index of the remaining letters in the alphabet...
        if (index > -1) {

            values.gameAlphabet.splice(index, 1);

        }

        // render alphabet
        renderAlphabet();

        // reassign event delegation
        chooseAnswer();

    }

    function renderRandomWord( callback ) {

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {

            if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {

                var data = xmlhttp.responseText;
                callback( data );

            }

        };

        xmlhttp.open('GET', 'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=7&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5' ,true);
        xmlhttp.send();

    }

    init();

})();