// No 1
// Which of the following is not one of the new ES6 features? Hoisting

// No 2
const num = 5;
const calc = (x,y,z = num) => {
    return x + y + z;
}

// No 3
const arr1 = [1,2,3];
const arr2 = [5,6,7,8];
let arr3 = [...arr1,4,...arr2];


// No 4
const arr1 = [1,2,3,4,5];
const arr2 = [...arr1,6];
const func = (...rest) => {
    console.log(rest.length);
}
func(...arr1);
func(...arr2);

// No 5
const square = num => num * num;
console.log(square(6) + 6);

// No 6
const user = {
    name: 'David',
    age: 28,
    id: 1234
}

let newUser = Object.assign({},
    {name, age} = user,
    {id: 9999});
console.log(newUser);

// No 7
let myMap = new Map();
myMap.set('zero',0);
myMap.set('one',1);
for(let[key,value] of myMap){
    console.log('${key} = ${value}');
}