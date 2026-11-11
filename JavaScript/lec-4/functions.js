// 1. function declaration
// function <fun_name>(list of params) {}
function myFun() {
  console.log("Good Morning!!!")
}
 myFun()




function greet(name = 'JT'){//'JT' → Default value//parameter: name //greet:func name
  console.log("Good Morning", name, '!!!')
}
greet("Rashmi Sir")
greet(10)
greet(true)
greet()//here prints the default value('JT')
 greet("Sai", 10, 20, 30)




function addJTTag(name) {//pararmeter:name
  return "JT'ans " + name
}
addJTTag();

let updatedName = addJTTag("BP")//name declare ni kiya gaya h addJTTag func m
// //y upper line name update karti h
console.log(updatedName)//JT'ans BP