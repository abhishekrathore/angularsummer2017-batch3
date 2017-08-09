angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl($http){

var first = this;



first.search = search;
function search(name){


var url ="https://gateway.marvel.com/v1/public/characters?apikey=1f1eef6169fc3b523d81a6983f7e14f2&nameStartsWith="+name
var test = "https://demo6199004.mockable.io/students"
$http.get(test).then(function(result){
  console.log(result);
  // first.chars = result.data.data.results;
})

$http.post(test,{name:"abc"}).then(function(result){
  console.log(result);
  // first.chars = result.data.data.results;
})


}
}