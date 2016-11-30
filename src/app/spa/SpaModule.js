import uiRouter from 'angular-ui-router/release/angular-ui-router'

export const SpaModule = angular.module("app.spa", [
  uiRouter
]);


SpaModule.config(function($stateProvider) {

  $stateProvider.state({
    name: 'categoryList',
    url: '/category-list',
    template: '<category-list></category-list>'
  })
  .state({
    name: 'reciple',
    url: '/reciple',
    template: '<recipe-list> </recipe-list>'
  });
});

SpaModule.config(function($urlRouterProvider){
    // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/index');

    // Example of using function rule as param
    // $urlRouterProvider.otherwise(function($injector, $location){
    //   //
    // });
})
