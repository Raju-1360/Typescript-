
 
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



     //! Index in Ts 

     /* an index refers to how objects or arrays are accessed using a key or a numeric index
     there are main two way to  access 
     1.Index Operators ([]): Used to access elements within arrays or objects.
2.Index Signatures ([key: type]: valueType): Define the structure of an object where the keys are dynamically determined,
but their types are predefined.
     
 
     */




/*    CODE HERE
let arr:number[]=[1,2,3,4];
console.log(arr[0])

let Obj :any ={ name :"Index", checked :true};
console.log(Obj["name"]);


interface Str_index{
    [index:number]:string;
}
const str:Str_index={
    0 :"Hello",
    1 :"World",
    2 :"TypeScript"

}
console.log(str[2])

   END HERE */


   //! Mapped Types:-
   /*
   Mapped Types allow you to take an existing type or interface and 
   create a new type by transforming each property in some way. This is especially useful when you need variations of the same structure (e.g., making all properties optional, readonly, or changing their types).
   
   */

   /*  CODE  START  HERE
   interface User {
    name :string,
    age :number
   }
    type readonlyUser ={
        readonly[ p in keyof User]:User[p];
    }

    const user1 :readonlyUser={
        name :"John",
        age :30
    };
    console.log(user1)     END HERE */

    /* 
    Common Use Cases:

Creating readonly versions of types.
Generating optional versions of types.
Modifying property types in bulk.

    */
   

//!Enum 
/*  enums are defined to create a set of named constants, providing a way to represent a collection of related values. They can be numeric or string-based and offer type safety and 
optional reverse mapping for numeric enums

Numeric Enums:
 Automatically assign incremental values unless explicitly set.
Reverse mapping
 String Enums: Require you to assign specific string values manually
 No Reverse Mapping

*/
/*    CODE START HERE

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
  
  console.log(Direction.Right)

  enum colors{
    red ="REd",
    Blue="Blue",
    green="Green",

  }
  console.log(colors.green)
 

  */


  //! Type Guard 

  /*A type guard in TypeScript is a mechanism to narrow down the type of a variable within a conditional block. It helps ensure that TypeScript understands what type a variable is, allowing you to safely access its properties and methods.  */


  //    CODE START HERE  Typeof 

  /* 
let Guard :string ="Guard";


if(typeof Guard === "string"){
    console.log(Guard.length)
}

function Guards( x:number,y:number):number{
    if(typeof x === "number"  && typeof y === "number"){

         return x+y;
       
    }
    else {
        console.log(`Invalid operation: ${x} and ${y}`)
    }
    return 0;


}
console.log(Guards(4,5))    */


//Instance of Type Guard
/*

let arr:number[] = [1,2,3,4];

if(arr instanceof Array){
    arr.push(5)
}
console.log( arr)


interface Person{
    name:string,
    age :45
}
let person :Person={ 

    name : 'John', age :45

}

if(person instanceof Object){
    console.log(person.name)
}   */


    //Type in 

/*
    type dog ={ name:string, bark:()=>void}
    type cat ={ name:string, meow:()=>void}

    function makeSound(animal : dog | cat){
        if("bark" in animal){
            animal.bark();
        }else {
            animal.meow();
        }
    }

    const mydog = {name :"buddy",bark:()=>console.log("woof!")};
    const mycat = {name :"Whiskers",meow:()=>console.log("meow!")};
    console.log(mydog);
makeSound(mydog);    
  END   */