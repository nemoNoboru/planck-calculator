var app = angular.module('plank',['ngAnimate'])

app.controller('plankCtrl',['$scope',function ($scope) {
  $scope.stack = []
  $scope.display = ''
  this.quick = false

  this.sqrt = function () {
    if($scope.display && !this.quick){
      var x = parseInt($scope.display)
      this.done(Math.sqrt(x))
    }else{
      var x = $scope.stack.pop()
      this.done(Math.sqrt(x))
    }
  }

  this.sum = function () {
    this.feed(function (op1,op2) {
      return op1 + op2
    })
  }

  this.mul = function () {
    this.feed(function (op1,op2) {
      return op1 * op2
    })
  }

  this.minus = function () {
    this.feed(function (op1,op2) {
      return op1 - op2
    })
  }

  this.div = function () {
    this.feed(function (op1,op2) {
      return op1 / op2
    })
  }

  this.push = function () {
    $scope.stack.push(parseInt($scope.display))
    $scope.display = ''
  }

  this.drop = function () {
    result = $scope.stack.pop()
    $scope.display = result
    this.quick = true
  }

  this.add = function (n) {
    if(this.quick){
      $scope.display = ''
      this.quick = false
    }
    $scope.display += n
  }

  this.remove = function () {
    if(this.quick){
      $scope.display = ''
      this.quick = false
    }
    $scope.display = $scope.display.slice(0, -1);
  }

  this.done = function (result) {
    $scope.display = result
    this.quick = true
    $scope.stack.push(result)
  }

  this.feed = function (callback) {
    var n = $scope.stack.pop()
    if($scope.display && !this.quick){
      var x = parseInt($scope.display)
      this.done(callback(x,n))
    }else{
      var x = $scope.stack.pop()
      this.done(callback(n,x))
    }
  }

  this.key = function (e) {
    console.log(e.keyCode);
    if(e.keyCode <= 57 && e.keyCode >= 48){
      this.add(e.key)
    }
    if(e.key === '-'){
      this.minus()
    }
    if(e.key === '+'){
      this.sum()
    }
    if(e.key === '/'){
      this.div()
    }
    if(e.key === '*'){
      this.mul()
    }
    if(e.keyCode === 13){
      this.push()
    }
    if(e.keyCode === 8){
      this.remove()
    }
    if(e.keyCode === 190){
      this.drop()
    }
  }
}])
