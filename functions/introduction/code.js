//create a function
function greeting(){
    console.log('Hello');
}

greeting();

//function with a parameter
function greeting2(firstname){
    console.log('Hello ' + firstname);
}
var y = greeting2('Mike');
console.log(y);

greeting2('John');

//more than one parameter
function sum(a, b){
    return a + b;
}

var x = sum(4, 3);
console.log(x);