 //=====code-1====== takes a func as an argument
 function fun(f1) {
  console.log("value of f1", f1)
}

 fun(10)//value of f1 10
fun(true)//value of f1 true
fun("JT")//value of f1 JT  //normal func

function hello() {
 console.log("Hello Everyone!!!")
   return 100//if there is no return value it returns"undefined"
 }
//hello() func execute hoga
fun(hello())//Hello Everyone!!! //normal func
            // value of f1 100(return value)
 // //HOF
fun(hello)//prints definition  for hello(Takes it as an argument) function //Function reference milega, execute nahi hoga.
 //here fun is hof ,hello is call back func




// ==========code2============returns a func as an argument
function f3() {
  console.log("This is f3 function")
}

function f1() {
  console.log('This is f1 function')

//return 101
      return function f2() {
     console.log('This is f2 function')
       }
//return f3
}

let x = f1()
console.log("//////////", x)
x()


//============== setTimeout, setInterval =========
// console.log(1)
// console.log(2)
// console.log(3)

// console.log(1)
// setTimeout(f1, 3000)
// console.log(3)

// function f1() {
//   console.log("Hiiiiiii")
// }

// const intervalId = setInterval(f1, 2000)
// console.log("/////////////", intervalId)
// const timerId = setTimeout(function () {
//   console.log("Clearing interval")
//   clearInterval(intervalId)
//   clearTimeout(timerId)
// }, 10000)

// setTimeout()

// ==============================
console.log(1)
const id = setTimeout(function () {
  console.log(":::::::::")
}, 1000)
clearTimeout(id)
console.log(2)


//==============
// ==============================
console.log(1)
const pd = setInterval(function () {
  console.log(":::::::::")
}, 1000)
clearInterval(pd)
console.log(2)