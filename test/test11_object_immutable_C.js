
import { Map } from 'immutable';

let book = Map({ title: "Harry Potter" });

function publish(book) {
    return book.set("isPublish", true);
}

book = publish(book);

console.log(book.toJS()); //{title: 'Harry Potter', isPublish: true}