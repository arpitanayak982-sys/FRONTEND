function increment() {
  let number = 10
  return function plusOne() {
    console.log("Adding one")//adding one
    number++
    console.log("number value is ", number)
  }
}

const nestedFun = increment()
// console.log("//////", nestedFun)
nestedFun()//number value is 11(10+1)
nestedFun()//number value is 12(11+1)