angular.module('mm.addons.srlearn')
.controller("srlAboutCtrl", function($scope, srlImgPath){
	console.log("srlAboutController executed");
	$scope.srlImgPath = srlImgPath;
});