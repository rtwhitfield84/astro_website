"use strict";

app.factory('TabStorage', ($http, $window, RootFactory) => {

  let deleteFromTabYard = (id) => {
  return new Promise ((resolve, reject) =>{
    $http({
        method: 'DELETE',
        url: `https://api-astro.herokuapp.com/tabs/${id}/`,
      headers: {
        'Authorization': "Token " + RootFactory.getToken()
      }
    }).success((res) => {
      resolve(res);
    }).error((res) => {
      reject(res);
    });
  });

  };
    return {deleteFromTabYard};
  });