# React: Tic Tac Toe app with Minimax Algorith

Learning the Minimax Algorithm, i decided to challenge myself with by creating a React Tic Tac Toe game and implementing it... During this process i learns alot about hooks (useState, useEffect).
The Implementation of the Minimax algorithm can be found in the src/component/BoardComponent.js page 

## When both play optimally
![Screenshot (24)](https://github.com/S-Immanuel01/React-TTT-with-Minimax/assets/142397823/59e9591a-a37c-479c-9ecc-b6a0d2874ff1)

as long as the player 'O' plays optimally i.e to win, the AI player would always win or draw... Ofcourse this is in the case that X plays first.

## An easy win
![Screenshot (25)](https://github.com/S-Immanuel01/React-TTT-with-Minimax/assets/142397823/86503d8e-b977-4fc6-ac18-58043f3aa5ae)

Testing the Algorithm I purposely gave X a chance to win, this was to see wether or not it would take those chances... And it did

## A game of Wits
![Screenshot (27)](https://github.com/S-Immanuel01/React-TTT-with-Minimax/assets/142397823/3a689a82-fdfd-4fae-8cc3-f079124d2f9e)

Feeling like i was going too easy on X, I decided to play with the aim of winning... where most percentage of the game ended with a draw and the rest with X's win expecially whenever I got carried away...

## Conclusion
I really enjoyed making this and playing with an Algorithm, those there are some bugs but like the final game not showing due to the useState not rendering them... But for most games it works fine,
if you want to get beaten by an AI player feel free to download the repo, install all dependencies using `Npm install` or `Npm i` and run it with `Npm start`
