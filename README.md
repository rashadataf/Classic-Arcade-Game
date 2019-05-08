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

Before you start to play you have to know that at the beginning of th game you will have three lifes.
You shouldn't make them reach zero .

After that the player will be in in the middle of the last row as an initial position.
Each time you want to move you need to press on of the arrows:
- "up" to move up.
- "down" to move down.
- "left" to move left.
- "right" to move right.

You will be facing an enemies which are bugs.
If you had collision with any of them you will loose a life, and player position will return to it's initial state.

While you are playing some objects will appear to you as a help.


You have two kinds of objects :
1- Collectable objects
2- Constant Objects

- The Collectable objects : an objects you can collect while you are playing and there are 4 objects you can collect :
*- Gem's : there are 3 type of gem's in the game
	a- Blue gem : if you take this gem 75 points will be added to the score.
	b- Green gem : if you take this gem 50 points will be added to the score.
	c- Orange : if you take this gem 25 points will be added to the score.
*- Star : this object will add 100 points to the score.
*- Key : this object will slow the speed of the enemies so you can move easily.
*- Heart : this object will add a life to your lifes.
- The constant object is **Rocks** this objects will appear while you are playing and you need to turn around them because you can't walk through them.

#### When the game finished

The game will finished when you lose your lifes.
When the lifes become zero the game will stop and a message will appear telling the player about his score and the game is over, and if he want to play again he needs to press replay.
