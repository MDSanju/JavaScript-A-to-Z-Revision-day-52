// 1. truthy values

// 'haveToLetterAtLeast' = it means something has written in string, not empty
// 4 = it means any number except 0
// true
// {} = means empty object
// [] = means empty array
// and all things are truthy whose are not falsy



// 2. falsy values

// '' = it means empty string
// 0
// false
// null
// undefined



// this is how we can check positive or truthy anything
let isTrue = 7;
if (isTrue) {
    isTrue = isTrue * 100;
} else {
    isTrue = 0;
}
console.log(isTrue);



// this is how we can check negative or falsy anything
let isFalsy = 50;
if (!isFalsy) {
    isFalsy = isFalsy * 2;
} else {
    isFalsy = 0;
}

console.log(isFalsy);





// simple condition, but this work we can do very easily in a shortcut way called ternary
const money = 80;
let haveFood;

if (money > 100) {
    haveFood = 'Biriyani';
} else {
    haveFood = 'Khechuri';
}

console.log(haveFood);


// 3. ternary

// this is nothing but a condition, actually ternary is a condition but shortcur condition
const bucks = 99;
let food = bucks > 100 ? 'burger' : 'Black Coffee';

console.log(food);



// little complex ternary, because two condition has been used to compare here
const beefCost = 290;
const drinksCost = 155;
let meal = (beefCost <= 300 && drinksCost <= 200) ? 'Have a great meal!' : 'No meal';
console.log(meal);




// 4. shortcut number to string conversion

// just do sum between an empty string and a number to convert a numeric/number to string
const num1 = 52;
const numStr = num1 + '';
console.log(numStr);



// 5. convert string to number in shortcut way

// just put a plus sign before the string variable name to convert string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);





// 6. true false shortcut
const isActive = true;
const isActive2 = false;
const showUser = () => console.log('Display User!');
const hideUser = () => console.log('Hide User!');
const login = () => console.log('Logged In!');

// it will show resutl based on the condition, if left side true then gets showUser(), if left side false then it will get hideUser()

// isActive ? showUser() : hideUser();
isActive2 ? showUser() : hideUser();

// this time both side should be correct, then it will work. if isActive = true, then it'll execute the right side, but if left side is false or not correct, then it won't execute the right side
isActive && showUser();

// use || if the left side is false then right side will be executed, otherwise it will not be executed
isActive2 || login();


// 7. toggle boolean

// it just converts or make a true value to a false value, means make opposite
let foo = true;
console.log(foo);
foo = !foo;
console.log(foo);




// 8. shorthand object declaration
// 
const x = 50;
const y = 100;
// can be same name for key and value
const obj1 = {
    x: x,
    y: y
};

// or the shortcut way
const srtcrt = { x, y };



// similar case
const n = 'John';
const p = 'Toronto';
// same key and value
const abc = {
    n = n,
    p = p
}

// shortcut for this as well
const srtcrt2 = { n, p };