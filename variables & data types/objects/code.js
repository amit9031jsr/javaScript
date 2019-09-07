//objects quick overview

//object = collection of properties
var myPhone = {
    make: "Apple",
    model: "Iphone 8",
    warranty: 12,
    colour: "blue"
}

console.log(myPhone);
console.log(myPhone.model);

//change property
myPhone.model = "Iphone 7";
console.log(myPhone);

//add new property
myPhone.storage = "64 GB";
console.log(myPhone);

//delete property
delete myPhone.storage;
console.log(myPhone);

var x = 1;
var y = x;
x = 2;
console.log(y);

var myOtherPhone = myPhone;
console.log(myOtherPhone);

//change myPhone
myPhone.color = "grey";
console.log(myPhone);
console.log(myOtherPhone);