// 1. JSON => stringify, parse

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

// JSON convert object to stringify
const employeeJSON = JSON.stringify(employee);
console.log(employeeJSON);

// JSON convert stringify to object again
const convertToObject = JSON.parse(employeeJSON);
console.log(convertToObject);





// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));






// 3. getting object's keys, values

// get all keys of the object in a new array
const getKeys = Object.keys(employee);
console.log(getKeys);

// get all values of the object in a new array
const getValues = Object.values(employee.specification.hobby);
console.log(getValues);



// 3. .forEach()

// if we don't need to get return from array loop, forEach will always use for doing loop in an array from now
const numbers = [23, 56, 79, 57, 51, 45, 17];
numbers.forEach(num => {
    console.log(num);
});


// 4. .map()
// but if we need to get return from an array, that time we will use map
const mapArray = [5, 7, 4, 6, 9, 2];
const doMap = mapArray.map(n => n * 2);
console.log(doMap);



// 5. for of loop is used on array like object

// 6. for in loop is used on properties/keys of an object




// 7. add or remove from an array
// spread operator used for add
// and .filter() used for remove items from the array
const products = [
    { name: 'laptop', price: 32000, brand: 'hp', color: 'silver' },
    { name: 'phone', price: 64000, brand: 'apple iPhone', color: 'golden' },
    { name: 'watch', price: 45000, brand: 'apple', color: 'black' },
    { name: 'sunglass', price: 800, brand: 'ao', color: 'dimgreen' },
    { name: 'camera', price: 87000, brand: 'canon', color: 'gray' }
];

// 
const newProduct = { name: 'webcam', price: 4000, brand: 'delux dw', color: 'black' };

// copy products array and then add newProduct
const addProducts = [...products, newProduct];
console.log(addProducts);


// create a new array without one specific item
// remove phone means create a new array without the phone element/object
const remaining = products.filter(product => product.name !== 'watch');
console.log(remaining);