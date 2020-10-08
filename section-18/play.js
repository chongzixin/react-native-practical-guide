// ARROW FUNCTIONS
const summarizeUser = () => {
    return "abc";
}
// return a+b
const add = (a,b) => a+b;
// a is a parameter
const addOne = a => a+1;

const person = {
    name: "zixin",
    age: 29,
    greet() {
        // this.name refers to person.name
        console.log("hello" + this.name);
    },
    greetMe: () => {
        // this.name is undefined because this refers to global scope when using arrow function
        console.log("hello" + this.name);
    }
}

// ARRAYS
const hobbies = ["eat", "sleep"];
// map takes a function and returns a new array
b = hobbies.map(a => "hobby: " + a);

// REST AND SPREAD OPERATORS
// immutability pattern - don't existing object, make a copy of it then add new things
const copiedArray = hobbies.slice();
// ... spread operator will pull out each item in an object or array, and apply it to whatever it is enclosed within
const copiedSpread = [...hobbies]; // spread each element of hobbies and put it inside an empty array [] - [ 'hobby: eat', 'hobby: sleep' ]
const hobbiesObject = {...hobbies}; // spread each element of hobbies into an object {} - { '0': 'eat', '1': 'sleep' }
// ... rest operator is used in the argument list of a function, and will merge the items into an array
const toArray = (...args) => {
    return args;
};

// DESTRUCTURING
const person = {
    name: "zixin",
    age: 29,
    greet() {
        // this.name refers to person.name
        console.log("hello" + this.name);
    },
    greetMe: () => {
        // this.name is undefined because this refers to global scope when using arrow function
        console.log("hello" + this.name);
    }
}
// if we wanted to print out name of a person, we will normally do the below
const printName = (person) => {
    console.log(person.name);
}
// alternatively, we can destructure it by doing the below. this will drop all other variables of the person object.
const printNameDestructured = ({name}) => {
    console.log(name);
}
// another example, this will take person.name and person.age and assign it to name and age variables
const { name, age } = person;
// array destructuring
const hobbies = ["eat", "sleep"];
const [hobby1, hobby2] = hobbies;

// ASYNC
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    })
    return promise;
}