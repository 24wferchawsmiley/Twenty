//Game Description
alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \nYou will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'`);

//Variables
var comp = 0;
var ctotal = 0; 
var play = 0; 
var ptotal = 0;
var cwin = 0;
var pwin = 0;
var ans = "y";
var replay = "";
//

//program
do{
    ctotal = 0;
    ptotal = 0;
    do {
        comp = Math.floor(Math.random() * 10);
        ctotal = ctotal + comp;

        alert(`The Computer's new number is '${comp}. \nThe Computer's total is now '${ctotal}''`)
        
    }while (ctotal < 16);

if (ctotal > 20) {
    alert("Computer Lost")
    pwin++
}else {
    alert("Players Turn");

    do {
        play = Math.floor(Math.random() * 10);
        ptotal = ptotal + play;

        alert(`Your new number is '${play}'. \nThe Players total is now '${ptotal}'`);
           
        if (ptotal > 20) {
            alert("Player Lost");
            cwin++
            break;
        }
            
        ans = prompt("Do you want another number? 'y' for yes, 'n' for no.")
        
    }while (ans == "y");
}



    

if (ans == "n") {
    alert(`You stopped at ${ptotal}`)
}
// Win Checker
if ((ctotal > ptotal) && (ctotal <= 20)){
    alert(`You Lost... You got ${ptotal} and the Computer got ${ctotal}`);
    cwin++
}else if ((ptotal > ctotal) && (ptotal <= 20)) {
    alert(`You win! You got ${ptotal} and the computer got ${ctotal}`);
    pwin++
}

replay = prompt(`The current score is Player '${pwin}' : Computer '${cwin}'. \nPlay Again? 'y' for yes, 'n' for no"`); // Score & Relay Prompt


    console.log(`Player '${pwin}' : Computer '${cwin}'`); // Score Log
}while (replay == "y"); // Replay Check