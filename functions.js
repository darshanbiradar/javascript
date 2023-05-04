function sayHello(name){
    console.log("Hello, "+name+"!.")
}
sayHello("Darshan")
sayHello("dumbo")
function add(a,b){
    return a+b
}
function mult(a,b){
    return a*b
}
console.log(add(2,3))
console.log(mult(2,3))


function greet(name = 'anonymous'){
    console.log(`Hello, ${name}!.`)
}
greet();
greet("Darshan");