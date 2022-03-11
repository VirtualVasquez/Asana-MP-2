/**
 * theme.js
 * Entry point for all theme related js.
 */
require('./skip-link');

/** used to add a '+/-' button for all accordion items sitewide.* */
const accordItems = document.querySelectorAll('.field--name-field-item-header');
for (i = 0; i < accordItems.length; i += 1) {
  const btn = document.createElement('button');
  btn.innerHTML = '+';
  accordItems[i].prepend(btn);
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.parentElement.classList.toggle('active');
    if (btn.innerHTML === '+') {
      btn.innerHTML = '-';
    } else {
      btn.innerHTML = '+';
    }
  });
}

/** appends the '>' character to the 'Get Details' link in each accordion item.* */
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
