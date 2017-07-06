var text = "This is my name";
var joined = text.split(" ").reverse().join(" ")
console.log(joined);
var join2 = text.split("").reverse().join()

sum(1,2)


function sum(a,b){               //HOISTING
    console.log(a+b);
}

var speak = function(){
    console.log("hello");
}

speak()

var person = {};
person.name = "abhishek";
person.age = 20;
person.subject = "web";
person.talk = function(){
    console.log("hi")
}

person.talk();

var numbers = [{type:"L",number:"+1417788888"},{type:"M",number:"9878899888"}]

person.numbers = numbers

console.log(person)