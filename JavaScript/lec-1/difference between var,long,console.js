//    To find scope red button ,refresh(c+s+R) ,Curvy-> excutes values , ->to go to next step
// var a=10;
// //function declared
// function myFun(){//LOCAL SCOPE IS FUNC S COPE

//     let var1=10;
//     const var2=20;
//     var var3=30;
//     console.log(a);
// }
// // function name is myFun.
// //varaiable  declared.
// myFun();



// // console.log(var1)
// // console.log(var2)
// // console.log(var3)


// ============ DT - 20 7 26
// i)
//jo func m define ni ha wo global scope p jayega
// {
//   let a = 10;
//   const b = 20;
//   var c = 30//var is not sa block scope(block k andar access ni kar sakte).
// }

// function fun() {
//   debugger
//   let a1 = 10;
//   const b1 = 20;
//   var c1 = 30//let aur const block-scoped hote hain, function-scoped nahi.
//  // Lekin agar function ke andar declare kiye hain, toh function ke bahar access nahi kar sakte.
//   //here var is func scoped,we can access it inside func.
//   //var is also global scoped but not block scoped.

//   console.log("hiiiiiii")//Prints when debugger stops
// }

// fun()


// // // ii)//Reassignment (Value change karna)
// const name = "Sai"
// console.log("Before reassign", name)
// name = 'Pranab'
// console.log('After reassign', name)


//iii)//redeclrarion of const is not allowed
// const instituteName = "JT"
// console.log("instituteName-------", instituteName)
// const instituteName = "Java Technocrat"//(redeclrarion of const is not allowed)
// console.log("instituteName=======", instituteName)

//iv)//Hoisting (Declaration se pehle access)
debugger
console.log(x)//var → Can be accessed before declaration, but value is undefined.
console.log(y)//declaration se pehle access nahi kar sakte,

var x = 10//undefined
 let y = 20;//REferenceError
const z = 30//ReferenceError