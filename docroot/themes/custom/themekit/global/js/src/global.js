/**
 * theme.js
 * Entry point for all theme related js.
 */
require('./skip-link');

const accordItems = document.querySelectorAll('.field--name-field-accordion-item>.field__item');
for (i = 0; i < accordItems.length; i += 1) {
  const btn = document.createElement('button');
  btn.innerHTML = '+';
  accordItems[i].prepend(btn);
}

const linkItems = document.querySelectorAll('.field__item>a');
for (i = 0; i < accordItems.length; i += 1) {
  const text = linkItems[i].textContent;
  linkItems[i].innerHTML = '';
  const spn1 = document.createElement('span');
  spn1.innerHTML = text;
  const spn2 = document.createElement('span');
  spn2.innerHTML = '&nbsp >';
  linkItems[i].append(spn1);
  linkItems[i].append(spn2);
}
