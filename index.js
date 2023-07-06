//document.getdocumentbyid("count-el").innertext=5;
/* 
let count=0;
console.log(count) */

// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console


 // 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

/* let myAge = 35
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge) */




// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70


/* let bonusPoints=50
bonusPoints=bonusPoints+100
console.log(bonusPoints);
bonusPoints=bonusPoints-25
console.log(bonusPoints);
bonusPoints=bonusPoints+70
console.log(bonusPoints); */
/* 
function increment()
{
    console.log("the button is clicked")

}     */



/* function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()
 */




/* let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLapTime() */
/* 
let lap=0

function lapss()
{
    lap=lap+1
}

lapss();
lapss();
lapss();
lapss();

console.log(lap) */



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl=document.getElementById("save-el") 
let countEl=document.getElementById("count-el")
console.log(saveEl)

let count=0


function increment()
{
    count=count+1
    countEl.textContent=count
    
}    

// 1. Create a function, save(), which logs out the count when it's called
   
function save()
{
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    let t=count + " - "
    saveEl.textContent+=t
    countEl.textContent=0
    count=0
   
    
}
 












/* let username="loda"
let message="You have tree new notifications"

 
let messagetouser=message + ", " + username + "!"
console.log(messagetouser) */