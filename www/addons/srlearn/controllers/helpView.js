angular.module('mm.addons.srlearn')
.controller("srlHelpViewCtrl", function($scope, srlHelpImgPath, srlLearnData, $stateParams, $state){
	console.log("srl Help View Controller executed");
	$scope.srlHelpImgPath = srlHelpImgPath;

	if ($stateParams.topic){
		const topic = $stateParams.topic;
		// console.log("Topic Selected for: " + topic);
		// retrieve data for topic passed as parameter
		var val = srlLearnData.help_list.filter(function(el){
			if (el.topic === topic)return el;				
		});
		// Array is returned, we know we will only get one value
		if (val.length > 0)val = val[0];
		// Assign the data to the scope to be used in the system
		$scope.topic = val.topic;

		$scope.images = val.images.map(function(img){
			return srlHelpImgPath + img;
		});
		$scope.text = val.text;

	}else{
		console.log("Did not receive topic");
		$state.go("site.srlhelp");
	}
})