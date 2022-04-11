//深拷貝
//person被拷貝後不會修改
//擴展運算符
const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};

console.log(person); //address: {country: 'USA', city: 'San Francisco'} name: "John"
console.log(updated); //address: {country: 'USA', city: 'New York'} name: "Bob"