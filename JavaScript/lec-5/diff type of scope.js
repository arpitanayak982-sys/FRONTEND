var a = 10;
let b = 20

// //Local Scope
// function f1() {
//   var c = 30
//   let d = 40

//   console.log(c)//30
//   console.log(d)//40
// }
// f1();

// console.log(c)// ReferenceError//Func scoped:var c
// console.log(d)//ReferenceError//block scoped:(let d)

// // Block Scope
// {
//   debugger
//   var e = 50
//   let f = 60
//   const n=20

//   console.log(e)//50
//   console.log(f)//60
//   console.log(n)//30
// }

// console.log(e)//50// not blocked scope(block k bahar bhi print hota h)
// console.log(f)//ReferenceError// block scope
//console.log(n)//ReferenceError// block scope


// ---------------- LEXICAL SCOPE
function fun1() {
  debugger
  let x = 30  //The variables or functions declared with let & const are present inside the script scope.
  console.log(x) //x is a variable // x ko fun1() ke bahar directly access nahi kar sakte.

  console.log("Before Calling fun2")
  fun2()
  console.log("After Calling fun2")
  

  function fun2() {//nested function
    let y = 40
    console.log(y)//fun2() ke paas khud x nahi hai.,//Lekin fun2() fun1 ke andar bana hua hai, isliye woh apne outer function fun1() ke variables ko access kar sakta hai.
    console.log("Value of x inside nested fucntion", x)

    function fun3() {
      console.log("Value of y inside fun3", y)//fun3 → fun2
      console.log("Value of x inside fun3", x)//fun3 → fun2 → fun1

      console.log("Value of A inside fun3", a)
      console.log("Value of B inside fun3", b)
    }//Variable nahi mila → JavaScript bahar-bahar search karta hai.fun3 → fun2 → fun1 → Global

    console.log("Before calling fun3")
    fun3()
    console.log("After calling fun3")
  }

  // console.log("Before Calling fun2")
  // fun2()
  // console.log("After Calling fun2")
}

fun1()  