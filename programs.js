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




*/



/* */
/* */
/* */
/* */