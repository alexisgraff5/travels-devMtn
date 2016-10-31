angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){






  $scope.cities = mainSrv.travelInfo;

  $scope.setImage = function() {
    for (var i = 0; i < $scope.cities.length; i++) {
      if ($stateParams.id == $scope.cities[i].id) {
        $scope.currentCity = $scope.cities[i];
      }
    }
  };
  $scope.setImage();
});
