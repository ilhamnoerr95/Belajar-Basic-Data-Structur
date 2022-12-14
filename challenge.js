/*
PROFILE LOOKUP

Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
// * SOLUTION 1

// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
    /*
     .hasOwnProperty() method (checks if there’s a given property and returns a boolean)
     with prop as an argument. If it’s true, the value of prop is returned.*/
//         if (contacts[x].hasOwnProperty(prop)) {
//           return contacts[x][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }

/** 
 * Code Explanation
The for loop runs, starting at the first object in the contacts list.
If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
Then, we use .hasOwnProperty() method (checks if there’s a given property and 
returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
If the second if statement fails, No such property is returned.
If the first if statement fails, the for loop continues on to the next object in the contacts list.
If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
Example Run

lookUpProfile("Akira","likes"); runs.
"Akira" is matched to the "firstName" key in the first object, so the if statement returns true.
"likes" is found within the first object, so the second if statement returns true.
The value of "likes" is returned - "Pizza", "Coding", "Brownie Points".
 * 
 */

// * SOLUTION 2

  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
      // console.log(contacts[i])
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Harry", "likes"));
  console.log(lookUpProfile("Bob", "number"))
  console.log(lookUpProfile("Bob", "potato"));
  console.log(lookUpProfile("Akira", "address"));
  