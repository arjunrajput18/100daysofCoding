//day1
//Rest & Spread Operator
//==================REST Parameter===================
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
//Example Rest

function addNumbers(a,b,c,...other){
    console.log(other)
    return a+b+c;
}

const res=addNumbers(2,3,45,6,7,8,9)
console.log(res)

//Spread

var names=["Arjun","Pratik","Vaibhav"];

function getNames(name1,name2,name3){
console.log(name1,name2,name3)
}
getNames(names[0],names[1],names[2])
getNames(...names)



