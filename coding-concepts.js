// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022";
//console.log(cohort.split(""));

// a) Your answer:the console.log should split the strings value with a "" seperating each letter.
// b) Verify and explain: the letters were seperated with ''.
//.split() will take the contents of an string and return them seperated in a new array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
//console.log(greeter("LEARN Student"));

// a) Your answer: it will return what ever value we input as "name" and return the comment `Hello, LEARN Student!`
// b) Verify and explain: came back with undefined, because the function was missing its return command. i put return at the beginning of line 20 and the console.log returned the expected output.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2);
//console.log(multipliedByTwo);

// a) Your answer: the function is missing a return. i expect the log to return as undefined.
// b) Verify and explain: the log worked and returned the numbers in the array multiplied by 2. i think this is because the .map will return the values of the array in a new array. not needing a return.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
//console.log(onlyOdds);

// a) Your answer: it looks like it will create a new array with only 11,13,15 because they can not be evenly divided by 2.
// b) Verify and explain: the log produced a new array with the oddnumbers as expected because .filter will create a new array of a specific value, which in this case was declared as the odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
//console.log(myCodingSkills.languages[0]);

// a) Your answer: the log will output "JavaScript" because the command is refering to the key "languages" and it's value at the index of 0.
// b) Verify and explain:like i said, the log was "JavaScript" because we are refering to the languages key and specificaly the value on the index of zero on its array.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Foxtrot"), (this.year = 2022);
  }
}
const learnStudent = new Learn("George");
console.log(learnStudent);

// a) Your answer: the log will output `George, Foxtrot, 2022` because we created the const "learnstudent" with the class of learn. this will give the const "learnStudent" the name "George" and the class is the cohort "Foxtrot" and the year is "2022"
// b) Verify and explain: the log also gave the name of each key that is associated with the class that was given to the const "learnStudent". i think this is because the log was commanded to return the const "learnStudent", which will return all value inside of the const.
//Also the cohort of "Foxtrot", is wrong, since the correct cohort would be the one and only Golf.
