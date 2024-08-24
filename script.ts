
 
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