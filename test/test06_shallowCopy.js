//淺拷貝
//拷貝後部分可被修改
//擴展運算符
const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
const updated = { ...person, name: "Bob" };
updated.address.city = "New York";

console.log(person); //address: {country: 'USA', city: 'New York'} name: "John"
//淺拷貝只有拷貝到address沒有拷貝到name