var snakeArea = {
    height  : 10,
    width   : 10,
    x       : 10,
    y       : 10
}

var food = {
    height  : 10,
    width   : 10,
    x       : 10,
    y       : 10
}

var direction;
var speed = 1000; // lower == faster
var timer;

// score is immediately increased during init()
var score = -1;

function Snake() {}

Snake.prototype.init = function init() {

    console.log('Snake initiated');

    this.createSnakeFood();
    this.drawSnake();
    this.keyCapture();
    this.updateScore();

}

Snake.prototype.movingTimer = function movingTimer() {

    var that = this;

    speed = Math.floor( speed - (speed / 100 * 10) );

    clearInterval(timer);

    // start moving snake on timer
    timer = setInterval( function() {
        that.moveSnake(direction);
        console.log(speed);
    }, speed );

}

Snake.prototype.updateScore = function updateScore() {

    score += 1;
    document.getElementById('score').innerHTML = 'Score: ' + score;

}

Snake.prototype.winOrLoose = function winOrLoose() {

    // has player hit the side in last move?
    if (
           snakeArea.x == 0
        || snakeArea.y == 0
        || snakeArea.x == 290
        || snakeArea.y == 110
        ) {

        alert('Game Over!');
        location.reload();

    }

    // has the snake eaten some food?
    if ( snakeArea.x == food.x && snakeArea.y == food.y ) {

        //speed += 1000;

        this.createSnakeFood();
        this.updateScore();
        this.movingTimer();

    }

}

Snake.prototype.createSnakeFood = function createSnakeFood() {

    var snakePit = document.getElementById('snakeFood');
    var context = snakePit.getContext('2d');
    context.fillStyle = 'red';

    // remove the last piece of food
    context.clearRect(snakeArea.x, snakeArea.y, snakeArea.width, snakeArea.height);

    // e.g. randIntInRange(50) == rand int between 10 and 50
    function randIntInRange(axis) {
        return Math.floor( Math.random() * (axis - 10) ) + 10;
    }

    function roundDown(integer) {
        return Math.floor( integer / 10 ) * 10;
    }

    // x axis - 20; y axis - 20 :: render food away from edges
    food.x = randIntInRange(280);
    food.y = randIntInRange(100);

    food.x = roundDown(food.x);
    food.y = roundDown(food.y);

    // TODO: prevent food being rendered on top of snake
    if ( food.x == snakeArea.x && food.y == snakeArea.y ) {

        console.log('food.x + snakeArea.x && food.y + snakeArea.y are equal');
        this.createSnakeFood(); // is this bad practice?

    }

    context.fillRect( food.x, food.y, food.width, food.height );

}

Snake.prototype.drawSnake = function drawSnake() {

    var snakePit = document.getElementById('snakePit');
    var context = snakePit.getContext('2d');

    context.fillStyle = '#000000';
    context.fillRect(0, 0, 300, 120);
    context.clearRect(snakeArea.x, snakeArea.y, snakeArea.width, snakeArea.height);

    this.winOrLoose();

}

Snake.prototype.keyCapture = function keyCapture() {

    var that = this;
    var keyCode;

    document.addEventListener('keydown', function(event) {

        keyCode = event.keyCode;

        that.moveSnake(keyCode);

    }, false);

}

Snake.prototype.moveSnake = function moveSnake(keyCode) {

    direction = keyCode;

    switch (keyCode) {
        // left
        case 37:
            snakeArea.x = snakeArea.x - 10;
            break;
        // up
        case 38:
            snakeArea.y = snakeArea.y - 10;
            break;
        // right
        case 39:
            snakeArea.x = snakeArea.x + 10;
            break;
        // down
        case 40:
            snakeArea.y = snakeArea.y + 10;
            break;
    }

    this.drawSnake();

}

var sammy = new Snake();

sammy.init();