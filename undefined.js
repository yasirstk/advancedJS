//If nothing is passed to a variable,
// let age; 
// console.log(age);

function add(num1, num2){
    result = num1 + num2;
    return; //nothing is returned
}
const output = add(13, 12);
console.log(output); //If nothing is returned in a function

const person = {name: 'John', age:23, email: 'abc@gmail.com'};
console.log(person.email); 
console.log(person.mobile);//If properties are not specified in an object

 function add(num1, num2){
    console.log(num1 + " " + num2);
    return num1 + " add with " + num2;
}
console.log(add(23, 33));
console.log(add(23));

let name = undefined;
console.log('The name is ', name);

let ages = [12, 11, 23, 31];
console.log('The ages are ', ages[5]);//If required value is not in array;