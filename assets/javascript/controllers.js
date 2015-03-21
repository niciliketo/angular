var groupControllers = angular.module('groupControllers', []);

groupControllers.controller('groupCtrl', [ '$scope', 'Group', 'sharedService', function($scope, Group, sharedService) {
  $scope.groups = Group.index();
  $scope.orderProp = 'name';
  this.groupId = 0;
  $scope.selectGroup = function(setGroup){
    this.groupId = setGroup;
    // Broadcast the change of Group
    sharedService.prepForBroadcast(setGroup);
  };
  $scope.isSelected = function(checkGroup){
	  return this.groupId === checkGroup;
  };
  $scope.deleteGroup = function(setGroup){
    debugger;
    g = Group.delete($scope.group);
  };
}]);

groupControllers.controller('groupDetailCtrl', ['$scope', 'Group', 'sharedService', function($scope, Group, sharedService) {

    $scope.$on('handleBroadcast', function() {
        $scope.message = 'groupDetailCtrl: ' + sharedService.message;
        $scope.group = Group.show({id: sharedService.message});
    });
}]);

groupControllers.controller('groupCreateCtrl',  ['$scope', 'Group', function($scope, Group) {
  $scope.group = {};
  $scope.addGroup = function(){
    g = Group.create($scope.group);
    $scope.groups.push(g);
  }
}]);