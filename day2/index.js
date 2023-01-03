// function userName(name,callback){
//     console.log("hii",name)
//     callback()
// }

// function callMeBack(){
//     console.log("I am CallBack")
// }

// userName("Arjun",callMeBack)

// var promise=new Promise(function (resolve,reject){
//     const x="gfg";
//     const y="gfg"
//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     }
// })

// promise.
// then(()=>{
//     console.log("success,you are a geek");
// }).catch(function(){
//     console.log("some error has occured");
// })

// const getData = async() => {
//     var data = "Hello World";
//     return data;
//     }

//     getData().then(data => console.log(data));

// const getData = async() => {
//     var y =  "Hello World";
//     await console.log(y);
//     console.log("d");
// }

// console.log(1);
// getData();
// console.log(2);

// const getData=async ()=>{
// var y="Hellow World";
// await console.log(y);
// console.log("x")
// }

// console.log("1");
// getData();
// console.log("2")

//rest parameter

// function sumAdd(...z){
//    var total=0
//    console.log(z)
// for(const arg of z){
//     total+=arg;
// }
// return total
// }

// console.log(sumAdd(1,2,34,5))

// //spread operator

// function expand(Number){
//     console.log(...Number)
// }

// Number=[1,2,3]

// expand(Number)

//rest parameter

// function alpha1(a, b,...c){
//     console.log(c)
// }

// alpha1(1,2,3,4,6)

//spread operator

// function alpha(Number){
//     console.log(Number)
//     console.log(...Number)
// }
// Number=[1,2,45,6]
// alpha(Number)

// function greetUser(name,callback){
//     console.log("hi",name)
//     callback()
// }

// function callback(){
// console.log("hi i am call me back")
// }

// greetUser("Arjun",callback)


//A promise may be in one of 3 possible states: Fullfiled, rejected or pending.
// fulfilled: means that the operation was completed successfully. rejected: means that the
// operation failed.
// And pending is the default state of promise , the promise in in the pending state until promise
// get’s resolve or rejected.
// const promise = new Promise((resolve, reject) => {
//   x = "gfg";
//   y = "gfdg";

//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(() => {
//     console.log("fullfilled");
//   })
//   .catch(() => {
//     console.log("error occured");
//   });




async function alpha(){
    console.log("1")
    await console.log("2")
    console.log("3")
}


alpha();
console.log("4")
console.log("5")