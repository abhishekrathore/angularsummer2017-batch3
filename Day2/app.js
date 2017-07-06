var c="0";
var metros = ["new york","chicago"];
var cities = ["jaipur","delhi","mumbai","chennai"];
console.log(cities);

for(var i=0;i<cities.length;i++){
    console.log(cities[i])
}


if(metros.length && cities.length){
    console.log("true")
}else{
    console.log("false")
}

function speak(){
    console.log("hello")
    return 1
}

console.log(speak())

// Array functions
var name  = "youstart"

var text = "this is my name";

var o1 = "name my is this";
var o2 = "siht si ym eman"

var s =name.split("");
console.log(s);
