var balance = 40;
var price = 50;

if(price < balance){
    console.log('payment succesfull');
    balance -= price;
}else{
    console.log('you don\'t have enough funds');

}

var speed = 80

if(speed > 70){
    console.log("Too fast");
}else if(speed < 40){
    console.log("Too slow");
}else{
    console.log("Ok");
}