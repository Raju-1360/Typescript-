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
console.log(entries);       */


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



