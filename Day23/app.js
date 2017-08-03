angular
.module("mainApp",['firebase'])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseAuth,$location){

  var todo = this

  var auth = $firebaseAuth();



  todo.login = function(){
        auth.$signInWithPopup("facebook").then(function(result) {
        console.log("Signed in as:", result.user);
          $location.path("/home");

      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });

//       auth.$signInWithEmailAndPassword("my@email.com", "password").then(function(firebaseUser) {
//   console.log("Signed in as:", firebaseUser.uid);
// }).catch(function(error) {
//   console.error("Authentication failed:", error);
// });
  }
      



}