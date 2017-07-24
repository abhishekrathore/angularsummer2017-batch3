angular
.module("mainApp",['firebase'])
.controller("firstCtrl",firstCtrl)


function firstCtrl($firebaseArray){

      var first = this

      var studentsRef  = firebase.database().ref("students")
      first.students = $firebaseArray(studentsRef);

      first.students.$add({name:"abc"});





}