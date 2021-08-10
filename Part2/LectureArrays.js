// NOTE: Arrays -> data structure, array is not primitive value -> it is mutable
const friend1 = "Sonya";
const friend2 = "Jonas";
const friend3 = "ELLE";

const friends = ["Sonya", "Jonas", "ELLE"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // NOTE: can put expression in the brackets

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice'];
const firstName = "Jonas";
const jonas = [firstName, "Liu", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// NOTE: Array Methods/operations
const friends1 = ["Sonya", "Jonas", "ELLE"];
const newLength = friends1.push("Jay"); // NOTE: add elements at the end of the array
console.log(friends1);
console.log(newLength);

friends1.unshift("John"); // NOTE: add elements at the beginning of the array
console.log(friends1);

//NOTE: Remove elements
friends1.pop(); // Last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // NOTE: remove the first element of the array
console.log(friends1);

// NOTE: indexOf + includes
console.log(friends1.indexOf("Sonya"));
console.log(friends1.indexOf("Bob"));

friends1.push(23);
console.log(friends1.includes("Sonya"));
console.log(friends1.includes("Bob"));
console.log(friends1.includes("23")); //NOTE: strict equality -> no type coercion

if (friends1.includes("Sonya")) {
  console.log("You have a friend called Sonya");
}
