// MDN JavaScript String Methods Active Learning Exercise 1
const list = document.querySelector('.output1 ul');
list.innerHTML = '';
let greetings = [
  'Happy Birthday!',
  'Merry Christmas my love',
  'A happy Christmas to all the family',
  "You're all I want for Christmas",
  'Get well soon'
];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf('Christmas') !== -1) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}

// MDN JavaScript String Methods Active Learning Exercise 2
const list2 = document.querySelector('.output2 ul');
list2.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input2 = cities[i];
  // write your code just below here
  let modified = input2.toLowerCase();
  let firstLetter = modified.charAt(0).toUpperCase();

  let result = modified.replace(modified.charAt(0), firstLetter);
  let listItem2 = document.createElement('li');
  listItem2.textContent = result;
  list2.appendChild(listItem2);
}

// MDN JavaScript String Methods Active Learning Exercise 3
const list3 = document.querySelector('.output3 ul');
list3.innerHTML = '';
let stations = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (let i = 0; i < stations.length; i++) {
  let input3 = stations[i];
  // write your code just below here
  let stationCode = input3.slice(0, 3);
  let index = input3.indexOf(';');
  let stationName = input3.slice(index+1);

  let result2 = `${stationCode}: ${stationName}`;
  let listItem3 = document.createElement('li');
  listItem3.textContent = result2;
  list3.appendChild(listItem3);
}
