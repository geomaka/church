var churchApp = angular.module('churchApp',['ngRoute']);

churchApp.config(['$routeProvider',function($routeProvider,$locationProvider){

  // $locationProvider.html5Mode(true);


    $routeProvider

    .when("/", {
        templateUrl : "views/church.html"
      })
  .when("/fellowships", {
    templateUrl : "views/ministries.html"
  })
  .when("/about-us", {
    templateUrl : "views/aboutUs.html"
  })
  .when("/sermons", {
    templateUrl : "views/sermon.html",
    controller : 'sermonController'
  })
}]);


churchApp.controller('sermonController',['$scope','$http',function($scope,$http){
  $scope.sermons = []
  $scope.currentVideo = {}
  $http.get('data/sermons.json').then(function(response){
    $scope.sermons = response.data.videos;
    let sermon = response.data.videos
    $scope.description = sermon[0].description
    $scope.currentVideo = sermon[0].video
    $scope.sermonActivated = sermon[0]
    
    $scope.selectVideo = function(sermon) {
       $scope.currentVideo = sermon.video;
       $scope.description = sermon.description
        $scope.sermonActivated = sermon
    };
    
})
}])
