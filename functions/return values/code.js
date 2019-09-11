//returns undefined
function greeting(){
    console.log('Hello');
}

greeting();

//returns a value
function sum(a, b){
    return a + b;
}
var x = sum(4, 3);
console.log(x);

//return a function
function greet(x){
    return function(name){
        console.log(x + " " + name + "!");
    }
}

greet('Hello')('John');