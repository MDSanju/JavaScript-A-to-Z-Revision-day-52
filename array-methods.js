// 1. array of object
const products = [
    { name: 'laptop', price: 32000, brand: 'hp', color: 'silver' },
    { name: 'phone', price: 64000, brand: 'apple iPhone', color: 'golden' },
    { name: 'watch', price: 45000, brand: 'apple', color: 'black' },
    { name: 'sunglass', price: 800, brand: 'ao', color: 'dimgreen' },
    { name: 'camera', price: 87000, brand: 'canon', color: 'gray' }
];

// map for make an array with any property of the array of object
const brands = products.map(product => product.brand);
console.log(brands);

const names = products.map(product => product.name);
console.log(names);






// 2. forEach, should use without declaring variable because we don't need to do return from forEach. so when we should do return that time we will do map, otherwise we'll do forEach
products.forEach(product => console.log(product.color));

// multi line forEach
// we will get all elements from the array one by one through loop, and we can do anything with each element using multi line forEach
products.forEach(product => {

})






// 3. filter
// filter does return us an array, it checks in the defined array through the setted condition. then it makes a new array if condition matched

// check number in the old array through its condition
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);


// check string in the old array through its condition
const specificName = products.filter(product => product.name.includes('p'));
console.log(specificName);







// 4. find
// filter return us an array and more things if matched condition
// But find dosen't return us array rather it will return us direct element, and it will not return plural elements, rather it will return us first matched element only. rest of the matched elements will not return find
const special = products.find(product => product.color.includes('d'));
console.log(special);