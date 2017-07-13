angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)


function firstCtrl(){
 
    var first = this;

 console.log("first");
 first.name  = "abc"

 first.chars = ["A","B","C","D"]

 first.showAlert =  function(){
     console.log("show")
     first.show = true;
 }


 first.alert = function(){
        console.log("alert")
 }

 first.add = function(x){
     first.chars.push(x)
 }

}

function secondCtrl(){

console.log("second")

}