angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl(){

    console.log("first")

    var first = this;
    first.items = [];
    first.add = function(x){
  
        first.items.push(x);


    }

}

