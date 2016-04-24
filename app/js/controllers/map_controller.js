angular.module("app").controller('MapController', function($scope, $location, AuthenticationService) {
  $scope.title = "Maps";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
  
  $scope.updateMapWithSelection = function(){
    drawMap($scope.selectedTracks());

    //JB.showMap('data/' + $scope.selectedTrack.filename,$scope.selectedTrack.type);
    
  }
  
  var drawMap = function(trackArray){
    JB.showMap(trackArray,$scope.mapType.type);
  }
});
