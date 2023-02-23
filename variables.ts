// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

let myString:string = "Hello, TypeScript!";
console.log(myString);

// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.

function multiplyNumbers(a:number, b:number):number{
    return a*b;
}

console.log(multiplyNumbers(4,5));

// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.

let myArray:number[] =[1,2,3];

// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.

function reverseString(str:string):string{
    let reversedString ="";
    for(let i=str.length-1; i>=0; i--){
        reversedString += str[i];
    }
    return reversedString;
}

let originalString = "hello";
let reversedString= reverseString(originalString);
console.log(reversedString);


// 5- Declare a variable `myObject` with the properties name, age, and email of type string.

type MyObject = {
    name:string, 
    age:string, 
    email:string
};

let myObject :MyObject = {
    name:"Nova",
    age: "18",
    email: "nova@gmail.com"
};

console.log(myObject);
console.log(myObject.age);
console.log(myObject.name);
console.log(myObject.email);

// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.

function isEven (x:number):boolean{
    if(x % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(3));

// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((value, index, array) => array.indexOf(value) === index);
  }
  const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
    
// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
let myBoolean: boolean = 5 > 2;

// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.

function capitalizeString(str:string):string{
    return str.charAt(0).toUpperCase()+str.slice(1);
}

console.log(capitalizeString("hello"));



