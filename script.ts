
 
//! Generic  Interface 

/* Interfaces in TypeScript can also be
generic, allowing for flexibility and
reusability.
They enable the creation of interfaces that
can work with different types.
By leveraging generic interfaces, you can
write versatile and type-safe code that
accommodates a wide range of data
types   */



/*    🔥Code Start🔥    

interface  Box <T>{
    value:T;
};
const number: Box<number> = {
    value:45
};
console.log(number.value);

const Name: Box<string> = {
value :"coder"


};
console.log(Name.value);
console.log(Name)



function Num<T>( a:T):T{
    return a;

}
const Num1=Num<number>(5);
console.log(Num1)

type Result <T,U>={
    name:T,
   age :U
    success ?:Boolean;
}

const result :Result<String, number> ={
    
    name:"Coder",
    age :41
}
console.log(result)        



End */


/*--------------------------------------*/


//! ASSERTION

/* Notes:-
Type assertion allows you to override the
inferred type of a variable

type assertions do not have any runtime
impact and are purely for compile-time
type checking.

They provide hints to the compiler on how
we want our code to be analyzed.
They allow us to override the inferred
type and explicitly specify the desired
type.
Type assertions are particularly useful
when working with union types or
dynamically typed values.
TypeScript provides two ways to do Type
Assertion.
Using Angular Bracket (<>)
Using "as" keyword
?Assertion in TypeScript is used to tell the compiler to treat a value as a specific type.
?It doesn't change the runtime value but helps with type checking during development

*/


/*--------------- */


/*     🔥CODE START🔥     


let x= 45 as number;
console.log(x);
let y =<string> "four";
console.log(y);


function Assertion ( x: any , y :string):void{
    console.log((x as string) +y);
    
}
let z= Assertion ("Hello", "coder");
console.log(z);

let Names ="ASSERTION";

let lgth =(<string>Names).length;
let lgth2= (Names as string).length
console.log(lgth);
console.log(lgth2);


🐱‍🏍*/







//! Const Assertion 

/* Const assertion is a feature in TypeScript
that allows you to specify that a variable
should have a literal type.
It provides a way to enforce immutability
and treat values as constant throughout
the program.   */




 /*
let arr =["a", "b", "c"]as const;

//arr.push("d")   // Read only show error

const obj={
    name: "Cost ",
    value:"Read only "
}as const;
console.log(obj)

//obj.name="Changed"    // Read only show error
*/



/*----------🔥🔥🔥🔥🐱‍🏍🔥🔥🔥--------- */


//!Aliases 

/*Type aliases allow you to create custom
names for types, improving code
readability and reusability.
They provide a way to define a type once
and reuse it throughout our codebase     */



/* CODE  START HERE
type Numbers=number |string;

let num1 : Numbers = 45;
 console.log(num1)
 let num2 : Numbers = 405;
 console.log(num2)


 type Point={
    x:number,
    y?:number

 }
 const one:Point={
    x:45
 }
 console.log(one)


     END HERE */

     