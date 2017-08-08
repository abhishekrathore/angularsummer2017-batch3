angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl($http){

var first = this;

var rates;
$http.get("http://api.fixer.io/latest").then(function(result){
 rates = result.data.rates
 first.rates = rates;
 first.base = result.data.base

})


first.convert = function(amt){
  var url = "http://api.fixer.io/latest?base="+first.baseCurrency;
$http.get(url).then(function(result){
   console.log(result);
 rates = result.data.rates
 first.rates = rates;
 first.base = result.data.base

   first.inr = amt * rates[first.currency]



})
}



}