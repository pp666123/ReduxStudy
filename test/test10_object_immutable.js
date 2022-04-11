import { Map } from 'immutable';

let book = Map({ title: "Harry Potter" });

console.log(book); //{size: 1, _root: ArrayMapNode, __ownerID: undefined, __hash: undefined, __altered: false}
console.log(book.title);//undefined
console.log(book.get("title"));//Harry Potter
console.log(book.toJS());//{title: 'Harry Potter'}