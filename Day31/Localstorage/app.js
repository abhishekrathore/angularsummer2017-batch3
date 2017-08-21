angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl($timeout){

  var first = this;
// localStorage.setItem("name","youstart");

var name = localStorage.getItem("name");
console.log(name);
 
var student = {name:"akshay",age:30}
//localStorage.setItem("student",JSON.stringify(student));

var s =localStorage.getItem("student")
console.log(JSON.parse(s));


localforage.setItem("color",student);
localforage.getItem("color").then(function(data){
  
  $timeout(function(){
    first.color = data;    
  },0)
  console.log(first.color);
  
})
first.name = "xyz"
console.log("end")


}