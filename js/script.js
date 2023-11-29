// let number = 100;
// console.log(number);

// const PI = 3.14;
// console.log(PI);

// // PI = 3.1416;
// // console.log(PI);

// let radius = 8;
// let circle = radius * 2 * PI;
// console.log(circle);

// let name = 'Carlo';
// name = 'Marco';
// console.log(name);

// // esercizio 4

// let greet = 'Ciao, Mondo!';
// console.log(greet);

// // esercizio 4/b

// // let greet = 'Come stai, Mondo?';
// // console.log(greet);

// // esercizio 4/c

// greet = greet + ' Come stai?';
// console.log(greet);

// greet = `${greet} Come stai?`;



// // esercizio 1

// // let num1 = 340
// // let num2 = 34

// // let comparison;
// // if(num1 > num2) {
// //     comparison = num1
// // }
// // else {
// //     comparison =num2
// // }
// // console.log(comparison)


// // esercizio 2

// let name1 = 'Melissa';
// let name2 = 'Ciccio';

// let comparison;
// if (name1 == name2) {
//     comparison = 'Abbiamo lo stesso nome!'
// }
// else {
//     comparison = 'Non ti chiami come me..'
// }
// console.log(comparison)



// // esercizio 3

// let num = 12;
// let num2 = '12';
// let comparison = false;

// if (num == num2) {
//     comparison = true;
//     alert('I numeri sono uguali!');
// }

// else {
//     alert('I numeri non sono uguali!')
// }

// console.log(comparison)


// // esercizio 1a

// for (let i=1; i<=42; i++) {
//     console.log(i);
// }

// esercizio 1/b

// for (let i=42; i>=1; i--) {
//     console.log(i);
// }

// // esercizio 1/a

// const numbers = [1, 5, 9, 52, 47, 45, 74, 55];

// esercizio 1/b

// const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya'];


// // esercizio 1/c

// console.log(fruits.length)

// eserciizo 2/a

// const numOfElements = prompt('Insierisci il tuo numero intero');
// let numbers = [];

// for(let i=1; i<=numOfElements; i++) {
//     numbers.push(i);  
// }

//  console.log(numbers);
//     console.log(numbers.length);

    // esercizio 2/b

//   let sum = 0;
  
//   for(let i=0; i<=numbers.length; i++) {
//     sum = sum+numbers[i];
//   }

//   console.log(sum);

  // esercizio 2/c

//   const numOfElements = prompt('Insierisci il tuo numero intero');

//   let numbers = [];

// for(let i=1; i<=numOfElements; i++) {
//     numbers.push(i);  
// }

// let max = numbers[0];

// for(let i=0; i<=numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }  
// }

// console.log('max=' + max)


// let num = prompt('Inserisci quanti numeri vuoi visualizzare');

// let a = 0, b = 1;
// let c = a + b;

// let i = 0;

// while(i<num) {
//     c = a + b;
//     a = b;
//     b = c;
    
//     i++;
//     console.log(c);
// }




// esercizio 1/a

// function helloWorld() {
//     alert('hello world!');
// }


// // esercizio 1/b

// helloWorld();

// // esercizio 2/a/b

// function sumNumbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let a = 2;
// let b = 5;

// let result = sumNumbers(a, b);
// console.log(result);


// esercizio 1/a

function getOneStringFromTwo(a, b) {
  return `${a} ${b}`
}

//esercizio 1/b

let a = 'hello';
let b = 'world';
console.log(getOneStringFromTwo(a, b));