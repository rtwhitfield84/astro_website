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

  $scope.login = function() {
      $http({
        url: "https://api-astro.herokuapp.com/api-token-auth/",
        method: "POST",
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          RootFactory.setToken(res.data.token);
          if (res.data.token !== "") {
              $location.path('/my_tab_yard');
          }
        },
        console.error
      );
  };


}]);