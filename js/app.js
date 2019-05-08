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
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed) * (dt + 1);
    if (this.x > 404) {
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function() {
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
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// call the initPositions function to create positions
initPositions();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
