
const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;  // use Y-axis
const col = 10;  // use X-axis
var field =[[]];
let currCharRow = 0;
let currCharCol = 0;

function generateField(){

    for (let y=0; y < row ; y++){

        field[y] = [];

        for (let x=0; x < col; x++){  
                
            let prob = (Math.floor(Math.random() * 10));

            if (prob <1){

                field[y][x] = hole; 
            }
            else {
                field[y][x] = fieldCharacter
            }
        }           
    }

    field[currCharRow][currCharCol] = pathCharacter;
      
/* Original did below to fix the random Hole and Hat. This created more variables and the number of Holes is fixed. The probability method above use the existing variable 

    for (let i=0; i < 10; i++){    
        let yHole = Math.floor(Math.random()*10);
        let xHole = Math.floor(Math.random()*10);
        field[yHole][xHole] = hole;        
    }*/

    let yHat = Math.floor(Math.random()*10);
    let xHat = Math.floor(Math.random()*10);
    field[yHat][xHat] = hat;        
    
} 
      

function print() {

clear();

const displayString = field.map(row=>{
    return row.join('');
}).join('\n');

console.log(displayString);

}


function askQuestion() {

    //original position field[0][0], press D - [0+1][0]. press U - [0-1][0], press R - [0][0+1], press L - [0][0-1]  
    //Initially using If-Else and created numberous variable and unable to move the character as could not accumalte the x and y position. The switch better choice as only 1 decision and only 4 arguement
    
    const getInput = prompt(`Which way : `).toUpperCase();
    
    switch(getInput) {
        case "U" :
            // Move Up
            currCharRow--;
        break;

        case "D" :
            // Move Down
            currCharRow++;
        break;

        case "R" :
            // Move Right - an example
            currCharCol++;
        break;

        case "L" :
            // Move Left
            currCharCol--;
        break;

        default:
            console.log ("Enter (U, D, I or R.) please key again" );
        break;
    }
    
    console.log("Your position is at row " + currCharRow + " and col " + currCharCol );
}


function startGame(){

    let isPlaying = true;

    while (isPlaying){

        print();
        askQuestion();

        if (field[currCharRow][currCharCol] == hole){

            console.log ("Sorry, you fell down a hole!");
            isPlaying = false;
        } 
        else if (field[currCharRow][currCharCol] == hat){

            console.log ("Congrats, you found your hat!");
            isPlaying = false;
        }
        else if (currCharCol < 0 || currCharCol > 9 || currCharRow < 0 || currCharRow > 9) {

            console.log ("Out of bounds - Game End");
            isPlaying = false;
        }
        
        else {

           field[currCharRow][currCharCol] = pathCharacter;
        }      
    }
}  

generateField();
startGame();


// If position of hat = character,  OR position of Hole = character break the while loop

/*if (field[yi][xi] = field[yHole][xHole} {
    console.log (`“Sorry, you fell down a hole!”`);
    isPlaying = false;}
}

else if (field[yi][xi] = field[yHat][xHat]){
    console.log (`“Congrats, you found your hat!” `);
    isPlaying = false;
} 

else if ( yi < 0 || xi < 0) {
    console.log (`“Out of bounds - Game End" `);
    isPlaying = false;
}

else { console.log ("Please continue")}*/




