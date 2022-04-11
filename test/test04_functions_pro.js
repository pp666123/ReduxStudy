//套件lodash
//讓不同的function一起使用
import { compose, pipe } from 'lodash/fp';

let input = "   Javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
//與上面的太相似
// const wrapInSpan = str => `<span>${str}</span>`;
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap);
// console.log(transform(input) ); //<javascript>undefined</javascript>

const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input) ); //lodash.min.js:56 Uncaught TypeError: Expected a function

