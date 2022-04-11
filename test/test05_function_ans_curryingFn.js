//套件lodash
//讓不同的function一起使用
import { compose, pipe } from 'lodash/fp';

let input = "   Javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();


const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input)); //<div>javascript</div>
