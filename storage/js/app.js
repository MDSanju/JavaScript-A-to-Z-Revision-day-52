// localStorage.setItem('userId', 8765455);

// this is for adding a single value to local storage
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    idInput.value = '';

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    valueInput.value = '';

    // if both informations are put then add to local storage from here, otherwise won't add
    if (id && value) {
        localStorage.setItem(id, value);
    }
}



// but when we need to add an object or an array, it's little different than adding single value
// that time we should do like this-

// add to local storage an object
localStorage.setItem('x', JSON.stringify([45, 55, 78, 85]));

// add to local storage an array
const pen = { price: 10, color: 'black' };
localStorage.setItem('nice write', JSON.stringify(pen));



// but if we want to get codes from JSON to use, that time we should do parse like below
// array - make/convert to simple js codes
const y = { name: 'xyz', brand: 'new', color: 'gray' };
localStorage.setItem('p', JSON.parse(y));