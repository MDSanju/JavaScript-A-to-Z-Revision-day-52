// 1. array destructuring

// destructuring in old way
// const [x, y] = [14, 56];


// destructuring old way in different line
const numbers = [45, 94];
const [x, y] = numbers;




// destructuring little complex
// actually it will return an array through destructuring
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(48, 57));

// another way to do destructuring by using the function
const [firstNum, lastNum] = boxify(90, 34);



// 
const student = {
    name: 'Sam Boned',
    age: 32,
    subjects: ['English', 'Math', 'Science']
};

const [subject1, subject2, subject3] = student.subjects;







// 2. object destructuring
// this time both side have to write two different objects
// serial dosen't matter for object, if just matched then ok. but serial is a big issue for an array
const { name, price } = { name: 'coffee', price: 1500 };
const { cost, id } = { id: 23, name: 'coke', cost: 150 };






// little complex destructuring
const employee = {
    ide: 'VS Code',
    designation: 'Web Developer',
    machine: 'Macbook Pro',
    languages: ['JavaScript', 'Python', 'HTML', 'CSS'],
    specification: {
        height: 67,
        weight: 70,
        address: 'Khulna',
        maritalStatus: 'Married',
        hobby: {
            playing: 'Cricket',
            learning: 'English',
            exercise: 'Pull-up-Bar'
        }
    }
}

// destructuring by using the employee object
const { ide, machine } = employee;
const { maritalStatus, height } = employee.specification;
const { playing, exercise } = employee.specification.hobby;

// access languages from the employee object
const [lan1, lan2] = employee.languages;
console.log(lan1, lan2);





// 3. if other arrays have no any property or properties, that time we can do optional chaining
// like below - 

// const { playing, exercise } = employee?.specification?.hobby;