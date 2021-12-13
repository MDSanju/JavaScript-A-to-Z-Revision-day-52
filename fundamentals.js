// 1. variable using let and const
const myName = 'MD Sanju';
let season = 'rainy';
season = 'winter';



// 2. conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if (condition) {

} else if (condition) {

} else {

}



// 3. array
// index
// length
// push
const numbers = [89, 55, 78, 6];
// set array element by index number
numbers[0] = 11;



// 4. loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}



// 5. function
function multiplication(num1, num2) {
    const multiple = num1 * num2;
    return multiple;
}
// call the function with a const variable because we did return the function
const output = multiplication(15, 55);
console.log(output);



// 6. object
// two ways to access property by name
const student = {
    name: 'Sam Boned',
    age: 32,
    subjects: ['English', 'Math', 'Science']
};

// to get access any property of an object
console.log(student.age);
// access any property name via property name string
console.log(student['age']);