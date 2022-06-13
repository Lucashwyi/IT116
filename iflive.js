// console.log("hello live");

// let randomNumber = Math.random();

// console.log(randomNumber);

//if conditions are met
// relational operators are used inside of conditional statements

// if (randomNumber <0.5) {

//     console.log("Hello Monte");
//     console.log(randomNumber);


// }

// if (randomNumber >= 0.5) {

//     console.log('randomNumber is greater than 0.5');
//     console.log(randomNumber);
// }

//If Else Statement are statements when conditions are not met

// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Saturday') {

//     console.log('This is Saturday');
    
// } else if (dayOfWeek === 'Thursday') {
    
//     console.log("This is Thursday");

// } else if (dayOfWeek === 'Monday') {

//     console.log("Hooray, today is Monday!");
// }

// const age = prompt('Enter An Age to DRIVE'); 

// if (age < 5) {

//     console.log("You are less than 5! : /.");
// } else if (age < 10) {

//     console.log("Still too young!");
// } else if ( age >= 16) {

//     console.log("You are able to drive!");
// }

// //ELSE -- ALL ALL CONDITIONS IN THE LOGIC HAVE FAILED
// else {

//     console.log("Last Resort IF all Conditions Fail");
// }

//Created a switch statement that is cleaner than else if statements
// const expr = 'Papayas';

// switch (expr) {

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound")
//         break;
//     case 'Mangoes':
//         console.log("Hello Mangoes")
//         break;
//     case 'Papayas':
//         console.log("Hello Papayas");
//         break;
//     default: 
//         console.log("Sorry, we are out of your asked item.");


// }
// this is a nested condition. within the main condition if the criteria is met
// strict operators ===

// const password = prompt("Please Enter A New Password");

//     if (password.length >= 6) {

//         //Nested Condition
//         if (password.indexOf(' ') === -1) {
//             console.log("Valid Password")

//         }else {
//             console.log("Password Can't Have Spaces")
//         }

//     } else {
//         console.log("Password is Too Short")
//     }


////////////////////////////////
// Functions
// call the function in order to run 

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong()
singSong()
singSong()

function greet(firstName) {
// string literal
    console.log(`Hey There, ${firstName}`)
}

//referencing the string index
//[0]. will prompt first initial of last name
greet('Lucas')

function greet1(firstName, lastName) {
    
    console.log(`Hey There, ${firstName} ${lastName}`)
}

greet1('Boomer', 'Sooner')

// once function is declared, call function for literals to run

////////////////////////////