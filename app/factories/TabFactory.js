"use strict";

app.factory('TabStorage', ($http, $window, RootFactory) => {

  let user = '';

    let getTabs = () => {
  return new Promise((resolve, reject) => {
    $http({
      url: "https://api-astro.herokuapp.com/tabs/",
      method: 'GET',
      headers: {
        'Authorization': "Token " + RootFactory.getToken()
      }
    }).success((tabs) => {
      
      resolve(tabs);
    }).error((err) => {
      reject(err);
    });
  });
  };

  let getCurrentUser = (id) => {
      return new Promise ((resolve, reject) =>{
    $http({
        method: 'GET',
        url: `https://api-astro.herokuapp.com/users/${id}/`,
      headers: {
        'Authorization': "Token " + RootFactory.getToken()
      }
    }).success((res) => {
      user = res.username;
      resolve(res);
    }).error((res) => {
      reject(res);
    });
  });
  };
  

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
    return {getTabs,deleteFromTabYard,getCurrentUser, user};
  });