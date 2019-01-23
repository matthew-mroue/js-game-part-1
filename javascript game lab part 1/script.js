"use strict";

{
let playing = prompt("Do you want to play?")

if (playing === "yes") {
    let userName = prompt("What's your name?");
    let wins = 0;
    let grantHp = 10;
    let userHp = 40;
    let playing = true;
    console.log(`Here we go! ${userName}'s starting health is ${userHp} and the Almighty Grant's health is ${grantHp}!`);
    while (grantHp > 0) {
        console.log(`${userName}'s remaining health: ${userHp -= Math.floor((Math.random()* 2) + 1)}`);
        console.log(`Almighty Grant's remaining health: ${grantHp -= Math.floor((Math.random()* 2) +1)}`);
        
        
        if (grantHp <= 0) {
            console.log(`"Winner: ${userName}! You've defeated the Almighty Grant!"`);
            wins++;
            grantHp = 10;
            break;
        } if (userHp <= 0) {
            console.log("HaHa...the Almighty Grant wins!");
            playing = false;
            break;
        } if (wins === 3) {
            console.log(`${userName} wins: ${wins}`);
            playing = false;
        }
    }
} else if (playing === "no") {
    console.log("Lets play next time, scaredy-cat!");
    }
}