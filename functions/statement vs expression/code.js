//function statement
function sum(a, b){
    return a + b;
}

//function expression
var greet = function(name){
    console.log("Hello " + name + "!");
};
//use after function creation not before
greet("Mark");

function sum2(myFunction, myArray){
    var result = 0;
    for(var i = 0; i < myArray.length; i ++){
        result += myFunction(myArray[i]);
        // 2 * 1 = 2
        // 2 * 2 = 4
        // 2 * 3 = 6
        // 2 + 4 + 6 = 12
    }
    return result;
}

var y = sum2(function(x){//callback function
    return x * 2;
}, [1, 2, 3]);

console.log(y);