(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
$scope.menu="";

  $scope.checkTooMuch = function () {
    var menus=$scope.menu;
    var count=menus.split(",").length;
    if(menus==""){
      $scope.message="Please enter data first";
    }
    else if(count<=3){// do NOT consider and empty item, i.e.,item 2 , ,item 4
      $scope.message="Enjoy!";
    }
    else{
      $scope.message="Too much!";
    }
    console.log( count);
  };
}

})();
