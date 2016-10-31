angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainSrv){

  $scope.cities = mainSrv.travelInfo;

});
