// 
// Object destructuring
// 

// const person = {
//     name: 'Sammuel',
//     age: 25,
//     location: {
//         city: 'cabanatuan',
//         temp: 50
//     }
// };
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)


// 
// Array destructuring
// 
const address = ['505 urban', 'cabanatuan', 'nueva ecija', '3100'];

const [street, city, state = 'NE', zip] = address;

console.log(`You are in ${city} ${state}. `);


const item = ['Coffe (ice)' , '$2.00', '$2.30', '$2.80'];

const [itemName, , mediumSize] = item;

console.log(`A medium ${itemName} cost ${mediumSize}`);