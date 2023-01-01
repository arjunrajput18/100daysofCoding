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
//The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

var names=["Arjun","Pratik","Vaibhav"];

function getNames(name1,name2,name3){
console.log(name1,name2,name3)
}
getNames(names[0],names[1],names[2])
getNames(...names)

//Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.



