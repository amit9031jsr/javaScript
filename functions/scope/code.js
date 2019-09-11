//global variable
var a = 1;

function f(x){
    return x + a;
}
console.log(f(2));

function f2(x){
    var a = 2;
    return x + a;
}
console.log(f2(3));

//if a is not found in the scope of the fn but found in the parameters then the parameter value is going to be used
function g(a){
    // var a = 10;
    return a + 3;
}
console.log(g(5));

function h(x){
    return x + c;
}
console.log(h(2));//c is undefined
var c = 3;
console.log(h(3));//2 + 3