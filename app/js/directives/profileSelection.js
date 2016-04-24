angular.module("app").directive("profileSelection", function() {
  return  {
    restrict: 'E',
    templateUrl: 'templates/partials/map/profileSelection.html',
    replace: true,
    controller:  function($scope, $filter, TrackService){

      $scope.showHeightProfile = true;
      $scope.showRiseProfile = false;
      $scope.showSpeedProfile = false;
      
    }
  };
});
