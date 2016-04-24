angular.module("app").factory("TrackService", function($q, $http) {

  var getTracks = function() {
    var deferred = $q.defer();


    var filenames =  $http.get('/tracks').then(function (result) {
      deferred.resolve(result.data);

    }, function (response) {
      CockpitErrorHandlingService.onError(cockpit.ERROR_EVENT_TYPE.SYSTEM_NOT_AVAILABLE_MESSAGE, response);
      deferred.reject(response);
    });

        return deferred.promise;

   
  };

  return { getTracks: getTracks };
});
