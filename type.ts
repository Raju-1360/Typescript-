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

/* 
const id : symbol =Symbol("idNumber48545");
const id2 : symbol =Symbol("idNumber48545");

console.log(id ===id2)// false     */




//? Array 


//Array operations and methods
let numbers:any[]=[1,2,3,4,5,6,7,8,9];
//console.log(numbers)
let numbers2:string[]=["one","two","three","four","five","six","seven","eight"];


/*

numbers.push(numbers2);
console.log(numbers);

console.log(numbers[9])   
let a:any[]=numbers.concat(numbers2);
console.log(a.length);    

console.log(...numbers)          // we can separate numbers by separators operator

const number:any[]=[1,2,[1,2,3],4,5,["1", "2", "3"]];
console.log(number);
console.log(number.flat(Infinity))  // merge all arrays

console.log(Array.isArray(number))  
let a :number=4;
console.log(Array.isArray(a))        // check whether it was an array or not

console.log(Array.from("Coder"));     // it will give an array   

const arr:any[]=Array.from({length:10},(item,index)=>index +1);  
console.log(arr)

const arr2=Array.from({length:10},(item,index)=>index+2);
console.log(arr2)

const alphabet = Array.from({length:26},(item,index)=>String.fromCharCode(97+index));
console.log(alphabet) 

const upperLetter = Array.from({length:26},(item,index)=>String.fromCharCode(65+index));
console.log(upperLetter)
const nums= Array.from({length:20},(item,index)=>index+1);  
console.log(nums)                      


let one=1
let two=2;
let three =3;

console.log(Array.of({one,two,three}))  

let number4:number[]=[1,2,3,4];
number4.push(5);

console.log(number4)
console.log(`${number4.pop()} it print the last value which is pop`)
 let a=number4.pop()
console.log(number4)
console.log(`we can also stor the last value as here ${a}`);

number4.unshift(5);  // add value at first position 
console.log(number4)

let b =number4.shift()  // it will remove first value from array

console.log(b)
console.log(number4)

console.log(number4.includes(84));
console.log(number4.join())// convert array to string 
let c= number4.join()
console.log(c)              

 

let number5=[1,2,3,4,5];
let slices= number5.slice(0,3);
console.log(slices);
console.log(number5);
let splices= number5.splice(0,3);
console.log(splices);
console.log(`${number5} after splice`);
console.log(number5);                        


//!array.map((element, index, array) => {
  // Return the new value for the new array
//});
// map create a new array 

let number6= [1,2,3,4,]
number6=number6.map((element,index)=>element+1);
console.log(number6);

let newArray = number6.map((element,index)=>element*2);
console.log(newArray);

const obj:any= {a:1,b:2,c:3,d:4};
const entries =Object.entries(obj);
console.log(entries);     


const users = [
  {
      id: 1,
      name: "Alice",
      role: "Developer",
      projects: [
          {
              projectId: 101,
              projectName: "Website Redesign",
              tasks: [
                  {
                      taskId: 1001,
                      taskName: "Design Homepage",
                      status: "In Progress",
                      comments: [
                          { commentId: 5001, text: "Initial draft looks good", author: "Alice" },
                          { commentId: 5002, text: "Needs more color options", author: "Bob" }
                      ]
                  },
                  {
                      taskId: 1002,
                      taskName: "Set up backend",
                      status: "Completed",
                      comments: [{ commentId: 5003, text: "Deployed to production", author: "Alice" }]
                  }
              ]
          },
          {
              projectId: 102,
              projectName: "Mobile App",
              tasks: [
                  {
                      taskId: 1003,
                      taskName: "Create Login Screen",
                      status: "Not Started",
                      comments: []
                  }
              ]
          }
      ]
  },
  {
      id: 2,
      name: "Bob",
      role: "Designer",
      projects: [
          {
              projectId: 103,
              projectName: "Brand Identity",
              tasks: [
                  {
                      taskId: 1004,
                      taskName: "Logo Design",
                      status: "Completed",
                      comments: [
                          { commentId: 5004, text: "Client approved", author: "Bob" },
                          { commentId: 5005, text: "Final files sent", author: "Alice" }
                      ]
                  },
                  {
                      taskId: 1005,
                      taskName: "Color Palette",
                      status: "In Progress",
                      comments: [{ commentId: 5006, text: "Working on new variations", author: "Bob" }]
                  }
              ]
          }
      ]
  }
];

users.map((item,index)=>{
  console.log(item)

})

const aliceProject = users.find(user => 
  user.projects.some(project => project.projectName === "Website Redesign")
);
console.log(aliceProject);

const bob = users.find(users=> users.projects.some(projects=>projects.projectName==="Brand Identity"));

console.log(bob);
const allTasks = users.flatMap(user => user.projects.flatMap(project => project.tasks.map(task => task.taskName)));
console.log("All Tasks:", allTasks);


const comment = users.flatMap(user => user.projects.flatMap(project => project.tasks.flatMap(tasks =>tasks.comments .map(item=>item.commentId))));

console.log("All Comments:", comment);

const roles = users.map(user => user.role);
console.log("Roles:", roles);


let a =users.find(item=>item.role ==="Designer");
console.log("a:", a);      

     



//Functions can also have optional parameters using ? and default parameters values



function greet(name:string ,greeting?:string):void{
  if(greeting){
    console.log(`hello ${name} ,${greeting}`);

  }else {
    console.log(`hello ${name}`);
  }


}
greet("coders")
greet("coders, good morning")


const fun = (name :string):void=>{
  console.log(`hello ${name}`);

}
fun("hey i am coding right now typescript")   


//? Union 

// union types combines multiples types allowing a values to have a different  possible types 

let values :string | number =45;
console.log(values)
let a :(number | string )[]=[1,2,3,4,"five"];
console.log(a);

function num(number :string|number):void{
  console.log(number)
}


num("hey i am learning and coding hope you enjoy it :")









//?Type keyword
//creating a  custom types: the type keyword allow creating types aliases for custom types

type age =number;
let number :age = 45;
console.log(number);

type Name =string ;
let names :Name ="Coder";
console.log(names);

type Numbers =number[];
let d :Numbers =[1,2,3,4];
console.log(d)








// ? Intersection  


// Intersection types (&): combine multiple types ,requiring a values to have all specific types

type person={name:string,age:number};
type employee ={id: number,department?:string};


type details = person & employee;

const Employee : details ={
  name :"coder",
  age: 45,
  id:452,
 
}  

console.log(Employee)


//Special  types :- typescript has special types that may not refer to any specific type of data 

//these are special types ar any,unknown , and never an other like void, null and undefined 



let data :any ={name :"coder"};
console.log(data);



// The unknown type represents a value whose type is unknown at compile time 


// variables of type unknown can hold values of any type but required type of checking or assertions for safe usage .

let values:unknown ="unknown value do you know me ?";
values =5;// here reassign values to .. yes i know you he he
console.log(values);



//? never never return values or functions 

//The never keyword in TypeScript is used to indicate that a function will never return anything. Typically, it's used for functions that always throw an error or have an infinite loop.

// let sum :number =4;

// function Fun():never{
//   while(true){
//   console.log("error")
  

//   }
// }



//? The void type represents the absence of any type in typescript .


let Void :void 
console.log(Void)//

//it mostly used in function that never return the values 


function VoidFunction():void{

  console.log("i am void function")
}

VoidFunction()     


//? Interface
 /*TypeScript interfaces provide a powerful
way to define object structures and
ensure type safety.
Interfaces define the structure of an
object by specifying the names and types
of its properties.
We declare an interface using the
interface keyword in a .ts file. You can also
create interface inside your component
file with .tsx extension  */


interface Person{
  name :string,
  age :number,
  address ? :any
}

interface Address{
  city?: string,
  pinCode ? :string
}

type information  =Person & Address;
let Object1 :Person ={
  name :"hey you are looking at github ..!",
  age: 45,
}

let fullData :information={
  name:"Hey i am Interface",
  age:452,

  
}


console.log(Object1)
console.log(Object1.name)
console.log(Object1.age)

console.log(fullData)
// ? Destructor 
let d=(Object.keys(Object1))
console.log((Object.values(Object1)))

 let [nameKey ,ageKey]=d;
 console.log(nameKey,ageKey);

 let Values =Object.values(Object1);
 let [firstValues]=Values;
 console.log(firstValues);

 let object3: any={ name:"object ", age:45}

for(const key in object3){
  if(object3.hasOwnProperty(key)){
    console.log(`${key}: ${object3[key]}`);
    console.log(Object.keys(object3));
  }

}

const keyArr = Object.keys(object3).map((key)=>key);

console.log(keyArr);


// Read only 

interface DATA{
  readonly id :number,
  readonly no ? :number

  
}

const data :DATA={
  id :45225
}

console.log(data);

