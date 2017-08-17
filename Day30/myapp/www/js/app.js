// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller("firstCtrl",firstCtrl)


function firstCtrl($ionicModal,$scope,$cordovaFlashlight,$cordovaCamera,$cordovaGeolocation, $cordovaLaunchNavigator){
  var first = this;


 








  $ionicModal.fromTemplateUrl('modal.html', {
    scope:$scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    first.modal = modal;
  });
  first.popup = function(){

    // $cordovaFlashlight.toggle()
    
  //  first.modal.show()

  var options = {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    saveToPhotoAlbum: false,
  correctOrientation:true
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
  }, function(err) {
    // error
  });

  }

  $scope.close = function(){
    first.modal.hide()
  }


  first.location = function(){
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
        console.log(lat,long)


        var destination = 'Ajmer';
        var start = [lat,long];
          $cordovaLaunchNavigator.navigate(destination, start).then(function() {
            console.log("Navigator launched");
          }, function (err) {
            console.error(err);
          });




      }, function(err) {
        console.log(err);
      });
  }

}
