function speak(){
    console.log("speak");
   // alert("hey");
}

var talk = function(){
    console.log("talk")
}


function tell(x){
console.log("tell");
  x();
}

tell(speak);
tell(talk);
tell(function(){
     console.log("heyy")
    })


function calc(fx,a,b){   
    return fx(a,b)
}


function sum(x,y){
    return x+y
}

function product(x,y){
    return x*y
}


//setTimeout(speak,3000)
//setInterval(speak,1000)



function showTime(){
    var d = new Date();
    console.log(d);
}
//setInterval(showTime,1000)
var r = Math.round(Math.random()*90)+10;
console.log(r);

var answer = confirm("are you sure ?");
console.log(answer);

var output = prompt("Tell me your name");

console.log(output)
console.log("end");






