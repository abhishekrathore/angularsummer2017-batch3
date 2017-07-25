angular
.module("mainApp",['firebase'])
.controller("firstCtrl",firstCtrl)


function firstCtrl($firebaseArray){

      var first = this;
      first.loading = true;

      var studentsRef  = firebase.database().ref("students")
      var practiceRef  = firebase.database().ref("angularpractice")


      first.students = $firebaseArray(studentsRef);
      first.practice = $firebaseArray(practiceRef);
      console.log(first.students);

        first.students.$loaded()
        .then(function(data){
            console.log(data);
            first.loading = false;
        })
         .catch(function(err){
            console.log(err);

         })


      first.practice.$loaded()
      .then(function(data){
            console.log(data);
            first.loading = false;
        })
         .catch(function(err){
            console.log(err);

         })
        

         console.log("end")



    var a  = getValue();
    var promiseOfA = "pending";
    
    promiseOfA.then(function(data){
            console.log(a);
    })




    a.th






}