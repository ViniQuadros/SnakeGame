<<<<<<< HEAD
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

=======
//Main Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Initial Variables
>>>>>>> c5f59b9 (Add sound effects)
let dx = 10;
let dy = 0;
let foodX, foodY;
let score = 0;
let isChangingDirection = false;
<<<<<<< HEAD
=======
const pickUpSound = new Audio('sound/pickUpFood.wav');
const deathSound = new Audio('sound/death.wav');
>>>>>>> c5f59b9 (Add sound effects)

//Array of coordinates for the initial snake parts
let snake = [{x: 150, y: 150}, 
             {x: 140, y: 150}, 
             {x: 130, y: 150}, 
             {x: 120, y: 150}, 
             {x: 110, y: 150}];

<<<<<<< HEAD
=======
//Start game by pressing the play button
>>>>>>> c5f59b9 (Add sound effects)
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", function(){
    playButton.style.display = "none";
    main();
    createFood();
});
<<<<<<< HEAD
document.addEventListener("keydown", changeDirection);

=======
//Check for keypresses
document.addEventListener("keydown", changeDirection);

//Draws each part of the snake
>>>>>>> c5f59b9 (Add sound effects)
function drawSnakePart(snakePart){
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

<<<<<<< HEAD
=======
//Draws full snake
>>>>>>> c5f59b9 (Add sound effects)
function drawSnake(){
    snake.forEach(drawSnakePart);
}

function moveSnake(){
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    //Add new element to the front of the snake array, the head, in this case
    snake.unshift(head);

    const ateFood = snake[0].x === foodX && snake[0].y === foodY;
    if(ateFood){
<<<<<<< HEAD
=======
        pickUpSound.play();
>>>>>>> c5f59b9 (Add sound effects)
        score += 10;
        document.getElementById("score").innerHTML = "Score: " + score;
        createFood();
    }
    else{
        snake.pop(); //Remove last element, the tail
    }
}

function changeDirection(event){
<<<<<<< HEAD
=======
    //Key values for every specific arrow key
>>>>>>> c5f59b9 (Add sound effects)
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if(isChangingDirection) return;
    isChangingDirection = true;

    const keyPressed = event.keyCode;
    const up = dy === -10;
    const down = dy === 10;
    const left = dx === -10;
    const right = dx === 10;

    if(keyPressed === LEFT_KEY && !right){
        dx = -10;
        dy = 0;
    }
    if(keyPressed === RIGHT_KEY && !left){
        dx = 10;
        dy = 0;
    }
    if(keyPressed === UP_KEY && !down){
        dx = 0;
        dy = -10;
    }
    if(keyPressed === DOWN_KEY && !up){
        dx = 0;
        dy = 10;
    }
}

function clearCanvas(){
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function random(min, max){
    return Math.floor(Math.random() * ((max - min) / 10)) * 10 + min;
}

function createFood(){
    foodX = random(0, canvas.width - 10);
    foodY = random(0, canvas.height - 10);

    snake.forEach(function isFoodOnSnake(part){
        const foodIsOnSnake = part.x === foodX && part.y === foodY;
        if(foodIsOnSnake){
            createFood();
        }
    })
}

function drawFood(){
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function gameEnd(){
    for(let i = 4; i < snake.length; i++){
        const collision = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if(collision)
            return true;
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > canvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > canvas.height - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

<<<<<<< HEAD
function main(){
    if(gameEnd()){
=======
//Main function that will run the game by calling other functions
function main(){
    if(gameEnd()){
        deathSound.play();
>>>>>>> c5f59b9 (Add sound effects)
        document.getElementById("gameOver").style.display = "block";
        return
    };

    //Move snake with a timer
    setTimeout(function onTick() {
        isChangingDirection = false;

        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();

        main();
    }, 300)
}