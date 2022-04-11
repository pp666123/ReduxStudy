
let book = { title: "Harry Potter" };

console.log(book); //{title: 'Harry Potter'}

function publish(book) {
    book.isPublish = true;
}

publish(book);

console.log(book); //{title: 'Harry Potter', isPublish: true}