// penggunaan hasOwnProperty() untuk cek apakah objek memiliki properties
//  atau bisa menggunakan in => "alan" in data

// users.hasOwnProperty('Alan');
// 'Alan' in users;

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // console.log(
    //   users.map(data=> {userObj.hasOwnProperty(data)})

    // )
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }

  console.log(isEveryoneHere(users))

//   Iterate Through the Keys of an Object with a for...in Statement
// NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
// thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

// ! TASK
//? The function countOnline should use a for in statement to iterate through the object keys of the object passed to it.
//? Waiting:The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it
//? Waiting:The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it
//? Waiting:The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it

const userss = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }
  const use = {
    online: false, online: false, online: false
    
  }
  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      // console.log(user)
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(userss));
  // console.log("use",countOnline(use));


//   Generate an Array of All Object Keys with Object.keys() -> mengambil properti dari object dan disimpan sebagai array
// We can also generate an array which contains all the keys stored in an object with the Object.keys() method. This method 
// takes an object as the argument and returns an array of strings representing each property in the object. Again, there will be no specific order to the entries in the array.

  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));