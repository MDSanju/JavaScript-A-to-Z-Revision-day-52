// 1. template string
const n = [56, 496, 56, 789, 56];

const x = {
    name: 'Bob',
    age: 56,
    subjects: ['English', 'Math', 'Science']
};

// dynamic template string
const hisName = `He is Mr. ${x.name}
Age: ${x.age}
ID No: ${n[3]}
Subject: ${x.subjects[0]}`;

console.log(hisName);





// 2. arrow function

// no parameter
const getFiftyFive = () => 55;

// single parameter
const addSixtyFive = num => num + 65;

// check even number or not using single parameter arrow function
const isEven = even => even % 2 === 0;

// multi parameters arrow function
const addThree = (x, y, z) => x + y + z;

// multi lines arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}





// 3. spread operator
// array for example, nothing else
const numbers = [22, 56, 89, 78, 15];

// spread operator
const newNumbers = [...numbers];
// push numbers for example
numbers.push(99);
numbers.push(49);
numbers.push(34);
numbers.push(68);

// this time will add those push numbers, because it's not an spread operator
console.log(numbers);
// but time push numbers won't add because this is an spread operator
console.log(newNumbers);



// create a new array from an older array and add a new element with spread operator

// older array
const pupu = [10, 20, 23, 78, 85];
// previous thing for example
const newPupu = [...pupu];
// create a new array with adding a new operator
const lastPupu = [...pupu, 60];

// push for example
pupu.push(44);
pupu.push(458);
pupu.push(895);

console.log(pupu);
console.log(newPupu);
// create a new array with new element
console.log(lastPupu);