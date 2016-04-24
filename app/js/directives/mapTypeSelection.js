angular.module("app").directive("mapTypeSelection", function() {
  return  {
    restrict: 'E',
    templateUrl: 'templates/partials/map/mapTypeSelection.html',
    replace: true,
    controller:  function($scope, $filter, TrackService){

      $scope.mapTypes = [{"type":"Karte","label": "Karte"},
        {"type":"hybrid","label":"hybrid"},
        {"type":"OSM","label":"OSM"},
      {"type":"OSM_Cycle","label" : "OSM Cycle"}];
      $scope.mapType = $scope.mapTypes[2];

    }
  };
});
