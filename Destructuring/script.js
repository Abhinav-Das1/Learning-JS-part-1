// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perfrom object destructuring
//                 5 examples

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// --------- EXAMPLE 2 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red", "blue", "green", "yellow", "black"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// [colors[1], colors[3]] = [colors[3], colors[1]];

// console.log(colors);

// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "blue", "green", "yellow", "black"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Naruto",
//     lastName: "Uzumaki",
//     age: 33,
//     job: "Hokage"
// }

// const person2 = {
//     firstName: "Sasuke",
//     lastName: "Uchiha",
//     age: 33,
//     job: "Shadow Hokage"
// }

// const {firstName, lastName, age, job} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// --------- EXAMPLE 5 ---------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: "Naruto",
    lastName: "Uzumaki",
    age: 33,
    job: "Hokage"
}

const person2 = {
    firstName: "Sasuke",
    lastName: "Uchiha",
    age: 33,
    job: "Shadow Hokage"
}

displayPerson(person1);