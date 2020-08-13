let parent = document.getElementById('parent');

let first = parent.firstChild;

let add = document.createElement('h1');

parent.insertBefore(add, first);

console.log(add);

add.setAttribute('id', 'title');

let title = document.getElementById('title');

title.innerText = 'este es el elemento agregado';

