let number = 100;
console.log(number);

const PI = 3.14;
console.log(PI);

// PI = 3.1416;
// console.log(PI);

let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

let name = 'Carlo';
name = 'Marco';
console.log(name);

// esercizio 4

let greet = 'Ciao, Mondo!';
console.log(greet);

// esercizio 4/b

// let greet = 'Come stai, Mondo?';
// console.log(greet);

// esercizio 4/c

greet = greet + ' Come stai?';
console.log(greet);

greet = `${greet} Come stai?`;



// esercizio 1

// let num1 = 340
// let num2 = 34

// let comparison;
// if(num1 > num2) {
//     comparison = num1
// }
// else {
//     comparison =num2
// }
// console.log(comparison)


// esercizio 2

let name1 = 'Melissa';
let name2 = 'Ciccio';

let comparison;
if (name1 == name2) {
    comparison = 'Abbiamo lo stesso nome!'
}
else {
    comparison = 'Non ti chiami come me..'
}
console.log(comparison)



// esercizio 3

let num = 12;
let num2 = '12';
let comparison = false;

if (num == num2) {
    comparison = true;
    alert('I numeri sono uguali!');
}

else {
    alert('I numeri non sono uguali!')
}

console.log(comparison)


// esercizio 1a

for (let i=0; i<=42; i++) {
    console.log(i);
}