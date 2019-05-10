// variable to hold the value of the score
let score = 0;
// variable to hold the number of lifes player has
let lifes = 3;
// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // the x coordinate for the enemy
    this.x = 1;
    // choose the y coordinate of the enemy randomly
    let rnd = Math.floor(Math.random() * 230);
    if (rnd <= 60) {
        rnd = 60;
    }
    else if (rnd > 60 && rnd <= 145) {
        rnd = 145;
    }
    else {
        rnd = 230;
    }
    this.y = rnd;
    // variable to hold the speed of the enemy
    this.speed = Math.floor(Math.random() * 3);
    // make an array of all possible enemies
    let enemySprites = ['images/enemy-bug.png', 'images/enemy-dora.png', 'images/enemy-simba.png',
        'images/enemy-snail.png'];
    // make variable to hold random number
    let ranSprite = Math.floor(Math.random() * 4);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // choose enemy randomly
    this.sprite = enemySprites[ranSprite];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed) * (dt + 1);
    if (this.x > 404) {
        // make an array of all possible enemies
        let enemySprites = ['images/enemy-bug.png', 'images/enemy-dora.png', 'images/enemy-simba.png',
            'images/enemy-snail.png'];
        // make variable to hold random number
        let ranSprite = Math.floor(Math.random() * 4);
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        // choose enemy randomly
        this.sprite = enemySprites[ranSprite];
        this.x = 2;
        let rnd = Math.floor(Math.random() * 230);
        if (rnd <= 60) {
            rnd = 60;
        }
        else if (rnd > 60 && rnd <= 145) {
            rnd = 145;
        }
        else {
            rnd = 230;
        }
        this.y = rnd;
    }
    // make the enemy check for the collision
    checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function () {
    // the initial x and y for the player
    this.x = 204;
    this.y = 400;
    // the sprite for the player to help drawing it
    this.sprite = 'images/char-cat-girl.png';
};
// update the player position function
// it will keep the player inside the board
Player.prototype.update = function () {
    if (this.y <= 0) {
        this.y = 400;
        // if the player reach the water it is a win state
        window.alert("You have won...");
        winState();
    }
    if (this.y >= 400) {
        this.y = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x > 408) {
        this.x = 408;
    }
};
// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// function to make actions when pressing keys
// each key will bring a string with it
// this string called direction
Player.prototype.handleInput = function (direction) {
    // if the pressed key is up
    if (direction === "up") {
        // check if there is a rock
        // if there is no rock the player will move up
        if (!(((player.x === rock1.x) && (player.y === (rock1.y + 85))) || ((player.x === rock2.x) && (player.y === (rock2.y + 85))))) {
            this.y -= 85;
        }
    }
    // check if the pressed key is down
    else if (direction === "down") {
        // if there is no rock below the player it will move down
        if (!(((player.x === rock1.x) && (player.y === (rock1.y - 85))) || ((player.x === rock2.x) && (player.y === (rock2.y - 85))))) {
            this.y += 85;
        }
    }
    // if pressed key is left
    else if (direction === "left") {
        // if there is no rock on the left of the player
        if (!(((player.x === (rock1.x + 102)) && (player.y === rock1.y)) || ((player.x === (rock2.x + 102)) && (player.y === rock2.y)))) {
            this.x -= 102;
        }
    }
    // if pressed key is right
    else if (direction === "right") {
        if (!(((player.x === (rock1.x - 102)) && (player.y === rock1.y)) || ((player.x === (rock2.x - 102)) && (player.y === rock2.y)))) {
            this.x += 102;
        }
    }
    // if pressed key is number one
    else if (direction === "one") {
        player.sprite = 'images/char-boy.png';
        startFunction();
    }
    // if pressed key is number two
    else if (direction === "two") {
        player.sprite = 'images/char-cat-girl.png';
        startFunction();
    }
    // if pressed key is number three
    else if (direction === "three") {
        player.sprite = 'images/char-horn-girl.png';
        startFunction();
    }
    // if pressed key is number four
    else if (direction === "four") {
        player.sprite = 'images/char-pink-girl.png';
        startFunction();
    }
    // if pressed key is number five
    else if (direction === "five") {
        player.sprite = 'images/char-princess-girl.png';
        startFunction();
    }
};
// the gem class to represent the gems while playing
// there are three gems :
// 1-blue gem
// 2-green gem
// 3-orange gem
let Gem = function () {
    // the initial x and y for the gem
    this.x = 0;
    this.y = 0;
    // boolean variable to determine if there is already a gem
    this.isGem = false;
    // array of gems relative paths to choose from them randomly
    let sprites = ['images/Gem Blue.png', 'images/Gem Green.png', 'images/Gem Orange.png'];
    // ranSprite is a variable will hold random value
    let ranSprite = Math.floor(Math.random() * 3);
    // assign the chosen value to the sprite
    this.sprite = sprites[ranSprite];
};
// render function to draw the gem
Gem.prototype.render = function () {
    // check if the gem is already exist
    if (!this.isGem) {
        // choose position
        let position = choosePosition();
        // assign chosen position to the coordinates of gem
        this.x = position.x;
        this.y = position.y;
        // make the isGem equal to true to inicate that gem is exist 
        this.isGem = true;
        // choose the gem randomly
        let sprites = ['images/Gem Blue.png', 'images/Gem Green.png', 'images/Gem Orange.png'];
        let ranSprite = Math.floor(Math.random() * 3);
        this.sprite = sprites[ranSprite];
    }
    // draw the gem
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// the Rock class will represent rock
let Rock = function () {
    // coordinates to the rock
    this.x = 0;
    this.y = 0;
    // variable to indicate if ther is a rock
    this.isRock = false;
    // variable to help drawing the rock
    this.sprite = 'images/Rock.png';
};
// render function to draw the rock
Rock.prototype.render = function () {
    // check if the rock is already exist
    if (!this.isRock) {
        // choose position
        let position = choosePosition();
        // assign chosen position to the coordinates of rock
        this.x = position.x;
        this.y = position.y;
        // make the isRock equal to true to inicate that rock is exist
        this.isRock = true;
    }
    // draw the rock
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// the Star class will represent the star
let Star = function () {
    // initial coordinates
    this.x = 0;
    this.y = 0;
    // variable to indicate if the star already exists
    this.isStar = false;
    // sprite to help drawing the star
    this.sprite = 'images/Star.png';
};
// the render function to draw the star
Star.prototype.render = function () {
    // check if there is a star
    if (!this.isStar) {
        // choose position and assign it to x and y
        let position = choosePosition();
        this.x = position.x;
        this.y = position.y;
        // make the star exist
        this.isStar = true;
    }
    // draw the star
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Key class to represent the key
let Key = function () {
    // initial x and y
    this.x = 0;
    this.y = 0;
    // no key at start
    this.isKey = false;
    // sprite of the key
    this.sprite = 'images/Key.png';
};
// render function to draw the key
Key.prototype.render = function () {
    // check if there is a key
    if (!this.isKey) {
        // choose position and assign it to x and y
        let position = choosePosition();
        this.x = position.x;
        this.y = position.y;
        // the key is exist
        this.isKey = true;
    }
    // draw the key
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Heart class to represent the heart
let Heart = function () {
    // initial x and y
    this.x = 0;
    this.y = 0;
    // initial state no heart
    this.isHeart = false;
    // sprite of the heart
    this.sprite = 'images/Heart.png';
};
// render function to draw the heart
Heart.prototype.render = function () {
    // check if there is a heart
    if (!this.isHeart) {
        // choose position and assign it to x and y
        let position = choosePosition();
        this.x = position.x;
        this.y = position.y;
        // make heart exist
        this.isHeart = true;
    }
    // draw the heart
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// an array that will hold position objects
// each object have x and y
let positions = [];
// the function that will generate the positions
// and push them to the array
function initPositions() {
    positions = [];
    let position1 = {
        x: 0,
        y: 60
    };
    positions.push(position1);
    let position2 = {
        x: 0,
        y: 145
    };
    positions.push(position2);
    let position3 = {
        x: 0,
        y: 230
    };
    positions.push(position3);
    let position4 = {
        x: 102,
        y: 60
    };
    positions.push(position4);
    let position5 = {
        x: 102,
        y: 145
    };
    positions.push(position5);
    let position6 = {
        x: 102,
        y: 230
    };
    positions.push(position6);
    let position7 = {
        x: 204,
        y: 60
    };
    positions.push(position7);
    let position8 = {
        x: 204,
        y: 145
    };
    positions.push(position8);
    let position9 = {
        x: 204,
        y: 230
    };
    positions.push(position9);
    let position10 = {
        x: 306,
        y: 60
    };
    positions.push(position10);
    let position11 = {
        x: 306,
        y: 145
    };
    positions.push(position11);
    let position12 = {
        x: 306,
        y: 230
    };
    positions.push(position12);
    let position13 = {
        x: 408,
        y: 60
    };
    positions.push(position13);
    let position14 = {
        x: 408,
        y: 145
    };
    positions.push(position14);
    let position15 = {
        x: 408,
        y: 230
    };
    positions.push(position15);
};
// a function to choose position randomly and return it
let choosePosition = function () {
    // variable to hold random value
    let rnd = Math.floor(Math.random() * positions.length);
    // variable to hold chosen value
    let position = positions[rnd]
    // delete the chosen value from the array
    // to ensure that no object will choose it again
    positions.splice(rnd, 1);
    // return the chosen position
    return position;
};
// in case of winning
// make all objects doesn't exist
// reset the speed of the enemies
function winState() {
    allRocks.forEach(function (rock) {
        rock.isRock = false;
    });
    star.isStar = false;
    gem.isGem = false;
    key.isKey = false;
    heart.isHeart = false;
    allEnemies.forEach(function (enemy) {
        enemy.speed = Math.floor(Math.random() * 3);
    });
    // initiate new positions
    initPositions();
};
// function to check if there any collision has happened
// between player and each other object
// and decide what to do
function checkCollision() {
    let range = 70;
    if (enemy1.x < player.x + range &&
        enemy1.x + range > player.x &&
        enemy1.y < player.y + range &&
        enemy1.y + range > player.y) {
        window.alert('Ooops you have collison with an enemy...')
        player.x = 204;
        player.y = 400;
        score = (score > 10) ? (score - 10) : 0;
        lifes -= 1;
        if (lifes === 0) {
            cancelAnimationFrame(handle);
        }
    }
    else if (enemy2.x < player.x + range &&
        enemy2.x + range > player.x &&
        enemy2.y < player.y + range &&
        enemy2.y + range > player.y) {
        window.alert('Ooops you have collison with an enemy...')
        player.x = 204;
        player.y = 400;
        score = (score > 10) ? (score - 10) : 0;
        lifes -= 1;
        if (lifes === 0) {
            cancelAnimationFrame(handle);
        }
    }
    else if (enemy3.x < player.x + range &&
        enemy3.x + range > player.x &&
        enemy3.y < player.y + range &&
        enemy3.y + range > player.y) {
        window.alert('Ooops you have collison with an enemy...')
        player.x = 204;
        player.y = 400;
        score = (score > 10) ? (score - 10) : 0;
        lifes -= 1;
        if (lifes === 0) {
            cancelAnimationFrame(handle);
        }
    }
    if (player.x === star.x && player.y === star.y) {
        score += 100;
        star.x = -100;
    }
    if (player.x === gem.x && player.y === gem.y) {
        if (gem.sprite === 'images/Gem Orange.png') {
            gem.x = -100;
            score += 25;
        }
        else if (gem.sprite === 'images/Gem Green.png') {
            gem.x = -100;
            score += 50;
        }
        else if (gem.sprite === 'images/Gem Blue.png') {
            gem.x = -100;
            score += 75;
        }
    }
    if (player.x === key.x && player.y === key.y) {
        allEnemies.forEach(function (enemy) {
            enemy.speed = 0;
            key.x = -100;
        });
    }
    if (player.x === heart.x && player.y === heart.y) {
        lifes += 1;
        heart.x = -100;
    }
};
// a function to draw some text on the start of the game
// and draw charecters
function createStart() {
    // the font properties
    ctx.font = "30px arial";
    // the color of the font
    ctx.fillStyle = "#632306";
    // draw the text in the (x=100,y=200) position
    ctx.fillText("please choose a player", 100, 200);
    // draw the text in the (x=70,y=250) position
    ctx.fillText("by pressing the equal number", 70, 250);
    // draw 1,2,3,4,5 on top of each player
    ctx.fillText("1", 40, 430);
    ctx.fillText("2", 140, 430);
    ctx.fillText("3", 240, 430);
    ctx.fillText("4", 340, 430);
    ctx.fillText("5", 440, 430);
    let players = ['images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'];
    let firstPlayer = new Player();
    let secondPlayer = new Player();
    let thirdPlayer = new Player();
    let fourthPlayer = new Player();
    let fifthPlayer = new Player();
    // draw characters
    firstPlayer.sprite = players[0];
    firstPlayer.x = 1;
    firstPlayer.render();
    secondPlayer.sprite = players[1];
    secondPlayer.x = 100;
    secondPlayer.render();
    thirdPlayer.sprite = players[2];
    thirdPlayer.x = 200;
    thirdPlayer.render();
    fourthPlayer.sprite = players[3];
    fourthPlayer.x = 300;
    fourthPlayer.render();
    fifthPlayer.sprite = players[4];
    fifthPlayer.x = 400;
    fifthPlayer.render();
};
// function to start the game
function start() {
    cancelAnimationFrame(handle);
    resetState();
    createStart();
    // create div with 'container' class before canvas 
    document.body.insertAdjacentHTML('beforebegin', '<div class="container"></div>');
    // call the createControls() after 100 ms
    setTimeout(createControls(), 100);
};
// function to draw some control elements
// score span
// life span
// replay button
function createControls() {
    // select the div with the 'container' class
    let div = document.querySelector('.container');
    // create span to format the apperance of controls
    let emptySpan = document.createElement('span');
    // add 'col-3' class to the created span
    emptySpan.classList.add('col-3');
    // add the created span to the div
    div.append(emptySpan);
    // create a new span that will hold the score
    let span = document.createElement('span');
    // write some text indicate to score inside the span
    span.textContent = "Score: " + score;
    // add 'col-3' and 'score' classes to created span
    span.classList.add('col-3');
    span.classList.add('score');
    // add the span to the div
    div.append(span);
    // create span for lifes
    let lifeSpan = document.createElement('span');
    // set the text of span
    lifeSpan.textContent = "Lifes: " + lifes;
    // add classes to it
    lifeSpan.classList.add('col-1');
    lifeSpan.classList.add('lifes');
    // add it to div
    div.append(lifeSpan);
    // create span for replay button
    let replay = document.createElement('span');
    // make it appear like the replay
    replay.textContent = "\u27f2";
    // add classes to replay
    replay.classList.add('col-1');
    replay.classList.add('clickable');
    // add replay to div
    div.append(replay);
    // determine what happend when clicking on replay
    replay.addEventListener('click', function () {
        cancelAnimationFrame(handle);
        setTimeout(function () {
            resetState();
            createStart();
        }, 150);
    });
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// first enemy
let enemy1 = new Enemy();
// second enemy
let enemy2 = new Enemy();
// third enemy
let enemy3 = new Enemy();
// all the enemies in an array
let allEnemies = [enemy1, enemy2, enemy3];
// the player
let player = new Player();
// the gem
let gem = new Gem();
// first rock
let rock1 = new Rock();
// second rock
let rock2 = new Rock();
// all of the rocks
let allRocks = [rock1, rock2];
// the star
let star = new Star();
// the key
let key = new Key();
// the heart
let heart = new Heart();
// call the initPositions function to create positions
initPositions();
setTimeout(start, 75);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        49: 'one',
        50: 'two',
        51: 'three',
        52: 'four',
        53: 'five'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
// check if the player has lost his lifes and 
// draw some text indicate that game over
// and tell him the scor he achieve
setInterval(function () {
    if (lifes === 0) {
        let phrase = "Your Score is " + score;
        cancelAnimationFrame(handle);
        resetState();
        ctx.fillText(phrase, 100, 180);
        ctx.fillText("Game Over press replay to play again", 0, 270);
    }
}, 10);