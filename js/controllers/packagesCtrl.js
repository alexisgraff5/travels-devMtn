angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){

  $scope.cities = mainSrv.travelInfo;

});
