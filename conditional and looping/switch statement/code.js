//user input
var userInput = prompt("Please fill the box:");

//transform input to lowercase letters
userInput = userInput.toLowerCase();
console.log(userInput);

switch(userInput){
    case "autumn":
        console.log("it is autumn");
        break;
    case "summer":
        console.log("it is summer");
        break;
    case "spring":
        console.log("it is spring");
        break;
    case "rainy":
        console.log("it is rainy");
        break;
    case "winter":
        console.log("it is winter");
        break;
    default:
        console.log("dont know")
}