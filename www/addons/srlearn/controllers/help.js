angular.module('mm.addons.srlearn')
.controller("srlHelpCtrl", function($scope, srlImgPath){
	console.log("srlHelpCtroller executed");
	$scope.srlImgPath = srlImgPath;

})