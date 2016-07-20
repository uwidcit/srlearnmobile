angular.module('mm.addons.srlearn')
.controller("srlHelpCtrl", function($scope,$state, srlImgPath, srlLearnData){
	$scope.srlImgPath = srlImgPath;
	$scope.help_list = srlLearnData.help_list;

	$scope.loadTopic = function(topic, i){
		console.log("Selected: " + topic + " with value: " + i);
		$state.go("site.srltopic", {'topic': topic});
	};
})