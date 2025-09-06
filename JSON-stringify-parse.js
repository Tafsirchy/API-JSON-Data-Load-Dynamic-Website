console.log("Explore API");

const person = {
    name: 'selim',
    fruit: 'apple',
    dish: 'pizza',
    friends: ['selim', 'sami', 'sami'],
    isRich: false,
    money: 34000,
}
console.log(person);
// JSON ---> JavaScript Object Notation

//JSON.stringify() ---> convert JS object to JSON

const personJSON = JSON.stringify(person);
console.log(personJSON);
// console.log(personJSON, typeof personJSON);

// JSON.parse() ---> convert JSON to JS object
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);