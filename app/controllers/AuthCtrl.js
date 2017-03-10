"use strict";

app.controller('AuthCtrl', [
  '$scope',
  '$http',
  '$location',
  'RootFactory',
function($scope, $http, $location, RootFactory) {

  $scope.user = {
    username: "",
    password: ""
  };

  $scope.register = function() {
      $http({
        url: "http://localhost:8000/register",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name
        }
      }).then(
        res => {
          RootFactory.setToken(res.data.token);
          console.log(RootFactory.getToken());
          if (res.data.success === true) {
              $location.path('/products');
          }
        },
        console.error
      );
  };


  $scope.login = function() {
  	console.log("user", $scope.user);
      $http({
        url: "http://localhost:8000/api-token-auth/",
        method: "POST",
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          RootFactory.setToken(res.data.token);
          console.log(RootFactory.get_token());
          if (res.data.token !== "") {
              $location.path('/products');
          }
        },
        console.error
      );
  };

}]);