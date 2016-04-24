angular.module("app").directive("mapSelection", function() {
  return  {
    restrict: 'E',
    templateUrl: 'templates/partials/map/mapSelection.html',
    replace: true,
    controller:  function($scope, $filter, TrackService){

      $scope.showHeightProfile = true;

      var colors = ["red","green","blue","red","green","blue"]

      TrackService.getTracks().then(function (result) {

        $scope.maps = [];

        angular.forEach(result, function(value, key) {
          var track = {};
          track.filename = 'data/' + value;
          track.id = key;
          track.label = value;

          $scope.maps.push(track);

        });
      });;

      var allSelected = false;

      $scope.selectAll = function(){
        allSelected = !allSelected;
        angular.forEach($scope.maps, function(value, key) {
            value.selected = allSelected;
        });
      };

      $scope.selectedTracks = function () {
        return $filter('filter')($scope.maps, {selected: true});
      };

      $scope.selectedMapsString = function(){
        var trackList = "";
        angular.forEach($scope.selectedTracks(), function(value, key) {
          trackList +=  ";" + value.filename;
        });
        return trackList;
      };


    }
  };
});
