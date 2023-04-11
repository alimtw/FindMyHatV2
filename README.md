# FindMyHatV2
JavaScript Re-submission 
Reflection After Re-submission

A) Use random and fix the number of holes that created too many variable. The probability method reduces variables and flexibility of the number of holes

B) Use If-else method is confusing for comparison. The switch method is better (Forgotten about Switch method )

C) Ability to have the concept flow for movement and hitting the hole and hat and game over. However, unable to write it in a systematic JS. Created too many variables for if-else, unable to match and add up the position of x and y. Need to have a clear mind and do step by step

D) The Out-of-Bound works well for the col when the variable is negative or more than 9. However, for row it does not executive despite having the same comparison statement and logic. Need further advise on this


Your position is at row -1 and col 0
Your position is at row 10 and col 8
C:\Users\WIN10\Desktop\findMyHat\main.js:111
        if (field[currCharRow][currCharCol] == hole){
                              ^
TypeError: Cannot read properties of undefined (reading '0')
