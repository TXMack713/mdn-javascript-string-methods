let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.toUpperCase().charAt(0) + quote.toLowerCase().substring(1, quote.length);

let finalQuote = fixedQuote.substring(0, fixedQuote.indexOf('green eggs and ham')) + 'brussel sprouts.';

const section = document.querySelector('section');

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
