let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

let myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(
  Math.pow(a, 2) + Math.pow(b, 2)
)}.`;

const section = document.querySelector('section');

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
