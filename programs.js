/*
LOOPS


1.Write a program using a do-while loop to print numbers from 1 to 5
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);
*/
 



/*2.Implement a nested for loop to create a pattern of asterisks (e.g., a pyramid). 


function createPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';

        // Add spaces before the first asterisk
        for (let j = 1; j <= rows - i; j++) {
            row += ' ';
        }

        // Add asterisks for the current row
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }

        console.log(row);
    }
}

// Call the function with the number of rows you want in the pyramid
createPyramid(6);

*/






/*
3.Use a for...in loop to iterate over the properties of an object.


const person = {
    name: 'Rashmi',
    age: 25,
    city: 'New delhi'
};

// Using for...in loop to iterate over the properties
for (let key in person) {
    
   console.log(`${key}:${person[key]}`) 
}

*/





/*
4.Write a program that uses the forEach method to iterate over an array of names  and print each name.

// Sample array of names
const names = ['rashmi', 'rana', 'priyanka', 'sonam', 'shampy'];

// Using forEach to iterate over the array and print each name
names.forEach(function(name) {
    console.log(name);
});

*/


/* 5.Create a function that simulates the break statement within a loop.

function simulateBreak() {
    for (let i = 1; i <= 8; i++) {
        console.log(i);

        // Simulate break
        if (i === 4) {
            return; // exit the function
        }
    }

    console.log("This won't be executed.");
}

// Call the function to simulate the break
simulateBreak();

*/





//OBJECTS
/* 1.Develop a method within an object that calculates the area of a rectangle (height × width).



const rectangle = {
    height: 5,
    width: 10,
    calculateArea: function() {
        return this.height * this.width;
    }
};

// Call the method to calculate the area
const area = rectangle.calculateArea();

console.log(`The area of the rectangle is: ${area}`);

*/



/*
2.Write a program that checks if an object has a specific property.

// Sample object
const person = {
    name: 'Rashmi',
    age: 25,
    profession: 'frontend developer'
};

// Check if the object has a specific property using hasOwnProperty
const hasAgeProperty = person.hasOwnProperty('age');
console.log(`Does the object have 'age' property? ${hasAgeProperty}`);

// Check if the object has a specific property using the in operator
const hasprofessionProperty = 'profession' in person;
console.log(`Does the object have 'profession' property? ${hasprofessionProperty}`);

*/ 





/*
3.Create an object constructor for a 'Book' with properties like title and author.


// Book constructor function
function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  // Create instances of the Book object
  const book1 = new Book("indian polity", "laxmikanth");
  const book2 = new Book("indian history", "Rajiv");
  
  // Accessing properties of the book instances
  console.log(book1.title); 
  console.log(book1.author);
  
  console.log(book2.title); 
  console.log(book2.author);  */






  /*4.Implement a function to merge two objects into a new one.

  
  function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 6, c: 4 };

const mergedResult = mergeObjects(object1, object2);
console.log(mergedResult);

  
  
  */
  




/*
5.Write a program that converts an object to an array of key-value pairs.

function objectToArray(obj) {
  return Object.entries(obj);
}

// Example usage:
const myObject = {
  a: 5,
  b: 10,
  c: 15,
};

const keyValueArray = objectToArray(myObject);
console.log(keyValueArray);

*/





// ARRAYS
/*  
1.Create a function that removes a specific element from an array.

function removeElementFromArray(arr, elementToRemove) {
    const indexToRemove = arr.indexOf(elementToRemove);

    if (indexToRemove !== -1) {
        arr.splice(indexToRemove, 1);
    }

    
}


const numbers = [1, 2, 3, 4, 5];

// Remove the element '3' from the array
removeElementFromArray(numbers, 3);

console.log(numbers); // Output: [1, 2, 4, 5]



*/



/*
2.Write a program that finds the maximum and minimum numbers in an array.


const numberArray = [3, 7, 2, 10, 5];

const maxNumber = Math.max(...numberArray);
const minNumber = Math.min(...numberArray);

console.log(`Maximum: ${maxNumber}`);
console.log(`Minimum: ${minNumber}`);



*/



/* 
3.Use the filter method to create a new array of even numbers from an existing array.
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to create a new array of even numbers
const evenNumbers = originalArray.filter((number) => number % 2 === 0);

console.log(evenNumbers);




*/



/*
4.Implement a function that sorts an array of strings alphabetically.
function sortStringsAlphabetically(strings) {
  // Use the sort method to sort the array alphabetically
  return strings.sort();
}


const unsortedArray = ["banana", "apple", "kiwi", "grape"];

// Call the function to sort the array
const sortedArray = sortStringsAlphabetically(unsortedArray);

console.log(sortedArray);






*/



/*
5.Create a program that checks if an element exists in an array.

function doesElementExist(array, element) {
    return array.includes(element);
}


const numbers = [1, 2, 3, 4, 5];

// Check if 8 exists in the array
const isElementInArray = doesElementExist(numbers, 8);

if (isElementInArray) {
    console.log('The element exists in the array.');
} else {
    console.log('The element does not exist in the array.');
}







*/



//  STRINGS


/* 
1.Write a function that capitalizes the first letter of each word in a sentence.


function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const originalSentence = "welcome to my github world";

// Call the function to capitalize the first letter of each word
const capitalizedSentence = capitalizeWords(originalSentence);

console.log(capitalizedSentence);



*/



/*
2.Develop a program that counts the number of vowels in a given string.



function countVowels(inputString) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let char of inputString) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const inputString = "Hello, welcome to rashmi github account ";

const result = countVowels(inputString);

console.log(`Number of vowels: ${result}`);




*/



/*
3.Create a function that removes whitespace from both ends of a string.
function removeWhitespace(inputString) {
    return inputString.trim();
}


const stringWithWhitespace = '   Hello, there!   ';

const result = removeWhitespace(stringWithWhitespace);

console.log(`Original string: '${stringWithWhitespace}'`);
console.log(`String without leading and trailing whitespace: '${result}'`);

 */



/* 4.Write a program that checks if a string contains a specific substring.


function containsSubstring(mainString, substring) {
    return mainString.includes(substring);
}


const mainString = 'Hello, world!';
const substringToCheck = 'world';

const contains = containsSubstring(mainString, substringToCheck);

if (contains) {
    console.log(`The string '${mainString}' contains the substring '${substringToCheck}'.`);
} else {
    console.log(`The string '${mainString}' does not contain the substring '${substringToCheck}'.`);
}

 */



/*5.Implement a function to reverse words in a sentence without changing their order.

function reverseWords(sentence) {

    // Split the sentence into an array of words
    const wordsArray = sentence.split(' ');

    // Reverse the order of the words in the array
    const reversedArray = wordsArray.reverse();

    // Join the reversed array back into a sentence
    const reversedSentence = reversedArray.join(' ');

    return reversedSentence;
}


const originalSentence = 'JavaScript is a powerful language';

const reversedSentence = reverseWords(originalSentence);

console.log(`Original sentence: '${originalSentence}'`);
console.log(`Reversed sentence: '${reversedSentence}'`);
*/


// BOOLEANS
/*
1.Create a function that checks if two boolean values are not equal.
function areBooleansNotEqual(value1, value2) {
    return value1 !== value2;
}


const bool1 = true;
const bool2 = false;

const notEqual = areBooleansNotEqual(bool1, bool2);

if (notEqual) {
    console.log('The boolean values are not equal.');
} else {
    console.log('The boolean values are equal.');
}


*/




/*
2.Write a program that uses the && operator to determine if a person is eligible for a discount (age > 60 and has a membership).

function isEligibleForDiscount(age, hasMembership) {
  return age > 60 && hasMembership;
}

const personAge = 20;
const personHasMembership = true;

if (isEligibleForDiscount(personAge, personHasMembership)) {
  console.log("The person is eligible for a discount.");
} else {
  console.log("The person is not eligible for a discount.");
}
 



*/




/*
3.Implement a function that converts a truthy value to true and a falsy value to false.



 */



/*
 4.Write a program that uses the || operator to check if a user has completed either Course A or Course B.
 
const userCompletedCourses = ['Course C', 'Course A', 'Course D'];

if (userCompletedCourses.includes('Course A') || userCompletedCourses.includes('Course B')) {
    console.log('The user has completed either Course A or Course B.');
} else {
    console.log('The user has not completed either Course A or Course B.');
}


*/


//SYMBOL

/*1.Use a symbol as a property key in an object and retrieve its value.

// Create a symbol
const mySymbol = Symbol('mySymbol');

// Create an object with a symbol as a property key
const myObject = {
  [mySymbol]: 'Hello, this is the value for mySymbol'
};

// Retrieve the value using the symbol as a key
const retrievedValue = myObject[mySymbol];

console.log(retrievedValue); // Output: Hello, this is the value for mySymbol


 */


/* 
2.Create a function that returns a unique symbol each time it is called.
function generateUniqueSymbol() {
  return Symbol();
}


const symbol1 = generateUniqueSymbol('rashmi');
const symbol2 = generateUniqueSymbol('rashmi');

console.log(symbol1 === symbol2); // Output: false (each call generates a new unique symbol)



*/



/* 
3.Write a program that compares two symbols for equality.
// Create two symbols
const symbol1 = Symbol('rashmi');
const symbol2 = Symbol('rashmi'); // Different symbol with the same description

// Compare symbols for equality
const areSymbolsEqual = symbol1 === symbol2;

// Output the result
console.log(`Are symbols equal? ${areSymbolsEqual}`); // Output: Are symbols equal? false



*/




/*
4.Implement a function that converts a symbol to a string.
function convertSymbolToString(input) {
  if (typeof input === "symbol") {
    return input.toString();
  } else {
    return String(input); // Convert non-symbol input to string
  }
}

const symbolInput = Symbol("rashmi");
const nonSymbolInput = 25;

const symbolString = convertSymbolToString(symbolInput);
const nonSymbolString = convertSymbolToString(nonSymbolInput);

console.log(symbolString); // Output: Symbol(exampleSymbol)
console.log(nonSymbolString); // Output: 42 (converted to string)
console.log(typeof nonSymbolString);


*/



// MAP

/* 
1.Create a Map to store information about different countries (e.g., capital, population).

// Create a Map to store information about countries
const countryInfoMap = new Map();

// Add information about countries to the Map
countryInfoMap.set('Canada', {
  capital: 'Ottawa',
  population: 37742154,
  language: 'English and French',
  currency: 'Canadian Dollar (CAD)'
});

countryInfoMap.set('Germany', {
  capital: 'Berlin',
  population: 83783942,
  language: 'German',
  currency: 'Euro (EUR)'
});

countryInfoMap.set('Japan', {
  capital: 'Tokyo',
  population: 126476461,
  language: 'Japanese',
  currency: 'Japanese Yen (JPY)'
});

// Access information about a specific country
const germanyInfo = countryInfoMap.get('Germany');
console.log('Information about Germany:', germanyInfo);

// Access information about another country
const japanInfo = countryInfoMap.get('Japan');
console.log('Information about Japan:', japanInfo);



*/


/* 
2.Write a program that checks if a specific key exists in a Map.
// Create a Map to store information about countries
const countryMap = new Map();

// Add information about countries to the Map
countryMap.set('Germany', {
  capital: 'Berlin',
  population: 83783942 // example population for 2020
});

countryMap.set('China', {
  capital: 'Beijing',
  population: 1444216107 // example population for 2020
});

countryMap.set('Mexico', {
  capital: 'Mexico City',
  population: 128932753 // example population for 2020
});

// Check if a specific key exists in the Map
const keyToCheck = 'India';
if (countryMap.has(keyToCheck)) {
  const countryInfo = countryMap.get(keyToCheck);
  console.log(`Information about ${keyToCheck}:`, countryInfo);
} else {
  console.log(`${keyToCheck} is not found in the Map.`);
}




*/




/* 
3.Develop a function that returns an array of values from a Map.
function mapValuesToArray(inputMap) {
  // Using the spread operator to convert Map values to an array
  return [...inputMap.values()];
}


const countryMap = new Map();
countryMap.set('Japan', { capital: 'Tokyo', population: 126476461 });
countryMap.set('France', { capital: 'Paris', population: 65273511 });
countryMap.set('Australia', { capital: 'Canberra', population: 25499884 });

const valuesArray = mapValuesToArray(countryMap);
console.log('Array of Map values:', valuesArray);



*/



/* 
4.Use the forEach method to iterate over the entries of a Map and print them.

// Create a Map
const countryMap = new Map();
countryMap.set("Germany", { capital: "Berlin", population: 83783942 });
countryMap.set("China", { capital: "Beijing", population: 1444216107 });

// Use forEach to iterate over entries and print them
countryMap.forEach((value, key) => {
  console.log(`${key}:`, value);
});


*/






// SET

/* 1.Write a program to find the union of two sets.

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Find the union of setA and setB
const unionResult = new Set([...setA, ...setB]);

// Convert the result back to an array for easier display
const unionArray = Array.from(unionResult);

// Output the result
console.log('Set A:', Array.from(setA));
console.log('Set B:', Array.from(setB));
console.log('Union of Set A and Set B:', unionArray);

*/



/* 2.Implement a function that checks if a given set is a subset of another set.

function isSubset(subset, superset) {
  // Iterate through the elements of the subset
  for (const element of subset) {
    // Check if each element is present in the superset
    if (!superset.has(element)) {
      return false; // If any element is not present, it's not a subset
    }
  }
  return true; // All elements are present, it's a subset
}

// Example sets
const setA = new Set([1, 2, 3]);
const setB = new Set([1, 2, 3, 4, 5]);

// Check if setA is a subset of setB
const isSubsetResult = isSubset(setA, setB);

// Output the result
console.log('Set A:', Array.from(setA));
console.log('Set B:', Array.from(setB));
console.log('Is setA a subset of setB?', isSubsetResult);



*/

/* 3.Create a program that removes duplicate elements from an array using a Set.

// Example array with duplicates
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7];

// Use a Set to remove duplicates
const arrayWithoutDuplicates = [...new Set(arrayWithDuplicates)];

// Output the results
console.log('Array with duplicates:', arrayWithDuplicates);
console.log('Array without duplicates:', arrayWithoutDuplicates);


*/




/* 
4.Develop a function that returns the intersection of two sets.
function findIntersection(set1, set2) {
  return new Set([...set1].filter(element => set2.has(element)));
}


const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Find the intersection of setA and setB
const intersectionResult = findIntersection(setA, setB);

// Convert the result back to an array for easier display
const intersectionArray = Array.from(intersectionResult);

// Output the result
console.log('Set A:', Array.from(setA));
console.log('Set B:', Array.from(setB));
console.log('Intersection of Set A and Set B:', intersectionArray);



*/

//LOOPS
/*
1.Create a program using a for...of loop to iterate over the elements of an array.

const myArray = [1, 2, 3, 4, 5];

// Using a for...of loop to iterate over the elements of the array
for (const element of myArray) {
  console.log(element);
}

 */



/*
2.Implement a while loop that prints the Fibonacci sequence up to the 10th term.

// Initialize variables for the first two terms of the Fibonacci sequence
let firstTerm = 0;
let secondTerm = 1;

// Counter for the number of terms printed
let count = 0;

// While loop to print the Fibonacci sequence up to the 10th term
while (count < 10) {
  console.log(firstTerm);

  // Calculate the next term in the sequence
  const nextTerm = firstTerm + secondTerm;

  // Update variables for the next iteration
  firstTerm = secondTerm;
  secondTerm = nextTerm;

  // Increment the counter
  count++;
}



*/

/*
3.Write a program using the continue statement to skip odd numbers in a loop.

// Example loop to print even numbers and skip odd numbers
for (let i = 1; i <= 10; i++) {
  // Skip odd numbers using the continue statement
  if (i % 2 !== 0) {
    continue;
  }

  // Print even numbers
  console.log(i);
}




 */




/*
4.Use the map method to square each element in an array and store the result in a new array.

// Example array
const originalArray = [1, 2, 3, 4, 5];

// Use the map method to square each element and store the result in a new array
const squaredArray = originalArray.map(element => element ** 2);

// Output the result
console.log('Original Array:', originalArray);
console.log('Squared Array:', squaredArray);





*/



/*
5.Develop a program that uses the break statement to exit a loop when a specific condition is met.

// Example loop with a break statement
for (let i = 1; i <= 10; i++) {
  console.log(i);

  // Exit the loop when the condition is met
  if (i === 5) {
    console.log('Condition met. Exiting the loop.');
    break;
  }
}






*/


// OBJECTS

/*
1.Create a method within an object that concatenates two strings.

const stringConcatenationObject = {
  concatenateStrings: function (str1, str2) {
    return str1 + str2;
  }
};


const result = stringConcatenationObject.concatenateStrings('Hello, ', 'World!');
console.log(result); // Output: Hello, World!





*/




/* 
2.Write a program that checks if an object is empty.
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Example objects
const emptyObject = {};
const nonEmptyObject = { key: 'value' };

// Check if objects are empty
console.log('Is emptyObject empty?', isObjectEmpty(emptyObject)); // Output: true
console.log('Is nonEmptyObject empty?', isObjectEmpty(nonEmptyObject)); // Output: false





*/


/*
3.Implement an object constructor for a 'Car' with properties like model and year.

// Car constructor function
function Car(model, year) {
  this.model = model;
  this.year = year;
}


const myCar = new Car('Toyota Camry', 2022);

// Accessing properties of the created car
console.log('Car Model:', myCar.model); // Output: Toyota Camry
console.log('Car Year:', myCar.year);   // Output: 2022




*/



/*
4.Develop a function that deep clones an object (copies nested objects and arrays).






*/




/*
5.Write a program that extracts all values from an object and stores them in an array.
// Example object
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'traveling']
};

// Extract values from the object and store them in an array
const valuesArray = Object.values(myObject);

// Output the result
console.log('Original Object:', myObject);
console.log('Values Array:', valuesArray);

*/



// ARRAYS 

/*
1.Create a function that returns the index of the first occurrence of a specific element in an array.

function indexOfElement(array, element) {
  return array.indexOf(element);
}


const myArray = [1, 2, 3, 4, 5];
const elementToFind = 3;

// Find the index of the first occurrence of the element
const elementIndex = indexOfElement(myArray, elementToFind);

// Output the result
console.log('Array:', myArray);
console.log(`Index of ${elementToFind}:`, elementIndex);



*/


/*
2.Write a program that concatenates two arrays without modifying the original arrays.

function concatenateArraysSpread(array1, array2) {
  return [...array1, ...array2];
}


const arrayA = [1, 2, 3];
const arrayB = ['a', 'b', 'c'];

// Concatenate arrays without modifying the originals using spread
const concatenatedArraySpread = concatenateArraysSpread(arrayA, arrayB);

// Output the results
console.log('Original Array A:', arrayA);
console.log('Original Array B:', arrayB);
console.log('Concatenated Array (using spread):', concatenatedArraySpread);






*/


/*
3.Implement a function that removes duplicate elements from an array.

function removeDuplicatesWithSet(array) {
  return [...new Set(array)];
}


const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7];

// Remove duplicates from the array using Set
const arrayWithoutDuplicatesSet = removeDuplicatesWithSet(arrayWithDuplicates);

// Output the results
console.log('Array with Duplicates:', arrayWithDuplicates);
console.log('Array without Duplicates (using Set):', arrayWithoutDuplicatesSet);





*/


/* 
4.Use the reduce method to find the sum of all elements in an array.

function sumArrayElements(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


const numbers = [1, 2, 3, 4, 5];

// Find the sum of all elements in the array using reduce
const sum = sumArrayElements(numbers);

// Output the results
console.log('Array:', numbers);
console.log('Sum of Array Elements:', sum);





*/


/*
5.Develop a program that checks if an array is sorted in ascending order.

function isArraySortedAscending(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}


const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 8, 1, 4];

// Check if arrays are sorted in ascending order
const isSortedSorted = isArraySortedAscending(sortedArray);
const isUnsortedSorted = isArraySortedAscending(unsortedArray);

// Output the results
console.log('Sorted Array:', sortedArray);
console.log('Is sorted in ascending order?', isSortedSorted);

console.log('Unsorted Array:', unsortedArray);
console.log('Is sorted in ascending order?', isUnsortedSorted);




*/


// STRINGS

/*
1.Write a function that checks if a string is a valid palindrome, ignoring spaces and case.

function isPalindrome(str) {
  const cleanedStr = str.replace(/[\s]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


const palindromeString = 'A man a plan a canal Panama';
const nonPalindromeString = 'Hello, World!';

// Check if strings are valid palindromes
const isPalindromeResult = isPalindrome(palindromeString);
const isNonPalindromeResult = isPalindrome(nonPalindromeString);

// Output the results
console.log('String:', palindromeString);
console.log('Is Palindrome?', isPalindromeResult);

console.log('String:', nonPalindromeString);
console.log('Is Palindrome?', isNonPalindromeResult);




*/


/*
2.Create a program that replaces all occurrences of a specific word in a string.

function replaceWord(inputString, targetWord, replacement) {
  // Use the replace() method with a regular expression to replace all occurrences of the target word
  var modifiedString = inputString.replace(new RegExp(targetWord, 'g'), replacement);
  return modifiedString;
}


var inputString = "This is a sample sentence. Replace the word 'sample' with 'new'.";
var targetWord = "sample";
var replacement = "new";

var modifiedString = replaceWord(inputString, targetWord, replacement);

console.log("Original String:");
console.log(inputString);

console.log("\nModified String:");
console.log(modifiedString);






*/



/*
3. Implement a function that truncates a string to a specified length and adds ellipsis.

function truncateString(str, maxLength) {
  // Check if the string is longer than the specified length
  if (str.length > maxLength) {
    // Truncate the string and add ellipsis
    return str.slice(0, maxLength) + '...';
  } else {
    // Return the original string if it's not longer than the specified length
    return str;
  }
}


var originalString = "This is a sample sentence that needs to be truncated.";
var maxLength = 20;

var truncatedString = truncateString(originalString, maxLength);

console.log("Original String:");
console.log(originalString);

console.log("\nTruncated String:");
console.log(truncatedString);






*/


/*
4.Write a program that counts the occurrences of each character in a string.

function countCharacters(inputString) {
  return inputString.split('').reduce((charCount, char) => {
    charCount[char] = (charCount[char] || 0) + 1;
    return charCount;
  }, {});
}


var inputString = "programming is fun";

var result = countCharacters(inputString);

console.log("Character Occurrences:");
console.log(result);





*/


/*
5.Develop a function that capitalizes the first letter of each sentence in a paragraph.


function capitalizeSentences(paragraph) {
  // Use a regular expression to find the end of sentences (periods followed by space)
  var sentences = paragraph.split(/\. /);

  // Capitalize the first letter of each sentence
  var capitalizedSentences = sentences.map(function (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  // Join the sentences back together with periods and spaces
  var result = capitalizedSentences.join('. ');

  return result;
}


var paragraph = "this is a sample paragraph. it has multiple sentences. let's capitalize the first letter of each.";

var capitalizedParagraph = capitalizeSentences(paragraph);

console.log("Original Paragraph:");
console.log(paragraph);

console.log("\nCapitalized Paragraph:");
console.log(capitalizedParagraph);





*/



// Boolean

/*
1.Create a program that uses the ternary operator to determine if a number is even or odd.

function checkEvenOdd(number) {
  var result = (number % 2 === 0) ? "even" : "odd";
  return result;
}


var numberToCheck = 7;

console.log(numberToCheck + " is " + checkEvenOdd(numberToCheck));

*/


/*
2.Implement a function that checks if an array contains only truthy values.

function allTruthy(arr) {
  // Use the every() method to check if all elements in the array are truthy
  return arr.every(function(element) {
    return !!element; // Convert the element to a boolean using the double negation (!!) operator
  });
}


var array1 = [true, 1, "hello", 42];
var array2 = [true, 1, "", 42];

console.log("Array 1 is all truthy:", allTruthy(array1)); // true
console.log("Array 2 is all truthy:", allTruthy(array2)); // false





*/


/*
3.Write a program that uses the logical NOT operator to toggle a boolean variable.


// Initial boolean variable
var isToggle = false;

// Toggle the boolean variable using the logical NOT operator
isToggle = !isToggle;

// Print the result
console.log("Toggled value:", isToggle);


*/



/*
4.Develop a function that checks if a variable is of type boolean.


function isBoolean(variable) {
  return typeof variable === 'boolean';
}


var boolVariable = true;
var nonBoolVariable = "not a boolean";

console.log("boolVariable is boolean:", isBoolean(boolVariable)); // true
console.log("nonBoolVariable is boolean:", isBoolean(nonBoolVariable)); // false


*/



/*
5.Use the XOR operator to swap the values of two boolean variables without using a temporary variable.


function swapBooleans(a, b) {
  // Use XOR to swap values without a temporary variable
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
}


var bool1 = true;
var bool2 = false;

console.log("Before swap: bool1 =", bool1, "bool2 =", bool2);

// Call the function to swap values
var result = swapBooleans(bool1, bool2);

// Display the result
console.log("After swap: bool1 =", result[0], "bool2 =", result[1]);





*/



// Symbol
/* 
1.Write a program that uses symbols as property keys in an object and prints them.


// Creating symbols
const symbol1 = Symbol('key1');
const symbol2 = Symbol('key2');

// Creating an object with symbols as property keys
const myObject = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2'
};

// Accessing and printing values using symbols
console.log("Value for symbol1:", myObject[symbol1]);
console.log("Value for symbol2:", myObject[symbol2]);

// Listing symbols used as keys in the object
const symbolKeys = Object.getOwnPropertySymbols(myObject);
console.log("Symbols used as keys:", symbolKeys);

// Iterating through the symbols and their corresponding values
for (const symbol of symbolKeys) {
  console.log(`Symbol: ${symbol.toString()}, Value: ${myObject[symbol]}`);
}





*/



/*
2.Implement a function that checks if a value is a symbol.

function isSymbol(value) {
  return typeof value === 'symbol';
}


var symbol1 = Symbol('key1');
var symbol2 = Symbol('key2');
var stringValue = 'not a symbol';

console.log("Is symbol1 a symbol?", isSymbol(symbol1)); // true
console.log("Is symbol2 a symbol?", isSymbol(symbol2)); // true
console.log("Is stringValue a symbol?", isSymbol(stringValue)); // false



*/


/*
3.Create a program that uses the Object.getOwnPropertySymbols method to retrieve all symbols from an object.


// Create symbols
const symbol1 = Symbol('key1');
const symbol2 = Symbol('key2');

// Create an object with symbols as properties
const myObject = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2',
  regularKey: 'Value for regularKey'
};

// Get all symbols from the object
const symbolKeys = Object.getOwnPropertySymbols(myObject);

// Print the symbols and their corresponding values
console.log("Symbols and their values:");
for (const symbol of symbolKeys) {
  console.log(`Symbol: ${symbol.toString()}, Value: ${myObject[symbol]}`);
}


*/



/*
4.Develop a function that generates a unique symbol based on a given string.

function generateUniqueSymbol(key) {
  return Symbol(key);
}


var uniqueSymbol1 = generateUniqueSymbol('key1');
var uniqueSymbol2 = generateUniqueSymbol('key2');

console.log("Symbol for key1:", uniqueSymbol1);
console.log("Symbol for key2:", uniqueSymbol2);

// Check if symbols are unique
console.log("Are the symbols unique?", uniqueSymbol1 !== uniqueSymbol2);





*/



// MAP  

/*
1.Write a program that merges two Maps into a new Map.





*/


/*




*/


/*




*/

/*




*/



/*




*/



/*




*/



/*




*/



/*




*/



/*




*/




/*




*/