# Classic Arcade Game Project

Welcome to my Arcade Game Project.
This project is a 2D game with simple pictures.
I have used  Object-Oriented JavaScript programming skills to build this game.

## Instructions

### How to run the game

First of all to run this game you only need to clone the project to your disk or just download it,
and then you need to open **_index.html_** and you are free to play.

### How to play the game

At the start of the game you need to choose one of the five characters by pressing the number that appear above each one .
So to choose the first character from the left you need to press **"1"**.

Before you start to play you have to know that at the beginning of the game you will have three lives.
You shouldn't make them reach zero .

After that the player will be in the middle of the last row as an initial position.
Each time you want to move you need to press on one of the arrows:
- "up" to move up.
- "down" to move down.
- "left" to move left.
- "right" to move right.

You will be facing enemies which are bugs.
If you had collision with any of them you will loose a life, and player position will return to it's initial state.

While you are playing some objects will appear to you as a help.


You have two kinds of objects :
1. Collectable objects
2. Constant Objects

- The Collectable objects : an objects you can collect while you are playing and there are 4 objects you can collect :
1. Gem's : there are 3 type of gem's in the game
	* Blue gem : if you take this gem 75 points will be added to the score.
	* Green gem : if you take this gem 50 points will be added to the score.
	* Orange : if you take this gem 25 points will be added to the score.
2. Star : this object will add 100 points to the score.
3. Key : this object will slow the speed of the enemies so you can move easily.
4. Heart : this object will add a life to your lives.
- The constant object is **Rocks** this objects will appear while you are playing and you need to turn around them because you can't walk through them.

#### When does the game ends

The game will end when you lose your lives.
When the lives become zero the game will stop and a message will appear telling the player about his score and the game is over, and if he want's to play again he needs to press replay.
