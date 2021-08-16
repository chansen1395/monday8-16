
// Loops through each item in the arrays
const languages = ['HTML', 'CSS', 'JavaScript'];
languages.forEach(function(language) {
  alert('I love ' + language + '!');
});

const array = [0,1,2,3,4,5];
array.forEach(function(number) { 
  console.log(number * 2);
});


// Stores function results in a new array
const array = [0,1,2,3,4,5];
let doubledArray = [];
array.forEach(function(element) {
  doubledArray.push(element * 2);
});
doubledArray;


// Adds all elements of the array, stores them in a variable.
const array = [0,1,2,3,4,5];
let sum = 0;
array.forEach(function(element) {
  sum += element;
});
sum;


let thingsILike = "I like...";
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
thingsILike;

// Same as above, but appending to an HTML ID
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  $("#likable-things").append(" " + thing + "!");
});