(function(){
var groupServices = angular.module('groupServices', ['ngResource']);

groupServices.factory('sharedService', function($rootScope){
  var sharedService = {};

  sharedService.message = '';

  sharedService.prepForBroadcast = function(msg) {
      this.message = msg;
      this.broadcastItem();
  };

  sharedService.broadcastItem = function() {
      $rootScope.$broadcast('handleBroadcast');
  };

  return sharedService;
});

groupServices.factory('Group', ['$resource', '$http',
  function($resource, $http){


    company_id = 2494;
    return $resource('http://localhost:3000/api/v1/companies/2494/groups/:id', { id: "@id", company_id: "@company_id"},
     {
      'create': {method: 'POST', isArray: false},
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    });
  }]);
})();
