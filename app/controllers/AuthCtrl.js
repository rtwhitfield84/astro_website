"use strict";

app.controller('AuthCtrl', [
  '$scope',
  '$http',
  '$location',
  'RootFactory',
function($scope, $http, $location, RootFactory,$rootScope) {

  $scope.user = {
    username: "",
    password: ""
  };

  // $scope.register = function() {
  //     $http({
  //       url: "https://api-astro.herokuapp.com/api-token-auth/",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //       },
  //       data: {
  //         "username": $scope.user.username,
  //         "password": $scope.user.password,
  //         "email": $scope.user.email,
  //         "first_name": $scope.user.first_name,
  //         "last_name": $scope.user.last_name
  //       }
  //     }).then(
  //       res => {
  //         RootFactory.setToken(res.data.token);
  //         console.log(RootFactory.getToken());
  //         if (res.data.success === true) {
  //             $location.path('/');
  //         }
  //       },
  //       console.error
  //     );
  // };


  $scope.login = function() {
  	console.log("user", $scope.user);
      $http({
        url: "https://api-astro.herokuapp.com/api-token-auth/",
        method: "POST",
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          console.log("res", res);
          // $rootScope.currentUser = res.config.data.username;
          RootFactory.setToken(res.data.token);
          console.log(RootFactory.getToken());
          if (res.data.token !== "") {
            console.log("res.data", res.data );
              $location.path('/my_tab_yard');
          }
        },
        console.error
      );
  };


}]);