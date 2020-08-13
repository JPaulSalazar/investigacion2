var parent = document.getElementById('parent');

var first = parent.firstChild;

var add = document.createElement('h1');

parent.insertBefore(add, first);

console.log(add);

add.setAttribute('id', 'title');

var title = document.getElementById('title');

title.innerText = 'este es el elemento agregado';

