// PENGGUNAAN ARRAY, DATA STRUKTUR YG MUTABLE
// UNSHIFT METHOD MENAMBAH DATA KEDALAM AWALAN ARRAY
// PUSH METHOD MENAMBAH DATA KEDALAM AKHIRAN ARRAY
function mixedNumbers(arr) {
    // Only change code below this line
      arr.unshift('I', 2, 'three')
      arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//   MENGAHPUS DATA ARRAY MENGGUNAKAN POP & SHIFT 
//  MENGHAPUS AWALA DATA DALAM ARRAY MENGGUNAKAN SHIFT 
//  MENGAHPUS AKHIRDATA DI DALAM ARRAY MENGGUNAKAN POP 
function popShift(arr) {
    arr.shift()// Change this line
    arr.pop(); // Change this line
    // destructuring array and update
    [arr[0], arr[1]] = ["challenge", "complete"];
     return arr;
   }
   
   console.log(popShift(['challenge', 'is', 'not', 'complete']));

// ! SPLICE() METHOD AKAN MENG OVERWRITE DATA ARRAY
//    MENGAHAPUS/menambahkan DATA MENGGUNAKAN SPLICE()
// DENGAN PENGGUNAAN SPLICE KITA BISA MENGAHPUS DATA DARI BAGIAN MANAPUN , ALIAS APABILA 
// INGIN MENGAHPUS DI BAGIAN TENGAH ARRAY KITA BISA MENGGUNAKAN SPLICE() ATAU MENGHAPUS LEBIH DARI 1 ARRAY
// PENGGUNAAN SPLICE PARA PARAMETER PERTAMA ADALAH START INDEX YG AKAN DI DELETE
// DILANJUT DENGAN PARAMETER KEDUA YAITU BERAPA JUMLAH DATA YG AKAN DI DELET/DITAMBAH
// DENGAN PENGGUNAA SPLICE, DATA YG SUDAH DISPLACE AKAN BISA MENJADI SEBUAH/ME RETURN ARRAY BARU 
// SAAT PENGGUNAAN SPLICE UNTUK MENGAHPUS ARRAY HANYA MENGGUNAKAN 1 PARAMETER, data start yg mulai dihapus sampai kebelakang akan terhapus
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
console.log("splice return array baru", array.join(" "))
console.log("splice data di hapus",newArray)


// penggunaan splice sebagai penambahan data ARRAY
// data array yg akan ditambah nantinya akan menggunakan parameter yg ketiga 

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

// Copy Array Items Using slice()
// The next method we will cover is slice(). Rather than modifying an array,
// slice() copies or extracts a given number of elements to a new array, 
// leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, 
// and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:
// penggunaan slice() tidak akan mengubah original array 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log("sliceMethd =>", todaysWeather);
// console.log("sliceMethd =>", weatherConditions);



// SPREAD OPERATOR ARRAY 
function copyMachine(arr, num) {
    let newArr = [];
    while (0 < num) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      console.log(num--);
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));

//   dengna menggunakan spread operator bisa memudahkan kita untuk menambah data array 
function spreadOut() {
    let fragment = ['to', 'code'];
    // fragment.splice(0,0,"learning")
  
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());


//   ITERATE THROUGH ALL ARRAY
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        let ayam = arr[i]
        console.log(ayam.indexOf(elem))
        // apabila data ayam indeks true == -1 alias tidak ada maka, push data yg tidak memiliki value 18
        // apabila data index elem= 18 negasi -1 / data ada maka push data yg memiliki value 18
        // PUSH DATA ELEMENT YG GAK ADA ANGKA 18 
        if(ayam.indexOf(elem) == -1) {
          newArr.push(ayam)
        }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log('indexof',filteredArray([[10, 8, 3], [14, 6, 23], [3, 6,18]], 18));

  function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    // push data yg lebih dari angka 10
    if (arr[i] > 10) {
        // PUSH DATA YG ANGKA LEBIH DARI 10
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


// penggunaan indexOf mencari index berapa pada array, apabila indexOf return -1 artinya data tidak ada
let aku = [0,1,2,3]

console.log("index",aku.indexOf(3))