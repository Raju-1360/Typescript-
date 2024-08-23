//?Type Annotations:- Explicity declare the type of the a variable or function parameter


/*

let count :number =0;
console.log(`this is a  number as type annotation ${count}`)     */



//?type inference : typescript automatically infers types based on the assigned value or usage context

/* 

let message ="this is a string ";
console.log(`thi is a sting by inference ${message}`)
let no=45;
console.log(`this is also a inference ${no}`)  */



// Same for other values like boolean , symbol, undefined, null etc..

// symbol are unique even if they have same description
const id : symbol =Symbol("idNumber48545");
const id2 : symbol =Symbol("idNumber48545");

console.log(id ===id2)// false






//?Arrays 
const numbers:number=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers)

