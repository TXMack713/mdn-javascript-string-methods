let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

// Add your code here
let quoteLength = quote.length;

let index = quote.indexOf(substring);

let revisedQuote = quote.substring(0, (index + substring.length));

const section = document.querySelector('section');


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${quoteLength} characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);
