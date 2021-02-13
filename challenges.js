/*------------------
1) Done
Create a function named
"forEach" that takes in two
parameters– an array and a
callback function. 

The "forEach" function should
apply the function to every
element in the array.

Test cases:
forEach(["a", "b", "c"], e => {console.log(e)}); // a b c
------------------*/
/*
function forEach(arr, cb) {
  for(let e of arr) {
    cb(e)
  }
}
forEach(["a", "b", "c"], e => {console.log(e)}); // a b c


/*------------------
2) Done
Create a function named
"map" that takes in two
parameters– an array and a
callback function. 

The "map" function should
return a new array. Each item
in the new array should be the
result of applying the callback
function to every element
of the array passed in as the parameter.

Test cases:
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]
------------------*/
/*
function map(arr, cb) {
let newarr = [];
for (let elem of arr) {
  let mappedElem = cb(elem);
  newarr.push(mappedElem);
}
 return newarr;
}
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]


/*------------------
3) Incomplete
Create a function named
"filter" that takes in two
parameters– an array and a
callback function. 

The "filter" function should
return a new array that only includes
the items that have passed
the callback function (ie: the callback
will return true or false for each item).

Test cases:
*/
/* Didn't Work
function filter(arr, cb) {
  let newarr= [];
  for(let elem of arr) {
    let filteredArr = cb(e);
  newarr.push(filteredArr);
}
 return newarr;
}
console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]


function filter(arr, cb) {
  const newarr= [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newarr.push(arr[i])
    }
  }
 return newarr;
}
console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]
// returning undefined 
/*------------------
4) Done
Create a function named
"every" that takes in two
parameters– an array and a
callback function. 

The "every" function is similar to
"filter" in that the callback function
is a test. However, the "every" function
returns true if EVERY element
in the passed in array passes that test. 
Otherwise, it returns false. Try writing it!

Test cases:
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false
------------------*/
/*
function every(arr, cb) {
  let newarr = [];
for (let elem of arr) {
  if (cb(elem) === false) {
    return false
  };
 return true;
}
}
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false
//returning every value as true

function filter(arr, cb) {
  let newarr= [];
  for(let elem of arr) {
    let filteredArr = cb(e);
  newarr.push(filteredArr);
}
 return newarr;
} 
//returns true, false, false


/*------------------
5) Done
You've written "forEach", "map", "filter"
and "every" from scratch. Each of 
these methods exist on the JavaScript Array
prototype already, however. 

For this question, use the native
forEach method to add all of the items
in the nums array. Use a fat arrow function.
The code has been started for you.
------------------*/
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

nums.forEach((nums => sum += nums));
 console.log(sum);

/*------------------
6.1) Done
Use the native map method to transform
every item in the names array to a greeting.

Test case:
["Sofia", "Pedro", "Mia"] to ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
------------------*/
/*
const names = ["Sofia", "Pedro", "Mia"];

 const greetings = names.map(n => `Hey there!, ${n}!`);

 console.log(greetings);

/*------------------
6.2) Done
Use the map method to create a duplicate of an array.
Write this in the shorter possible way you can.

Test case:
["JavaScript", "Python", "Go"] to ["JavaScript", "Python", "Go"]
------------------*/
/*
const langs = ["JavaScript", "Python", "Go"];

 const duplicate = langs.map(x => x)
 console.log(duplicate);

/*------------------
6.3) Done
Use the map method to create a duplicate of an array of full names.

Test case:
Result should be ["Grace Hopper", "Ruth Bader Ginsburg", "Ada Lovelace"]
------------------*/

const people = [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
];

 const fullnames = people.map(people => `${people.firstname} ${people.lastname}`);

 console.log(fullnames);

/*------------------
6.4) Done 
Use the map method to create a duplicate of objects that contain the original data plus the fullname.
Use the same people array as in the previous exercise

Test case:
Result should be [
  { firstname: "Grace", lastname: "Hopper", fullname: "Grace Hopper" },
  {
    firstname: "Ruth",
    lastname: "Bader Ginsburg",
    fullname: "Ruth Bader Ginsburg",
  },
  { firstname: "Ada", lastname: "Lovelace", fullname: "Ada Lovelace" },
]
------------------*/

 const fullobjects = people.map(people => `firstname: ${people.firstname},  lastname:${people.lastname}.`);

 console.log(fullobjects);

/*------------------
6.5) Done
Use the map function to create an array with values "true" or "false" 
that indicate if the number in that position is even

Test case:
[3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9] to [false, false, true, false, true, false, true, false, true, true, true, false]

------------------*/
/*
const numbers = [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9];
const areEven = numbers.map(x => (x % 2 === 0));
 console.log(areEven);

/*------------------
6.6)Done
Use the map function to create an array with values "true" or "false" 
that indicate if the number in that position is equal to the position in the array (starting at 0)

Test case:
[1,3,2,2,4,13,8,6,8,10,4,12,12] to [false, false, true, false, true, false, false, false, true, false, false, false, true]

------------------*/
/*
const moreNumbers = [1, 3, 2, 2, 4, 13, 8, 6, 8, 10, 4, 12, 12];

 const areInPosition = moreNumbers.map((num, ix) => num === ix);

 console.log(areInPosition);

/*------------------
7.1) Done
Use the filter method to filter out any
number that is greater than 50.

Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 34, 3, 24]
------------------*/

const numsList = [1, 34, 83, 65, 3, 24, 98];

 const smallNums = numsList.filter(num => num > 50);

 console.log(smallNums);

/*------------------
7.2) Done
Use the filter method to filter out any
number that is even. Use the same array as before, numList

Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 83, 65, 3]
------------------*/
/*
 const evenList = numsList.filter(num => num % 2 === 0);

 console.log(evenList);

/*------------------
7.3) Done
Use the filter method to keep all the numbers that are bigger
than the position they occupy in the array, starting at 0

Test case:
[1, 0, 1, 3, 5, 6, 6, 1, 9] to [1, 5, 6, 9]
------------------*/
/*
const moreNums = [1, 0, 1, 3, 5, 6, 6, 1, 9];
//                0, 1, 2, 3, 4, 5, 6, 7, 8
 const evenList = moreNums.filter((num, ix) => num > ix);

 console.log(evenList);

/*------------------
7.4) Done
Use the filter method to filter out the people whose firstname
does not contain the letter "a". Use the array "people" that you used before.

Test case:
[
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
]
 to 
 [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ada", lastname: "Lovelace" },
]
------------------*/

 const peopleWithA = people.filter(p => {
   if (p.firstname.includes('a')) {
     return p;
   }
  })

 console.log(peopleWithA);

/*------------------
8)Done
Use the every method to return true
if every word in the array below is a
palindrome (the same backwards as forwards).

Here's some code you can use to reverse
a string: 

.split('').reverse().join('')

Notice that the code that has been given
to you is wrapped in another function. This is to
make testing multiple cases easier. :)

Test case:
["deified", "civic", "radar", "level", "rotor"] is true
["kayak", "reviver", "racecar", "reader", "madam"] is false
------------------*/

const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function checkPalindromes(list) {
  return list.every((x => x === x.split('').reverse().join('')));
};

console.log(checkPalindromes(wordList1));
 console.log(checkPalindromes(wordList2));

 //Jacosta's code
 //const checkPalindromes = list =>  list.every(x =>  x === x.split('').reverse().join(''));
 //console.log(checkPalindromes(wordList1));
 //console.log(checkPalindromes(wordList2));
/*------------------
9) Done
Look at the MDN docs and Eloquent JavaScript
to understand how "reduce" works. Then, 
use reduce to add all the items in the 
numsList (from the previous question) together.
------------------*/

  const total = numsList.reduce((total, a) => 
  total + a
);


 console.log(total); // should equal 308

// TO DEEPEN THE LEARNING

/*------------------
10)Done
Use the filter method to create an array containing
only those numbers that are even and are located in an even position in the array,
or those numbers that are odd and are located in an odd poistion in the array,
starting at position 0

Test case:
[1, 34, 83, 65, 3, 24, 98] to [65,98]
------------------*/

let pear = [1, 34, 83, 65, 3, 24, 98];
 const oddList = pear.filter((num, ix) => 
  ((num % 2 === 0) && (ix % 2 === 0)) || ((num % 2 !== 0) && (ix % 2 !== 0))
//  (for even numbers and positions)      (for odd numbers and positions)
  );

 console.log(oddList);

/*------------------
11.1) Done
Each array in this array represents the each player's age in a basketball team
Filter out those teams that have less than 3 players that are older than 20 years old.
Hint: you can use HOFs inside the callbacks of other HOFs.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
to [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]
------------------*/
let teams = [[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]];
let olderTeams = teams.filter(team => {
  let olderPlayers = team.filter(age => age > 20);
  return olderPlayers.length >= 3;
});

 console.log(olderTeams);

/*------------------
11.2) Perhaps you used the .length property in the previous exercise.
Can you repeat the exercise without using .length?
You're only allowed to use HOFs, but you can use as many as you need.

------------------*/

// olderTeams = // your code here

// console.log(olderTeams);

/*------------------
11.3) This time, instead of returning the arrays of teams,
calculate the total age of the team (adding all the ages of its players).
In other words, create an array that contains the accumulated age of team players,
only for those teams that have more than 2 players that are older than 20.
You're only allowed to use HOFs, but you can use as many as you need.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
to [109,106]

------------------*/

// olderTeams = // your code here

// console.log(olderTeams);
