const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
console.log(index); // 1

// const added = [numbers.slice(0, index)];
// console.log(added);// [1]

// const added = [
//     ...numbers.slice(0, index),
//     4
// ];
// console.log(added);// [1, 4]

// const added = [
//     ...numbers.slice(index)
// ];
// console.log(added);//  [2, 3]

const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];
console.log(added);// [1, 4, 2, 3]

//removing

const removed = numbers.filter(n => n !== 2);
console.log(removed);  // [1, 3]

//updating

const updating = numbers.map(n => n === 2 ? 20 : n);
console.log(updating);  // [1, 20, 3]
