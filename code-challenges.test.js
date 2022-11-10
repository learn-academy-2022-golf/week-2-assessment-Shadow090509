// ASSESSMENT 2: Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types");
const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// I think the proper format for the test would look something like line 25 thru 29 and the function i created is on line 30 thru 32. yet when i run this test in jest, i get a failed result.. but not the undefined one that we expect. not sure why.

const numbersArray1 = [6, 7, 8, 9, 10];
// // Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36];
// // Expected output: [72, 81, 90, 99, 108]
describe("multThree", () => {
  it("returns a new array with the numbers multiplied by three", () => {
    expect(multThree(numbersArray1)).toEqual(18, 21, 24, 27, 30);
    expect(multThree(numbersArray2)).toEqual(72, 81, 90, 99, 108);
  });
});
const multThree = (array) => {
  return array() * 3;
};
// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
//input= an object as an argument
//output= wether the number is evenly divisible by 3
// i think a conditional statement with the funtion to return wether the number is evenly divisible by three or not is the appropriate approach

// a) Create a test with expect statements for each of the variables provided.
//input= number
//output= is divisible by three || is not divisible by three

const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 = { number: 0 };
// Expected output: "0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"
describe("divByThree", () => {
  it("returns wether the number is divisible by three or not based on input", () => {
    expect(divByThree(object1)).toEqual("15 is divisible by three");
    expect(divByThree(object2)).toEqual("0 is divisible by three");
    expect(divByThree(object3)).toEqual("-7 is not divisible by three");
  });
});

// b) Create the function that makes the test pass.
// i want to make a function inside of a conditional statement i can use for any number. i think it is a called a dynamic code. i will name it divByThree and make the if statement to return if is divisible by three or else return the statement that it is not divisible by three.
const divByThree = (number) => {
  if (number % 3 === 0) {
    return `${number} is divisible by three`;
  } else if (number % 3 !== 0) {
    return `${number} is not divisible by three`;
  }
};
// something wrong with jest, or my code.. but test is not running properly. This is what the terminal is returning..
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

// Your test suite must contain at least one test.

//   at onResult (node_modules/@jest/core/build/TestScheduler.js:133:18)
//   at node_modules/@jest/core/build/TestScheduler.js:254:19
//   at node_modules/emittery/index.js:363:13
//       at Array.map (<anonymous>)
//   at Emittery.emit (node_modules/emittery/index.js:361:23)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.384 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// it looks like it is stating that i dont have a test? not sure what that means or how to fix it. im thinking that jest must be testing the wrong file. will cd into specific file "code-challenges.test.js and try again"
// recieved the same message. i hope i can get clearaty for why this isn't working this upcoming week. i must admit, i am not feeling very good about this assesment, because of this result.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//input= array of words
//Expected output= array with all the words capitalized
// i plan on making a const that will take in an array of words and using a for loop return the array with the words in caps.
// const capArray = array.map((element) => {
//   return element.toUpperCase();
// });
// a) Create a test with expect statements for each of the variables provided.
//created the parameters of the test to include what are we testing and the expected output to be. as i stated earlier, I'm not sure why jest is not functioning properly. but i hope the rest of my answer is correct.
describe("capArray", () => {
  it("takes an array of words and returns an array with the same words capitalized", () => {
    expect(capArray(randomNouns1)).toEqual(
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew"
    );
    expect(capArray(randomNouns2)).toEqual(
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango"
    );
  });
});

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// i will plug this array into my function

//console.log(capArray(randomNouns1));
// this returns a typeerror which i am lead to believe the current command is being used in the wrong situation or in the wrong spot of the code. will move forward.
// after the changes i got the typeerror that states .toUpperCase() is not a function. not sure how to fix that and the syntax seems fine. but obviously im wrong here.
//now after my changes it returns that array.map.toUpperCase() isn't a function. not sure what i might be over looking or over thinking it.
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//i will write the test for this even though my jest doesnt seem to be aggreeing with me.
describe("capArray", () => {
  it("takes an array with strings and returns an array with the strings capitalized", () => {
    expect(capArray()).toEqual(array.toUpperCase());
  });
});
// b) Create the function that makes the test pass.
// reusing the function i created. i believe i have hit the point in my testing that is running into syntax and operating problems due to the information in this file. i will restart terminal and comment out all information that doesn't obtain to this specific test..
// const capArray = (array) => {
//   return array().map("string").toUpperCase();
// };
// test result failed to run. it says the suite must contain at least one test.. moving forward
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//input= string
//expected output= an index of the first vowel
//i think a for loop that iterates thru the string and returns the first vowel of the string
// a) Create a test with expect statements for each of the variables provided.
//first i created the test describing the function it will test and what the expected output template
describe("firstVowel", () => {
  it("returns the index of the first vowel of the string", () => {
    expect(firstVowel(vowelTester1)).toEqual(1);
    expect(firstVowel(vowelTester2)).toEqual(0);
    expect(firstVowel(vowelTester3)).toEqual(2);
  });
});

const vowelTester1 = "learn";
// // Expected output: 1
const vowelTester2 = "academy";
// // Expected output: 0
const vowelTester3 = "challenges";
// // Expected output: 2
//going with now way to test and see if my answers are right or not, i am hoping that i coded this right. i will figure out(in the near future) what is blocking me from completing this assesment properly and make sure this doesn't happen again.

// // b) Create the function that makes the test pass.
function firstV(str) {
  let test = str.search(/[a,e,i,o,u,A,E,I,O,U]/g);
}

// I know i want to search for the vowel and show the index of the first vowel. yet with my research, this is the function i came up with. i look forward to feed back and to figure out the better way to complete this weeks assesment. thank you for your time.
