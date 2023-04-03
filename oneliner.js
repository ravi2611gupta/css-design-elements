// console.log("Hey, this is ravi gupta!")

//! ================> post 1
//* Long-hand ======>
const name = "ravi";
const greeting = "Hello " + name + "!";
console.log(greeting);

//* short-hand ======>
const name = "ravi";
const greeting = `hello, ${name}!`;
console.log(greeting);

//! ================> post 2
//* long-hand ======>
const array = [1, 2, 3];
const a = array[0];
const b = array[1];
const c = array[2];

console.log(a, b, c);

//* short-hand ======>
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c);

//! ================> post 3
//* long-hand ======>
const dayNumber = new Date().getDay();
let day;

switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

//* short-hand ======>
const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

const dayNumber = new Date().getDay();
const day = days[dayNumber];

console.log(day);

//! ================> post 4
//* long-hand ======>
function isVowel(letter) {
    if(
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
        ){
        return true;
    }else{
        return false;
    }
}

//* short-hand ======>
function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

//! ================> post 5
//* long-hand ======>
let minValue = 10;
let maxValue = 100;
let info;
function checkValue(value){
    if(value < minValue){
        info = "Value is too small";
    }else if(value > maxValue){
        info = "Value is too large";
    }else{
        info = "Value is in range";
    }
    return info;
}
console.log(checkValue(115));

//* short-hand ======>
let minValue = 10;
let maxValue = 100;
function checkValue(value){
    const info = value < minValue ? "Value is too small" : value > maxValue ? "Value is too large" : "Value in range";
    return info;
}
console.log(checkValue(45));

//! ================> post 6
//* long-hand ======>
const numbers = [1, 2, 3];
const doubleNumbers = [];
for(let i = 0; i < numbers.length; i++){
    doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);

//* short-hand ======>
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//! ================> post 7
//* long-hand ======>
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

//* short-hand ======>
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

//! ================> post 8
//* long-hand ======>
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {};
for(let key in obj1){
    obj2[key] = obj1[key]
}
console.log(obj2);

//* short-hand ======>
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = Object.assign({}, obj1);
console.log(obj2);

//! ================> post 9
//* long-hand ======>
const person = {
    name: "John",
    age: 23
}
const name = person.name;
const age = person.age;
console.log(name, age);

//* short-hand ======>
const person = {
    name: "John",
    age: 23
}

const { name, age } = person;
console.log(name, age);

//! ================> post 10
//* long-hand ======>
const numbers = [1, 2, 3, 4, 5];
let foundNumber;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 3){
        foundNumber = numbers[i];
        break;
    }
}
console.log(foundNumber);

//* short-hand ======>
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number===3);
console.log(foundNumber);
