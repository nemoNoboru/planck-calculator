var app = angular.module('plank',['ngAnimate'])

app.controller('plankCtrl',['$scope',function ($scope) {
  $scope.stack = []
  $scope.display = ''

  this.add = function (n) {
    console.log('troll');
    $scope.display += n
  }

  this.push = function () {
    $scope.stack.push(parseInt($scope.display))
    $scope.display = ''
  }

  this.sum = function () {
    var n = $scope.stack.pop()
    var n1 = $scope.stack.pop()
    $scope.stack.push(n+n1)
    $scope.display = n+n1
  }
}])
