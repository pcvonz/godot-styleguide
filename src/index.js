import './scss/style.scss';

// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/QuerySelector
function $ (selector, el) {
     if (!el) {el = document;}
     return el.querySelector(selector);
}
function $$ (selector, el) {
     if (!el) {el = document;}
     return el.querySelectorAll(selector);
     // Note: the returned object is a NodeList.
     // If you'd like to convert it to a Array for convenience, use this instead:
     // return Array.prototype.slice.call(el.querySelectorAll(selector));
}
// generate nav

let navList = $("#nav ul");
let navItems = $$("h1.scaffold-menu");
navItems.forEach(el => {
  let li = document.createElement('li');
  let a = document.createElement('a')
  a.href = `#${el.id}`;
  a.innerHTML = el.innerHTML;
  li.appendChild(a);
  navList.appendChild(li);
});
