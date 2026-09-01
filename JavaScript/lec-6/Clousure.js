function increment() {
  let number = 10
  return function plusOne() {
    console.log("Adding one")//adding one
    number++
    console.log("number value is ", number)//number value is 11,//number value is 12
  }
}

const nestedFun = increment()
// console.log("//////", nestedFun)
nestedFun()
nestedFun()